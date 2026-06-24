# SonicX — Immersive Audio Showcase

[![Deploy](https://github.com/your-username/sonicx-immersive-showcase/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/sonicx-immersive-showcase/actions/workflows/deploy.yml)

A production-grade cinematic landing page for a premium audio brand. Scroll-driven video scrollmation, GSAP-powered animations, and blueprint hotspot overlays built with React 19 + Vite + Tailwind CSS 4.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 (Vite) |
| Styling | Tailwind CSS 4.0 (CSS-first `@theme`) |
| Animation | GSAP + ScrollTrigger |
| Smooth Scroll | Locomotive Scroll v5 |
| Deployment | GitHub Pages via GitHub Actions |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

---

## Video Asset Pipeline

The core scrollmation relies on a pre-rendered explode-view video:

### Step 1 — Google Whisk (Base Asset)
- **Subject:** CAD wireframe of a futuristic over-ear headset
- **Scene:** Minimalist studio, volumetric lighting, slate textures
- **Style:** Modern tech industrial, desaturated metallic, ambient occlusion

### Step 2 — Google Flow / Veo Engine (Animation)
Prompt used:
> *"An internal cross-section explode view animation of headphones, structural sub-assemblies smoothly expanding outward along the X and Y axes, ultra-precise mechanical physics, cinematic lighting, slow motion 24fps, static studio background camera positioning."*

### Step 3 — FFmpeg Optimization
```bash
ffmpeg -i raw-explode.mp4 \
  -vcodec libx264 \
  -crf 24 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  public/assets/flow-explode.mp4
```

Place the final file at `public/assets/flow-explode.mp4`. The page gracefully falls back to an SVG silhouette if the file is absent.

---

## Project Structure

```
sonicx-immersive-showcase/
├── .github/workflows/deploy.yml     # GitHub Actions CI/CD
├── public/assets/
│   ├── flow-explode.mp4             # Google Flow animation (add manually)
│   └── blueprints/                  # Static fallback frames
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Fixed glassmorphism navigation
│   │   ├── Hero.jsx                 # Full-viewport hero section
│   │   ├── ScrollCanvas.jsx         # GSAP video scrollmation engine
│   │   ├── HotspotMarker.jsx        # Blueprint callout overlays
│   │   ├── Acoustics.jsx            # Animated spec counters
│   │   ├── DesignLanguage.jsx       # Horizontal scroll carousel
│   │   ├── Order.jsx                # CTA pre-order section
│   │   └── Footer.jsx               # Minimal footer
│   ├── hooks/
│   │   ├── useLocomotiveScroll.js   # GSAP + Locomotive bridge
│   │   └── useScrollProgress.js     # Normalized scroll progress hook
│   ├── index.css                    # Tailwind v4 design tokens + globals
│   ├── App.jsx                      # Layout composition
│   └── main.jsx                     # React entry point
└── vite.config.js
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Video file size | < 8 MB |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| CLS | < 0.1 |
| LCP | < 2.5s |

---

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the included workflow.
Set `base` in `vite.config.js` to your repo name for subdirectory deployments:

```js
export default defineConfig({
  base: '/sonicx-immersive-showcase/',
  // ...
})
```
