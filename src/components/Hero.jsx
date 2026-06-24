import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef     = useRef(null);
  const headlineRef = useRef(null);
  const subRef      = useRef(null);
  const ctaRef      = useRef(null);
  const scrollCueRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      .from(subRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
      }, '-=0.7')
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.5')
      .from(scrollCueRef.current, {
        opacity: 0,
        duration: 0.8,
      }, '-=0.3');

      /* Floating scroll cue loop */
      gsap.to(scrollCueRef.current, {
        y: 10,
        duration: 1.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="SonicX Hero — Immersive Audio Engineering"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a',
        textAlign: 'center',
        padding: '0 clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 65% 55% at 50% 55%, rgba(200,169,110,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '1px solid rgba(200,169,110,0.3)',
          padding: '0.35rem 0.875rem',
          marginBottom: '2.5rem',
          background: 'rgba(200,169,110,0.06)',
        }}
      >
        <span
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#c8a96e',
            animation: 'badge-pulse 2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#c8a96e',
          }}
        >
          2026 Flagship Collection
        </span>
      </div>

      {/* Main headline */}
      <h1
        ref={headlineRef}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(3rem, 8vw, 7.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          color: '#f5f5f5',
          marginBottom: '1.5rem',
          maxWidth: '900px',
        }}
      >
        Engineer<br />
        <span
          style={{
            background: 'linear-gradient(135deg, #f5f5f5 0%, #c8a96e 60%, #6b5337 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          the Silence.
        </span>
      </h1>

      {/* Subheading */}
      <p
        ref={subRef}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.9rem, 1.8vw, 1.125rem)',
          fontWeight: 300,
          color: 'rgba(245,245,245,0.55)',
          maxWidth: '520px',
          lineHeight: 1.75,
          marginBottom: '3rem',
        }}
      >
        Forty millimeters of planar precision. Five hertz to fifty-five kilohertz.
        A listening experience that redefines what headphones can become.
      </p>

      {/* CTAs */}
      <div
        ref={ctaRef}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a
          id="hero-cta-primary"
          href="#order"
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Pre-Order Now
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          id="hero-cta-secondary"
          href="#engineering"
          className="btn-ghost"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#engineering')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Engineering
        </a>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245,245,245,0.3)',
          }}
        >
          Scroll
        </span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="rgba(245,245,245,0.25)" strokeWidth="1"/>
          <rect x="6" y="4" width="2" height="4" rx="1" fill="rgba(200,169,110,0.6)"/>
        </svg>
      </div>

      <style>{`
        @keyframes badge-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
