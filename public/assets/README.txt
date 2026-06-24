This directory contains the pre-rendered Google Flow / Veo engine video asset.

Asset pipeline:
  1. Generate base headphone renderings via Google Whisk
     - Subject: High-fidelity CAD wireframe of a futuristic over-ear headset
     - Scene: Minimalist studio, volumetric lighting, dark slate textures
     - Style: Modern tech industrial, desaturated metallic, ambient occlusion

  2. Animate in Google Flow (Veo engine):
     - Prompt: "An internal cross-section explode view animation of headphones,
       structural sub-assemblies smoothly expanding outward along the X and Y
       axes, ultra-precise mechanical physics, cinematic lighting, slow motion
       24fps, static studio background camera positioning."

  3. Export & optimize with FFmpeg:
     ffmpeg -i raw-explode.mp4 \
       -vcodec libx264 \
       -crf 24 \
       -pix_fmt yuv420p \
       -movflags +faststart \
       public/assets/flow-explode.mp4

Place the final output as: public/assets/flow-explode.mp4

The ScrollCanvas component will gracefully fall back to an SVG headphone
silhouette when this file is absent.
