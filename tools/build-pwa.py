"""Dérive index.html (l'application installable) de Castellor.dc.html (le canvas).

Le canvas reste la source unique : cette transformation ne recopie rien à la
main. Elle retire le décor de maquette, déplie l'artboard sur tout l'écran,
et branche le manifeste, le service worker et les dépendances locales.

    python3 tools/build-pwa.py

Marqueurs attendus dans le canvas :
    data-canvas-frame  l'enveloppe de la planche
    data-app-root      le cadre du téléphone, qui devient l'application
    data-canvas-only   ce qui ne doit pas être livré (barre d'état, annotations)
    data-tabbar        la barre d'onglets, qui reçoit la zone sûre Android
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "Castellor.dc.html"
OUT = ROOT / "index.html"

REACT = "https://unpkg.com/react@18.3.1/umd/react.production.min.js"
REACT_DOM = "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"

HEAD = """<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Castellor — châteaux de France</title>
<meta name="description" content="Recensement des châteaux de France, pensé pour la voiture : la carte est l'écran d'accueil et les fiches restent lisibles sans réseau.">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#161826">
<meta name="color-scheme" content="dark">
<link rel="icon" href="icons/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Castellor">
<link rel="stylesheet" href="vendor/leaflet.css">
<style>
html,body{margin:0;padding:0;height:100%;background:#161826;overscroll-behavior:none}
body{-webkit-tap-highlight-color:transparent}
[data-tabbar]{padding-bottom:env(safe-area-inset-bottom,0)}
/* Cible tactile confortable sur les commandes de la carte. */
.leaflet-control-zoom a{width:34px!important;height:34px!important;line-height:34px!important}
</style>
<script>
/* Le runtime consulte window.__resources avant d'aller sur un CDN : on lui
   sert React depuis le domaine, seule façon d'être installable hors ligne. */
window.__resources = {
  "__REACT__": "vendor/react.production.min.js",
  "__REACT_DOM__": "vendor/react-dom.production.min.js"
};
</script>
<script src="./support.js"></script>
""".replace("__REACT__", REACT).replace("__REACT_DOM__", REACT_DOM)

REGISTER = """<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function (e) {
      console.warn("[castellor] service worker non enregistré :", e);
    });
  });
}
</script>
"""

APP_STYLE = ("position:relative;width:100%;height:100dvh;background:var(--color-bg);"
             "overflow:hidden;display:flex;flex-direction:column")
FRAME_STYLE = "display:block;min-height:100dvh"


def drop_canvas_only(html):
    """Retire chaque élément portant data-canvas-only, contenu compris."""
    out, n = html, 0
    while True:
        m = re.search(r'<(\w+)([^>]*\bdata-canvas-only\b[^>]*)>', out)
        if not m:
            return out, n
        tag, start = m.group(1), m.start()
        i, depth = m.end(), 1
        pat = re.compile(r'</?%s\b' % re.escape(tag))
        while depth and i < len(out):
            t = pat.search(out, i)
            if not t:
                sys.exit("balise %s non refermée" % tag)
            depth += -1 if out[t.start():t.start() + 2] == "</" else 1
            i = out.index(">", t.start()) + 1
        out = out[:start] + out[i:]
        n += 1


def main():
    src = SRC.read_text()

    body = src.split("<body>", 1)[1].rsplit("</body>", 1)[0]

    body, dropped = drop_canvas_only(body)
    if dropped != 2:
        sys.exit("attendu 2 blocs data-canvas-only, trouvé %d" % dropped)

    # L'artboard occupe tout l'écran ; l'enveloppe de planche disparaît.
    body, n1 = re.subn(r'(<div data-app-root )style="[^"]*"', r'\1style="%s"' % APP_STYLE, body)
    body, n2 = re.subn(r'(<div data-canvas-frame )style="[^"]*"', r'\1style="%s"' % FRAME_STYLE, body)
    if (n1, n2) != (1, 1):
        sys.exit("marqueurs data-app-root / data-canvas-frame introuvables")

    # Dépendances servies depuis le domaine, sans quoi rien n'est installable.
    body = re.sub(r'<link rel="stylesheet" href="https://unpkg\.com/leaflet[^>]*>', "", body)
    body = re.sub(r'<script src="https://unpkg\.com/leaflet[^>]*></script>',
                  '<script src="vendor/leaflet.js"></script>', body)
    if "unpkg.com" in body:
        sys.exit("une référence unpkg subsiste dans le corps")

    # Le design system importe Inter de Google Fonts : hors ligne, la fonte ne
    # chargerait pas. On en dérive une copie qui pointe vers vendor/fonts/,
    # sans toucher à _ds/, qui appartient à l'outil de conception.
    ds = next(ROOT.glob("_ds/*/styles.css"))
    css = ds.read_text()
    css, n = re.subn(r"@import url\('https://fonts\.googleapis\.com/[^']*'\);",
                     '@import url("fonts/inter.css");', css)
    if n != 1:
        sys.exit("import Google Fonts introuvable dans %s" % ds)
    (ROOT / "vendor" / "nocturne.css").write_text(
        "/* Dérivé de %s par tools/build-pwa.py — ne pas modifier à la main. */\n%s"
        % (ds.relative_to(ROOT), css))
    body = body.replace('href="_ds/%s/styles.css"' % ds.parent.name, 'href="vendor/nocturne.css"')
    if "fonts.googleapis.com" in body or '_ds/%s/styles.css' % ds.parent.name in body:
        sys.exit("la feuille de style du design system n'a pas été redirigée")

    OUT.write_text(
        "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n" + HEAD + "</head>\n<body>"
        + body + REGISTER + "</body>\n</html>\n"
    )
    print("index.html écrit — %d octets" % OUT.stat().st_size)


if __name__ == "__main__":
    main()
