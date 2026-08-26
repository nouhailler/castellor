"""Génère les icônes de Castellor : un donjon crénelé aux couleurs Nocturne.

Reproductible — relancer après toute modification des couleurs du thème :
    python3 tools/make-icons.py
"""
from PIL import Image, ImageDraw

BG     = (22, 24, 38, 255)     # --color-bg     #161826
ACCENT = (145, 132, 217, 255)  # --color-accent #9184d9

def castle(d, cx, cy, s):
    """Donjon vu de face : deux tours latérales, un corps central crénelé."""
    u = s / 100.0                      # unité relative, pour rester net à toute taille
    x = lambda v: cx + v * u
    y = lambda v: cy + v * u

    def crenelated(x0, x1, top, bottom, n):
        w = (x1 - x0) / (2 * n + 1)
        d.rectangle([x(x0), y(top + 12), x(x1), y(bottom)], fill=ACCENT)
        for i in range(n + 1):
            a = x0 + i * 2 * w
            d.rectangle([x(a), y(top), x(a + w), y(top + 14)], fill=ACCENT)

    crenelated(-46, -20, -14, 46, 1)   # tour gauche
    crenelated(20, 46, -14, 46, 1)     # tour droite
    crenelated(-22, 22, -40, 46, 2)    # corps central, plus haut
    d.rectangle([x(-9), y(16), x(9), y(46)], fill=BG)   # porte
    d.ellipse([x(-9), y(7), x(9), y(25)], fill=BG)      # arc de la porte
    d.rectangle([x(-3), y(-18), x(3), y(-2)], fill=BG)  # meurtrière

def make(path, size, maskable=False):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if maskable:
        # pleine page : la zone sûre est le disque central de 80 %
        d.rectangle([0, 0, size, size], fill=BG)
        castle(d, size / 2, size / 2, size * 0.60)
    else:
        d.rounded_rectangle([0, 0, size - 1, size - 1], radius=size * 0.22, fill=BG)
        castle(d, size / 2, size / 2, size * 0.80)
    img.save(path)
    return path

if __name__ == "__main__":
    for s in (192, 512):
        print(make(f"icons/icon-{s}.png", s))
        print(make(f"icons/icon-maskable-{s}.png", s, maskable=True))
    print(make("icons/apple-touch-icon.png", 180))
    print(make("icons/favicon-32.png", 32))
