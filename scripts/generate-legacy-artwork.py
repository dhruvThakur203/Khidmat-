"""
Generate CINEMATIC legacy artwork variants from the original source.

Rules:
- NEVER include the PAGE 2 badge (bottom ~12% of source)
- NEVER include baked paragraph text in cinematic assets
- Desktop = intentional horizontal 16:9 atmosphere
- Mobile = portrait 4:5 atmosphere
- Original full page is copied separately as legacy-original.png (archive only)
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "heritage"
SOURCE_CANDIDATES = [
    ROOT / "LEGACY PAGE.png",
    OUT / "legacy-page.png",
    OUT / "legacy-original.png",
]

IVORY = (245, 241, 232)

# Exclude PAGE 2 badge and footer ornament at bottom of source artwork
CONTENT_BOTTOM_RATIO = 0.88
SKYLINE_TOP_RATIO = 0.58


def save_webp(img: Image.Image, path: Path, quality: int = 88) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(path, "WEBP", quality=quality, method=6)
    print(f"  wrote {path.name} ({img.size[0]}x{img.size[1]})")


def content_bounds(sh: int) -> tuple[int, int]:
    return int(sh * SKYLINE_TOP_RATIO), int(sh * CONTENT_BOTTOM_RATIO)


def crop(src: Image.Image, box: tuple[int, int, int, int]) -> Image.Image:
    return src.crop(box)


def fit_width(region: Image.Image, target_w: int) -> Image.Image:
    ratio = target_w / region.width
    return region.resize((target_w, int(region.height * ratio)), Image.Resampling.LANCZOS)


def skyline_band(src: Image.Image) -> Image.Image:
    sw, sh = src.size
    y1, y2 = content_bounds(sh)
    return crop(src, (0, y1, sw, y2))


def compose_desktop_skyline(src: Image.Image, w: int = 1920, h: int = 1080) -> Image.Image:
    """Frame 1 — Delhi architectural skyline, horizontal atmosphere."""
    canvas = Image.new("RGB", (w, h), IVORY)
    band = skyline_band(src)
    scaled = fit_width(band, int(w * 0.94))
    sy = h - scaled.height - int(h * 0.04)
    canvas.paste(scaled, ((w - scaled.width) // 2, sy))

    sw, sh = src.size
    border = crop(src, (int(sw * 0.12), 0, int(sw * 0.88), int(sh * 0.07)))
    border_scaled = fit_width(border, int(w * 0.55))
    canvas.paste(border_scaled, ((w - border_scaled.width) // 2, int(h * 0.06)))
    return canvas


def compose_mobile_skyline(src: Image.Image, w: int = 1024, h: int = 1280) -> Image.Image:
    """Frame 1 mobile — skyline monuments, portrait."""
    canvas = Image.new("RGB", (w, h), IVORY)
    band = skyline_band(src)
    scaled = fit_width(band, w)
    y = h - scaled.height - int(h * 0.06)
    canvas.paste(scaled, (0, max(int(h * 0.12), y)))
    return canvas


def compose_desktop_ornament(src: Image.Image, w: int = 1920, h: int = 1080) -> Image.Image:
    """Frame 2 — gold ornament band only, no body text."""
    canvas = Image.new("RGB", (w, h), IVORY)
    sw, sh = src.size
    # Top decorative band only — stops before logo/text body
    band = crop(src, (0, 0, sw, int(sh * 0.22)))
    scaled = fit_width(band, int(w * 0.7))
    canvas.paste(scaled, ((w - scaled.width) // 2, (h - scaled.height) // 2))
    return canvas


def compose_mobile_ornament(src: Image.Image, w: int = 1024, h: int = 1280) -> Image.Image:
    canvas = Image.new("RGB", (w, h), IVORY)
    sw, sh = src.size
    band = crop(src, (0, 0, sw, int(sh * 0.28)))
    scaled = fit_width(band, int(w * 0.88))
    canvas.paste(scaled, ((w - scaled.width) // 2, int(h * 0.18)))
    return canvas


def compose_desktop_legacy(src: Image.Image, w: int = 1920, h: int = 1080) -> Image.Image:
    """Frame 4 — Khidmat legacy atmosphere: ornament + skyline, NO baked text, NO PAGE 2."""
    canvas = Image.new("RGB", (w, h), IVORY)
    sw, sh = src.size

    # Skyline across lower portion
    band = skyline_band(src)
    skyline_scaled = fit_width(band, w)
    sy = h - skyline_scaled.height
    canvas.paste(skyline_scaled, (0, sy))

    # Subtle corner ornaments only
    accent_w, accent_h = int(sw * 0.18), int(sh * 0.20)
    left = crop(src, (0, 0, accent_w, accent_h))
    left_s = left.resize((int(w * 0.1), int(h * 0.22)), Image.Resampling.LANCZOS)
    canvas.paste(left_s, (int(w * 0.03), int(h * 0.05)))

    right = crop(src, (sw - accent_w, 0, sw, accent_h))
    right_s = right.resize((int(w * 0.1), int(h * 0.22)), Image.Resampling.LANCZOS)
    canvas.paste(right_s, (w - int(w * 0.1) - int(w * 0.03), int(h * 0.05)))

    return canvas


def compose_mobile_legacy(src: Image.Image, w: int = 1024, h: int = 1280) -> Image.Image:
    """Frame 4 mobile — skyline atmosphere, no PAGE 2."""
    canvas = Image.new("RGB", (w, h), IVORY)
    sw, sh = src.size
    y1, y2 = int(sh * 0.52), int(sh * CONTENT_BOTTOM_RATIO)
    band = crop(src, (0, y1, sw, y2))
    scaled = fit_width(band, w)
    y = (h - scaled.height) // 2 + int(h * 0.08)
    canvas.paste(scaled, (0, y))

    ornament = crop(src, (0, 0, sw, int(sh * 0.12)))
    orn_s = fit_width(ornament, int(w * 0.75))
    canvas.paste(orn_s, ((w - orn_s.width) // 2, int(h * 0.05)))
    return canvas


def main() -> None:
    source_path = next((p for p in SOURCE_CANDIDATES if p.exists()), None)
    if source_path is None:
        raise FileNotFoundError(f"Source not found. Tried: {SOURCE_CANDIDATES}")

    src = Image.open(source_path).convert("RGB")
    print(f"Source: {source_path.name} ({src.size[0]}x{src.size[1]})")

    # Archive original — full page including PAGE 2 (Our Legacy section only)
    original_out = OUT / "legacy-original.png"
    if not original_out.exists() or original_out.stat().st_mtime < source_path.stat().st_mtime:
        src.save(original_out)
        print(f"  wrote {original_out.name} (archive)")

    # Cinematic frame 4 — primary responsive pair
    save_webp(compose_desktop_legacy(src), OUT / "legacy-desktop.webp")
    save_webp(compose_mobile_legacy(src), OUT / "legacy-mobile.webp")

    # Cinematic frames 1 & 2
    save_webp(compose_desktop_skyline(src), OUT / "legacy-desktop-skyline.webp")
    save_webp(compose_mobile_skyline(src), OUT / "legacy-mobile-skyline.webp")
    save_webp(compose_desktop_ornament(src), OUT / "legacy-desktop-ornament.webp")
    save_webp(compose_mobile_ornament(src), OUT / "legacy-mobile-ornament.webp")

    # Remove obsolete assets that included full page / PAGE 2
    for obsolete in (
        "legacy-page.png",
        "legacy-tablet.webp",
        "legacy-desktop-editorial.webp",
    ):
        path = OUT / obsolete
        if path.exists():
            path.unlink()
            print(f"  removed obsolete {obsolete}")

    print("Done.")


if __name__ == "__main__":
    main()
