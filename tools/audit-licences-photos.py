import json, re, sys, time, urllib.parse, urllib.request, concurrent.futures as cf

UA = {"User-Agent": "Castellor-licence-audit/1.0 (https://github.com/nouhailler/castellor)"}

def get(url):
    for _ in range(3):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=25) as r:
                return json.load(r)
        except Exception:
            time.sleep(1.2)
    return None

# Les titres, lus depuis le fichier de données réel
src = open("chateaux-data.js", encoding="utf-8").read()
block = re.search(r"window\.CASTELLUM_WIKI\s*=\s*\{(.*?)\n\};", src, re.S).group(1)
WIKI = dict(re.findall(r'(\w+):\s*"([^"]+)"', block))

def audit(item):
    cid, title = item
    out = {"id": cid, "titre": title}
    s = get("https://fr.wikipedia.org/api/rest_v1/page/summary/" + urllib.parse.quote(title))
    thumb = (s or {}).get("thumbnail", {}).get("source")
    if not thumb:
        out["erreur"] = "pas de vignette dans le résumé"
        return out
    # Exactement la regex utilisée par l'application
    m = re.search(r"/([^/]+\.(?:jpg|jpeg|png|webp))/\d+px-", thumb, re.I)
    if not m:
        out["erreur"] = "nom de fichier non extractible"
        return out
    fname = urllib.parse.unquote(m.group(1))
    host = "commons.wikimedia.org" if "/wikipedia/commons/" in thumb else "fr.wikipedia.org"
    out["fichier"] = fname
    out["hote"] = host
    api = ("https://%s/w/api.php?action=query&format=json&prop=imageinfo"
           "&iiprop=extmetadata|url&titles=%s" % (host, urllib.parse.quote("File:" + fname)))
    d = get(api)
    try:
        page = next(iter(d["query"]["pages"].values()))
        em = page["imageinfo"][0]["extmetadata"]
    except Exception:
        out["erreur"] = "métadonnées illisibles"
        return out
    g = lambda k: re.sub(r"<[^>]+>", "", str(em.get(k, {}).get("value", ""))).strip()
    out["licence"] = g("LicenseShortName") or g("License")
    out["usage"] = g("UsageTerms")
    out["auteur"] = g("Artist")[:70]
    out["credit"] = g("Credit")[:50]
    out["attribution_requise"] = g("AttributionRequired")
    out["restrictions"] = g("Restrictions")
    return out

items = sorted(WIKI.items())
with cf.ThreadPoolExecutor(max_workers=6) as ex:
    res = list(ex.map(audit, items))
json.dump(res, open(sys.argv[1], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("fiches auditées :", len(res))
