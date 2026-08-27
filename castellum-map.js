/* <castellum-map> — carte Leaflet pilotée par la fiche appelante.
   API impérative : setData(list), setSelected(id), setSatellite(bool),
   setOffline(bool), flyTo(lat, lng, zoom), setUserPos(lat, lng), onSelect(fn),
   onOpen(fn). Chaque élément de setData(list) peut porter un champ `photo`
   (URL de vignette) : au survol d'un point, une info-bulle affiche cette
   photo et le nom ; cliquer sur l'info-bulle appelle onOpen(id) pour ouvrir
   la fiche directement, sans passer par la sélection sur la carte. Cliquer
   un point rapproche aussi la vue (CLICK_ZOOM) si la carte est trop dézoomée
   pour distinguer les points voisins. */
(function () {
  const OSM = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  const SAT = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  const ACCENT = '#9184d9';
  const RUIN = '#b2b6ca';
  /* En zone dense (vallée de la Loire, Périgord…), plusieurs points se
     chevauchent au même pixel à l'échelle France entière : un premier clic
     rapproche la vue avant de sélectionner, pour permettre d'en distinguer
     un second. Sans effet si on est déjà plus zoomé que ce niveau. */
  const CLICK_ZOOM = 11;

  const isRuin = (c) => c.t === 'ruines' || c.etat === 'Ruines' || c.etat === 'Vestiges';

  const escHtml = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (ch) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));

  const TOOLTIP_CSS = `
    .castellum-tt{background:transparent;border:0;box-shadow:none;padding:0;opacity:1!important}
    .castellum-tt:before{display:none}
    .castellum-tt .castellum-tt-card{width:150px;border-radius:10px;overflow:hidden;background:#1e2030;
      box-shadow:0 8px 22px rgba(0,0,0,.45),0 0 0 1px #3f424d;cursor:pointer;font-family:var(--font-body,sans-serif)}
    .castellum-tt .castellum-tt-photo{width:100%;height:84px;background-color:#1b1d2b;background-size:cover;background-position:center}
    .castellum-tt .castellum-tt-name{padding:6px 8px 7px;font:500 11.5px/1.25 var(--font-heading,sans-serif);
      color:#e9e9ed;letter-spacing:-.01em}
  `;

  class CastellumMap extends HTMLElement {
    constructor() {
      super();
      this.data = [];
      this.selected = null;
      this.satellite = false;
      this.offline = false;
      this.onSelect = null;
      this.onOpen = null;
      this._markers = new Map();
    }

    connectedCallback() {
      if (this._built) return;
      this._built = true;
      this.style.display = 'block';
      this.style.position = 'relative';
      /* Sans z-index explicite ici, cet élément ne crée pas de contexte
         d'empilement : les panneaux internes de Leaflet (.leaflet-pane
         z-index:400, .leaflet-top/.leaflet-bottom z-index:1000…) se
         comparent alors directement aux frères de <castellum-map> — dont la
         carte de sélection affichée sous la carte — et gagnent malgré un
         ordre DOM antérieur. Ce z-index les contient. */
      this.style.zIndex = '0';
      this.style.width = '100%';
      this.style.height = '100%';
      this.style.background = '#101220';
      this._el = document.createElement('div');
      this._el.style.cssText = 'position:absolute;inset:0';
      this.appendChild(this._el);
      this._waitForLeaflet();
    }

    _waitForLeaflet() {
      if (window.L && window.L.map) { this._init(); return; }
      const t = setInterval(() => {
        if (window.L && window.L.map) { clearInterval(t); this._init(); }
      }, 60);
      setTimeout(() => clearInterval(t), 15000);
    }

    _init() {
      const L = window.L;
      this.map = L.map(this._el, {
        center: [46.7, 2.4], zoom: 5, zoomControl: false,
        attributionControl: true, preferCanvas: true
      });
      L.control.zoom({ position: 'bottomright' }).addTo(this.map);
      this.osm = L.tileLayer(OSM, { attribution: '© OpenStreetMap contributors', maxZoom: 18 });
      this.sat = L.tileLayer(SAT, { attribution: 'Imagerie Esri, Maxar, Earthstar Geographics', maxZoom: 18 });
      this.osm.addTo(this.map);
      this._paneStyle();
      this._layer = L.layerGroup().addTo(this.map);
      this._userLayer = L.layerGroup().addTo(this.map);
      const a = this._el.querySelector('.leaflet-control-attribution');
      if (a) a.style.cssText = 'background:rgba(22,24,38,.72);color:#8d92a6;font-size:9px;padding:1px 5px';
      this._el.querySelectorAll('.leaflet-control-zoom a').forEach((b) => {
        b.style.cssText = 'background:#232532;color:#e9e9ed;border-color:#3f424d;width:28px;height:28px;line-height:28px;font-size:15px';
      });
      if (!document.getElementById('castellum-tt-style')) {
        const style = document.createElement('style');
        style.id = 'castellum-tt-style';
        style.textContent = TOOLTIP_CSS;
        document.head.appendChild(style);
      }
      this._ready = true;
      this.render();
      setTimeout(() => this.map.invalidateSize(), 120);
      window.addEventListener('resize', () => this.map && this.map.invalidateSize());
    }

    _paneStyle() {
      const p = this.map.getPane('tilePane');
      const dark = 'invert(1) hue-rotate(185deg) brightness(.92) contrast(.92) saturate(.55)';
      if (this.offline) {
        p.style.filter = dark + ' grayscale(.7)';
        p.style.opacity = '0.45';
      } else if (this.satellite) {
        p.style.filter = 'brightness(.82) saturate(.85)';
        p.style.opacity = '1';
      } else {
        p.style.filter = dark;
        p.style.opacity = '1';
      }
    }

    setSatellite(v) {
      this.satellite = !!v;
      if (!this._ready) return;
      const want = this.satellite && !this.offline ? this.sat : this.osm;
      const other = want === this.sat ? this.osm : this.sat;
      if (this.map.hasLayer(other)) this.map.removeLayer(other);
      if (!this.map.hasLayer(want)) want.addTo(this.map);
      this._paneStyle();
    }

    setOffline(v) {
      this.offline = !!v;
      if (!this._ready) return;
      this.setSatellite(this.satellite);
    }

    setData(list) {
      this.data = list || [];
      if (this._ready) this.render();
    }

    setSelected(id) {
      this.selected = id;
      if (this._ready) this.render();
    }

    setUserPos(lat, lng) {
      this.userPos = [lat, lng];
      if (!this._ready) return;
      const L = window.L;
      this._userLayer.clearLayers();
      L.circleMarker(this.userPos, {
        radius: 6, color: '#e9e9ed', weight: 2, fillColor: '#e9e9ed', fillOpacity: 1
      }).addTo(this._userLayer);
      L.circle(this.userPos, {
        radius: 18000, color: '#e9e9ed', weight: 1, opacity: .35, fillColor: '#e9e9ed', fillOpacity: .06
      }).addTo(this._userLayer);
    }

    flyTo(lat, lng, zoom) {
      if (!this._ready) return;
      this.map.flyTo([lat, lng], zoom || 12, { duration: .8 });
    }

    fitAll() {
      if (!this._ready || !this.data.length) return;
      const L = window.L;
      this.map.fitBounds(L.latLngBounds(this.data.map((c) => [c.lat, c.lng])).pad(0.15));
    }

    render() {
      const L = window.L;
      this._layer.clearLayers();
      this._markers.clear();
      this.data.forEach((c) => {
        const sel = c.id === this.selected;
        const ruin = isRuin(c);
        const base = ruin ? RUIN : ACCENT;
        const m = L.circleMarker([c.lat, c.lng], {
          radius: sel ? 9 : 6,
          color: sel ? '#f5f4ff' : base,
          weight: sel ? 2.5 : 1.5,
          opacity: 1,
          fillColor: base,
          fillOpacity: ruin ? 0.25 : 0.75
        });
        m.on('click', () => {
          if (this.map.getZoom() < CLICK_ZOOM) this.map.flyTo([c.lat, c.lng], CLICK_ZOOM, { duration: .6 });
          if (this.onSelect) this.onSelect(c.id);
        });
        m.on('mouseover', () => m.setStyle({ weight: 3 }));
        m.on('mouseout', () => m.setStyle({ weight: sel ? 2.5 : 1.5 }));
        const photo = c.photo
          ? `<div class="castellum-tt-photo" style="background-image:url('${c.photo}')"></div>`
          : `<div class="castellum-tt-photo"></div>`;
        m.bindTooltip(
          `<div class="castellum-tt-card">${photo}<div class="castellum-tt-name">${escHtml(c.n)}</div></div>`,
          { direction: 'top', offset: L.point(0, -6), opacity: 1, className: 'castellum-tt', interactive: true, sticky: false }
        );
        m.on('tooltipopen', (e) => {
          const el = e.tooltip.getElement();
          if (!el) return;
          el.onclick = (ev) => { ev.stopPropagation(); if (this.onOpen) this.onOpen(c.id); };
        });
        m.addTo(this._layer);
        this._markers.set(c.id, m);
        if (sel) {
          L.circleMarker([c.lat, c.lng], {
            radius: 17, color: base, weight: 1, opacity: .5, fillColor: base, fillOpacity: .1
          }).addTo(this._layer);
        }
      });
    }
  }

  if (!window.customElements.get('castellum-map')) {
    window.customElements.define('castellum-map', CastellumMap);
  }
})();
