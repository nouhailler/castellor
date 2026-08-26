#!/bin/sh
# Rapatrie Inter depuis Google Fonts dans vendor/fonts/, sous-ensembles latins
# seulement. À relancer si le design system change de fonte.
set -e
cd "$(dirname "$0")/.."
mkdir -p vendor/fonts
curl -sSfL -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/126 Safari/537.36" \
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" \
  -o vendor/fonts/inter.css
python3 - <<'PY'
import re, pathlib, urllib.request
d = pathlib.Path("vendor/fonts"); css = (d / "inter.css").read_text()
gardes, tel = [], {}
for b in re.split(r"(?=/\*\s*\w[\w-]*\s*\*/)", css):
    m = re.match(r"/\*\s*([\w-]+)\s*\*/", b.strip())
    if not m or m.group(1) not in ("latin", "latin-ext"): continue
    def local(mo):
        url = mo.group(1); nom = url.rsplit("/", 1)[-1]; tel[nom] = url
        return "url(%s)" % nom
    gardes.append(re.sub(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", local, b).strip())
for nom, url in tel.items():
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    (d / nom).write_bytes(urllib.request.urlopen(req, timeout=30).read())
(d / "inter.css").write_text(
    "/* Inter — sous-ensembles latin et latin-ext, servis depuis le domaine.\n"
    "   Rafraîchir avec : tools/fetch-fonts.sh */\n" + "\n\n".join(gardes) + "\n")
print("polices :", len(tel), "fichiers")
PY
