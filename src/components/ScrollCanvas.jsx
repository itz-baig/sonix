import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HotspotMarker from './HotspotMarker';

gsap.registerPlugin(ScrollTrigger);

/* ── Hotspot data ───────────────────────────────────────── */
const HOTSPOTS = [
  {
    id: 'logic',
    label: 'Logic Board',
    description: 'ARM Cortex-M33 DSP with real-time adaptive ANC processing at 48-bit / 192kHz fidelity.',
    position: { x: 52.5, y: 56 },
    align: 'left',
    visibleFrom: 0.15,
    visibleTo: 1.0,
  },
  {
    id: 'driver',
    label: '40mm Planar',
    description: 'Ultra-thin diaphragm with full-field magnetic drive for flat frequency response across 5Hz–55kHz.',
    position: { x: 38.5, y: 44 },
    align: 'left',
    visibleFrom: 0.40,
    visibleTo: 1.0,
  },
  {
    id: 'chamber',
    label: 'Acoustic Chamber',
    description: 'CNC-machined aluminium resonance cavity tuned to reduce standing wave artifacts below –90dB THD.',
    position: { x: 70, y: 44 },
    align: 'right',
    visibleFrom: 0.65,
    visibleTo: 1.0,
  },
];

export default function ScrollCanvas() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    // Pin the entire section and track progress over a 200vh scroll range
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=200%',
      scrub: true,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => setScrollProgress(self.progress),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      id="engineering"
      ref={containerRef}
      aria-label="SonicX internal engineering showcase"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Responsive Canvas Wrapper ── */}
      <div
        style={{
          position: 'relative',
          width: isMobileOrTablet ? '90%' : '100%',
          height: isMobileOrTablet ? 'auto' : '100%',
          aspectRatio: isMobileOrTablet ? '16/9' : 'auto',
          maxWidth: '1280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <img
          src="/assets/A_seamless_8-second_product_video_202606240313.jpeg"
          alt="SonicX internal structural engineering"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            opacity: 1,
            zIndex: 0,
          }}
        />

        {/* ── Hotspot Markers ───────────────────────── */}
        {HOTSPOTS.map((spot) => (
          <HotspotMarker
            key={spot.id}
            {...spot}
            scrollProgress={scrollProgress}
          />
        ))}
      </div>

      {/* ── Vignette overlay ──────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Section header ────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(2.5rem, 5vh, 4rem)',
          left: 'clamp(1.5rem, 5vw, 4rem)',
          zIndex: 10,
          pointerEvents: 'none',
          maxWidth: '380px',
        }}
      >
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#c8a96e',
            marginBottom: '0.5rem',
          }}
        >
          01 / Engineering
        </p>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: '#f5f5f5',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '0.75rem',
          }}
        >
          Anatomy of Sound
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
            fontWeight: 300,
            color: 'rgba(245,245,245,0.5)',
            lineHeight: 1.6,
          }}
        >
          Scroll down to witness the breakdown of our custom acoustic drivers, ANC dsp board, and high-capacity battery configurations.
        </p>
      </div>

      {/* ── Scroll progress indicator ─────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '1px',
            background: 'rgba(255,255,255,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: `${scrollProgress * 100}%`,
              background: '#c8a96e',
              transition: 'width 0.05s linear',
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: 'rgba(245,245,245,0.4)',
            letterSpacing: '0.1em',
          }}
        >
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

    </section>
  );
}
