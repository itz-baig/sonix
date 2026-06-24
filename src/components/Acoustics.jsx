import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SPECS = [
  { value: 55000, suffix: 'Hz', label: 'Upper Frequency Limit', decimals: 0 },
  { value: 130,   suffix: 'dB', label: 'Max SPL Output',        decimals: 0 },
  { value: 40,    suffix: 'mm', label: 'Planar Driver Diameter', decimals: 0 },
  { value: 0.002, suffix: '%',  label: 'THD at 94dB SPL',       decimals: 3 },
];

function AnimatedCounter({ target, suffix, decimals, isActive }) {
  const [count, setCount] = useState(0);
  const animRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;
    const obj = { val: 0 };
    animRef.current = gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => setCount(parseFloat(obj.val.toFixed(decimals))),
    });
    return () => animRef.current?.kill();
  }, [isActive, target, decimals]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Acoustics() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      onEnter: () => setIsActive(true),
      once: true,
    });
    return () => trigger.kill();
  }, []);

  return (
    <section
      id="acoustics"
      ref={sectionRef}
      aria-label="SonicX acoustic performance specifications"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 7rem)',
        background: '#0d0d0d',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 'clamp(1.5rem, 6vw, 7rem)',
          width: '60px',
          height: '1px',
          background: '#c8a96e',
        }}
      />

      {/* Section label */}
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
        02 / Acoustics
      </p>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}
      >
        {/* Left: Headline */}
        <div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#f5f5f5',
              marginBottom: '1.5rem',
            }}
          >
            Sound without<br />
            <span style={{ color: '#c8a96e' }}>compromise.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              color: 'rgba(245,245,245,0.5)',
              lineHeight: 1.8,
              maxWidth: '400px',
            }}
          >
            Every parameter has been obsessively refined. The planar magnetic
            driver eliminates the harmonic distortion inherent in conventional
            dynamic drivers — delivering reference-grade transparency at every
            listening level.
          </p>
        </div>

        {/* Right: Spec counters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5px',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          {SPECS.map(({ value, suffix, label, decimals }, i) => (
            <div
              key={i}
              id={`spec-${label.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                background: '#0d0d0d',
                padding: '2rem 1.5rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#f5f5f5',
                  marginBottom: '0.5rem',
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter
                  target={value}
                  suffix={suffix}
                  decimals={decimals}
                  isActive={isActive}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,245,245,0.4)',
                  lineHeight: 1.4,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
