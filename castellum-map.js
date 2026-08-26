/* <castellum-map> — carte Leaflet pilotée par la fiche appelante.
   API impérative : setData(list), setSelected(id), setSatellite(bool),
   setOffline(bool), flyTo(lat, lng, zoom), setUserPos(lat, lng), onSelect(fn). */
(function () {
  const OSM = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  const SAT = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  const ACCENT = '#9184d9';
  const RUIN = '#b2b6ca';

  const isRuin = (c) => c.t === 'ruines' || c.etat === 'Ruines' || c.etat === 'Vestiges';

  class CastellumMap extends HTMLElement {
    constructor() {
      super();
      this.data = [];
      this.selected = null;
      this.satellite = false;
      this.offline = false;
      this.onSelect = null;
      this._markers = new Map();
    }

    connectedCallback() {
      if (this._built) return;
      this._built = true;
      this.style.display = 'block';
      this.style.position = 'relative';
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
        m.on('click', () => { if (this.onSelect) this.onSelect(c.id); });
        m.on('mouseover', () => m.setStyle({ weight: 3 }));
        m.on('mouseout', () => m.setStyle({ weight: sel ? 2.5 : 1.5 }));
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
