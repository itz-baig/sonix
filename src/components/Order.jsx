import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Order() {
  const sectionRef  = useRef(null);
  const priceRef    = useRef(null);
  const contentRef  = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 60%',
      onEnter: () => {
        setRevealed(true);
        gsap.from(contentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        });
      },
      once: true,
    });
    return () => trigger.kill();
  }, []);

  return (
    <section
      id="order"
      ref={sectionRef}
      aria-label="SonicX pre-order"
      style={{
        position: 'relative',
        padding: 'clamp(6rem, 12vw, 11rem) clamp(1.5rem, 6vw, 7rem)',
        background: '#0a0a0a',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Radial gradient backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,169,110,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Horizontal lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(200,169,110,0.15), transparent)',
        }}
      />

      {/* Content */}
      <div ref={contentRef} style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#c8a96e',
            marginBottom: '1.5rem',
          }}
        >
          04 / Reserve Yours
        </p>

        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2.25rem, 6vw, 5.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: '#f5f5f5',
            marginBottom: '1rem',
          }}
        >
          Ready to hear<br />
          <span
            style={{
              background: 'linear-gradient(135deg, #f5f5f5 0%, #c8a96e 60%, #6b5337 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            everything?
          </span>
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            fontWeight: 300,
            color: 'rgba(245,245,245,0.45)',
            maxWidth: '420px',
            margin: '0 auto 3rem',
            lineHeight: 1.75,
          }}
        >
          Limited first production run of 2,500 units. Ships Q3 2026.
          Free expedited shipping worldwide.
        </p>

        {/* Price reveal */}
        <div
          ref={priceRef}
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '0.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '1rem',
              color: 'rgba(245,245,245,0.4)',
              alignSelf: 'flex-start',
              marginTop: '0.4rem',
            }}
          >
            USD
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: '#f5f5f5',
            }}
          >
            {revealed ? '2,490' : '—'}
          </span>
        </div>

        {/* Order CTA */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            id="order-cta-primary"
            className="btn-primary"
            onClick={() => alert('Pre-order flow coming soon!')}
            style={{ fontSize: '0.875rem', padding: '1rem 2.75rem' }}
          >
            Reserve Now — $2,490
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            id="order-cta-secondary"
            className="btn-ghost"
            onClick={() => alert('Learn more flow coming soon!')}
          >
            Request Specs Sheet
          </button>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {['Free Shipping', '2-Year Warranty', '30-Day Returns'].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5.5" stroke="#c8a96e" strokeWidth="1"/>
                <path d="M3.5 6l2 2 3-3" stroke="#c8a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,245,245,0.4)',
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
