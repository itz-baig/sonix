# Product Requirement Document (PRD)
## Project Name: SonicX - Immersive 3D/Video Scrollmation Showcase

### 1. Executive Summary & Project Objective
The objective of this project is to build an elite, production-grade interactive product landing page for a premium audio brand ("SonicX"). Instead of standard flat grids, this project leverages a high-fidelity **hybrid WebGL and video scrollmation strategy** to create a cinematic narrative experience driven entirely by user scroll. 

By integrating state-of-the-art web tech stacks with professional AI asset generation platforms, this portfolio piece serves as a premium demonstration of advanced frontend skillsets, creative asset synthesis, and highly responsive motion design.

---

### 2. Creative Asset Pipeline & AI Engine Setup
Rather than relying on heavy raw 3D meshes that degrade runtime mobile performance, this strategy leverages pre-rendered high-fidelity cinematic video slices. These layers are driven linearly by user scroll to mimic real-time internal mesh explosions.

[ Raw Asset Drafts ] ──> [ Google Whisk ] ──> [ Google Flow ] ──> [ Scroll Animation Frame Sync ]
│                      │
(Style & Core Elements)     (Veo Engine Video)


#### Step 1: Base Asset Generation via Google Whisk
* **Purpose:** Synthesize high-fidelity blueprint and aesthetic renderings for the product's outer casing and exposed internal sub-assemblies (drivers, logic boards, acoustic chambers).
* **Execution Strategy:** Use **Whisk’s** 3-slot setup to maintain pixel-perfect industrial design parameters:
    1.  **Subject:** High-fidelity CAD wireframe outline or industrial sketch of a futuristic over-ear audio headset.
    2.  **Scene:** Minimalist studio setting with subtle volumetric lighting, dark sand-blasted slate textures, and ambient light fields.
    3.  **Style:** Modern tech industrial design style with desaturated metallic finishes and high-contrast ambient occlusion overlays.

#### Step 2: Linear Component Motion & "Explode Effect" via Google Flow
* **Purpose:** Convert static internal component breakdowns into perfectly smooth, linear exploded-view video segments.
* **Execution Strategy:** Move the generated composite assets into the **Google Flow AI Creative Studio**:
    1.  Import the structured composite subject directly into the Flow project library.
    2.  Utilize **Google Flow Animate** powered by the **Veo Engine** to generate 4-to-8-second high-fidelity linear clip segments.
    3.  **Prompt Parameters:** *"An internal cross-section explode view animation of headphones, structural sub-assemblies smoothly expanding outward along the X and Y axes, ultra-precise mechanical physics, cinematic lighting, slow motion 24fps, static studio background camera positioning."*
    4.  Extract the sequence as a high-bitrate frame sequence or optimized H.264/HEVC web video container for scroll mapping.

---

### 3. Frontend Architecture & Tech Stack
To ensure maximum performance and adhere to professional engineering repository standards, the project utilizes the following modern frontend stack:

* **Core Architecture:** React 19 (Vite)
* **Styling Engine:** Tailwind CSS 4.0 (Utilizing a strict design token system for dark-mode layouts)
* **Motion Framework:** **GSAP (GreenSock Animation Platform)** with **ScrollTrigger** for binding video timeline states to scroll progress.
* **Asset Management:** Custom Canvas-based Frame Preloader or React Player context wrappers.

---

### 4. Interactive UX & Workflow Mechanics

#### Feature A: Cinematic Scrollmation Video Control
As the user scrolls through Section 2 of the landing page, the underlying video segment generated via Google Flow advances its playback head precisely relative to the scroll coordinates.
* **Technical Implementation:** GSAP's `ScrollTrigger` binds the page scroll to a virtual timeline controlling the `currentTime` property of an optimized `<video>` element, or an HTML5 Canvas sequence player drawing individual compressed image frames for stutter-free scrolling performance.

#### Feature B: Floating Blueprint Overlays
As the internal components expand outward during the scroll sequence, relative positioned HTML elements drop in to showcase detailed engineering descriptions.
* **Technical Implementation:** Standard DOM structure with absolute positioning layered over the canvas. All textual items remain fully discoverable for SEO crawler compatibility.

+-------------------------------------------------------+
|  [ Sticky Canvas / Video Frame Container - Layer 0 ]  |
|                                                       |
|        (   (  [ EXPOSED CRITICAL CIRCUIT ]  )   )     |
|              │                                        |
|              └───> [ Accessible HTML Callout ]         |
|                                                       |
+-------------------------------------------------------+


---

### 5. Repository Structure & Configuration Blueprint

To present yourself to top-tier agencies, structure your project repository following professional enterprise standards:

```text
sonicx-immersive-showcase/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD deployment pipeline
├── public/
│   └── assets/
│       ├── flow-explode.mp4    # Optimized Google Flow animation asset
│       └── blueprints/         # Static background fallbacks
├── src/
│   ├── assets/                 # Brand SVG markers and localized icons
│   ├── components/             # Reusable atomic UI elements
│   │   ├── ScrollCanvas.jsx    # The core video scroll frame playback controller
│   │   ├── HotspotMarker.jsx   # Interactive structural overlay points
│   │   └── Navbar.jsx          # Fixed navigation and sound controls
│   ├── hooks/
│   │   └── useLocomotiveScroll.js # Custom smooth scroll configuration
│   ├── styles/
│   │   └── index.css           # Global Tailwind utilities and typography setups
│   ├── App.jsx                 # Primary layout composition root
│   └── main.jsx                # Application rendering entrypoint
├── tailwind.config.js          # Extended layout design tokens configuration
├── vite.config.js              # Advanced asset asset optimization flags
└── README.md                   # System configuration and dev commands guide