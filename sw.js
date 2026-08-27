/* Service worker de Castellor.

   Trois besoins distincts, trois stratégies :
   - la coquille de l'application doit survivre à une coupure totale ;
   - les tuiles et les photos déjà vues doivent rester consultables en voiture ;
   - les métadonnées Wikimedia doivent se rafraîchir quand le réseau revient.

   Le satellite reste volontairement en ligne seulement : mettre en cache de
   l'imagerie haute résolution remplirait l'appareil sans bénéfice réel. */

const VERSION = "v9";
const SHELL   = "castellor-shell-" + VERSION;
const TILES   = "castellor-tuiles-" + VERSION;
const PHOTOS  = "castellor-photos-" + VERSION;
const META    = "castellor-meta-" + VERSION;

const A_NOUS = [SHELL, TILES, PHOTOS, META];

/* Tout ce qu'il faut pour démarrer sans réseau. */
const COQUILLE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "support.js",
  "castellum-map.js",
  "chateaux-data.js",
  "glossaire-data.js",
  "encyclopedie-data.js",
  "vendor/react.production.min.js",
  "vendor/react-dom.production.min.js",
  "vendor/leaflet.js",
  "vendor/leaflet.css",
  "vendor/images/marker-icon.png",
  "vendor/images/marker-icon-2x.png",
  "vendor/images/marker-shadow.png",
  "vendor/images/layers.png",
  "vendor/images/layers-2x.png",
  "vendor/nocturne.css",
  "vendor/fonts/inter.css",
  "vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2",
  "vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2",
  "_ds/nocturne-2e02886b-1e44-4a41-b221-80854cfe6292/_ds_bundle.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-192.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png"
];

/* Plafonds : au-delà, les entrées les plus anciennes sortent du cache. */
const PLAFOND = { [TILES]: 900, [PHOTOS]: 250, [META]: 120 };

async function limiter(nom) {
  const max = PLAFOND[nom];
  if (!max) return;
  const c = await caches.open(nom);
  const clefs = await c.keys();
  for (let i = 0; i < clefs.length - max; i++) await c.delete(clefs[i]);
}

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    /* addAll échoue en bloc : on tolère qu'un fichier manque plutôt que de
       laisser l'installation entière échouer. */
    await Promise.all(COQUILLE.map((u) => c.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const noms = await caches.keys();
    await Promise.all(noms.filter((n) => n.startsWith("castellor-") && !A_NOUS.includes(n))
                          .map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

/* Écriture en cache. Elle ne doit JAMAIS faire échouer la réponse : une
   promesse rejetée dans respondWith se traduit par une image ou une tuile
   vide, sans erreur lisible. On écrit donc à côté, et on avale les échecs.
   Le cas particulier : cache.put() refuse une réponse issue d'une
   redirection, et Special:FilePath redirige toujours vers
   upload.wikimedia.org — on en recopie alors le corps dans une réponse
   propre. */
function ecrire(c, req, rep, nom) {
  let copie;
  try { copie = rep.clone(); } catch (e) { return; }
  (async () => {
    const aStocker = copie.redirected
      ? new Response(await copie.blob(), {
          status: copie.status, statusText: copie.statusText, headers: copie.headers
        })
      : copie;
    await c.put(req, aStocker);
    await limiter(nom);
  })().catch(() => { /* cache plein, réponse non stockable : sans conséquence */ });
}

/* D'abord le cache : ce qui ne change pas, ou dont une version un peu ancienne
   vaut mieux qu'un écran vide. */
async function cacheDabord(req, nom) {
  const c = await caches.open(nom);
  const hit = await c.match(req);
  if (hit) return hit;
  let rep;
  try {
    rep = await fetch(req);
  } catch (e) {
    /* Réseau coupé et rien en cache : on laisse remonter, le navigateur
       affichera son propre état d'échec plutôt qu'une page blanche. */
    throw e;
  }
  if (rep && (rep.ok || rep.type === "opaque")) ecrire(c, req, rep, nom);
  return rep;
}

/* D'abord le réseau : ce qui doit être frais, mais dont on garde un repli. */
async function reseauDabord(req, nom) {
  const c = await caches.open(nom);
  try {
    const rep = await fetch(req);
    if (rep && rep.ok) ecrire(c, req, rep, nom);
    return rep;
  } catch (e) {
    const hit = await c.match(req);
    if (hit) return hit;
    throw e;
  }
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const memeOrigine = url.origin === self.location.origin;

  /* Navigation : réseau d'abord pour prendre les mises à jour, sinon la
     coquille en cache — c'est ce qui permet d'ouvrir l'app hors ligne. */
  if (req.mode === "navigate") {
    e.respondWith((async () => {
      try { return await fetch(req); }
      catch (err) {
        const c = await caches.open(SHELL);
        return (await c.match("index.html")) || (await c.match("./")) || Response.error();
      }
    })());
    return;
  }

  if (memeOrigine) { e.respondWith(cacheDabord(req, SHELL)); return; }

  /* Fond de carte : c'est ce cache qui rend vraie la promesse « hors ligne ». */
  if (url.hostname.endsWith("tile.openstreetmap.org")) {
    e.respondWith(cacheDabord(req, TILES));
    return;
  }

  /* Photographies Wikimedia, vignettes comme haute résolution. */
  if (url.pathname.includes("/Special:FilePath/")) {
    e.respondWith(cacheDabord(req, PHOTOS));
    return;
  }

  /* Métadonnées : résumés d'articles et crédits de licence. */
  if (url.pathname.startsWith("/api/rest_v1/") || url.pathname.startsWith("/w/api.php")) {
    e.respondWith(reseauDabord(req, META));
    return;
  }

  /* Le reste — imagerie satellite Esri notamment — passe sans cache. */
});
