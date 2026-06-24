import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VARIANTS = [
  {
    id: 'obsidian',
    name: 'Obsidian Slate',
    material: 'Anodised Aluminium',
    color: '#000000',
    accent: '#3a3a3c',
    description: 'Matte-blasted aerospace-grade 6061-T6 alloy with micro-texture coating.',
    image: '/assets/obsidian_slate.jpeg',
  },
  {
    id: 'titanium',
    name: 'Raw Titanium',
    material: 'Grade-5 Titanium',
    color: '#000000',
    accent: '#9ca3af',
    description: 'Unpolished Ti-6Al-4V with preserved machining marks. Weight: 248g.',
    image: '/assets/raw_titanium.jpeg',
  },
  {
    id: 'midnight',
    name: 'Midnight Copper',
    material: 'PVD-Coated Brass',
    color: '#000000',
    accent: '#c8a96e',
    description: 'Physical vapour-deposition copper film over precision-cast brass housings.',
    image: '/assets/midnight_copper.jpeg',
  },
  {
    id: 'arctic',
    name: 'Arctic Ceramic',
    material: 'Zirconia Ceramic',
    color: '#000000',
    accent: '#c8a96e',
    description: 'Injection-moulded zirconia ceramic — harder than steel, lighter than aluminium.',
    image: '/assets/artic_ceramic.jpeg',
  },
];

export default function DesignLanguage() {
  const sectionRef  = useRef(null);
  const trackRef    = useRef(null);
  const headingRef  = useRef(null);

  useEffect(() => {
    const track  = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const totalWidth = track.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    // Scroll track horizontally
    tl.to(track, {
      x: -totalWidth,
      ease: 'none',
      duration: 1,
    }, 0);

    // Fade out heading during the first 15% of scrolling
    if (headingRef.current) {
      tl.to(headingRef.current, {
        opacity: 0,
        y: -30,
        ease: 'power1.out',
        duration: 0.15,
      }, 0);
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="design"
      ref={sectionRef}
      aria-label="SonicX design language and material variants"
      style={{
        height: '100vh',
        overflow: 'hidden',
        background: '#0a0a0a',
        position: 'relative',
      }}
    >
      {/* Section label — stays fixed during horizontal scroll */}
      <div
        ref={headingRef}
        style={{
          position: 'absolute',
          top: 'clamp(2rem, 4vw, 3.5rem)',
          left: 'clamp(1.5rem, 5vw, 4rem)',
          zIndex: 10,
          willChange: 'opacity, transform',
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
          03 / Design Language
        </p>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#f5f5f5',
          }}
        >
          Form follows function.
        </h2>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'stretch',
          height: '100vh',
          width: 'max-content',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        {VARIANTS.map(({ id, name, material, color, accent, description, image }) => (
          <div
            key={id}
            id={`variant-${id}`}
            style={{
              width: 'clamp(300px, 36vw, 480px)',
              maxWidth: 'clamp(300px, 36vw, 480px)',
              flexShrink: 0,
              marginRight: '1.5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2.5rem',
              background: color,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
              borderLeft: `1px solid rgba(255,255,255,0.02)`,
              borderRight: `1px solid rgba(0,0,0,0.2)`,
            }}
          >
            {/* Material texture overlay */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(ellipse 80% 60% at 40% 30%, rgba(255,255,255,0.03) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Product Image */}
            {image && (
              <div
                style={{
                  width: '100%',
                  maxHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  zIndex: 1,
                }}
              >
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Material badge */}
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: accent,
                  border: `1px solid ${accent}40`,
                  padding: '0.25rem 0.6rem',
                  marginBottom: '1rem',
                  background: `${accent}10`,
                }}
              >
                {material}
              </span>

              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#f5f5f5',
                  marginBottom: '0.75rem',
                }}
              >
                {name}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'rgba(245,245,245,0.5)',
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(245,245,245,0.3)',
          }}
        >
          Drag to explore
        </span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path d="M0 6h22M17 1l5 5-5 5" stroke="rgba(245,245,245,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
