/**
 * HotspotMarker
 * Blueprint-style engineering callout that appears/disappears
 * based on scroll progress thresholds.
 *
 * Props:
 *  id             - string, unique identifier
 *  label          - string, component name (e.g. "40mm Planar Driver")
 *  description    - string, technical copy
 *  position       - { x, y } percentage-based position on the canvas
 *  visibleFrom    - number (0–1) scroll progress to appear
 *  visibleTo      - number (0–1) scroll progress to disappear
 *  scrollProgress - number (0–1) current scroll progress passed from parent
 */
export default function HotspotMarker({
  id,
  label,
  description,
  position,
  visibleFrom,
  visibleTo,
  scrollProgress,
  align,
}) {
  const isVisible = scrollProgress >= visibleFrom && scrollProgress <= visibleTo;

  /* Fade/slide entrance relative to entry threshold */
  const localProgress = isVisible
    ? Math.min((scrollProgress - visibleFrom) / 0.08, 1)
    : 0;

  const opacity   = localProgress;
  const translateY = (1 - localProgress) * 10;

  /* Explicit alignment override, default to left half rule */
  const alignRight = align ? align === 'right' : position.x < 50;

  return (
    <div
      role="note"
      aria-label={`${label}: ${description}`}
      id={`hotspot-${id}`}
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) translateY(${translateY}px)`,
        opacity,
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        zIndex: 20,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {/* Dot with pulse ring */}
      <div
        aria-hidden="true"
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#c8a96e',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* GPU-accelerated pulse ring */}
        <div
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            border: '1px solid #c8a96e',
            animation: isVisible ? 'hotspot-ring-pulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite' : 'none',
            pointerEvents: 'none',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Connector line + callout box */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          ...(alignRight
            ? { left: '10px' }
            : { right: '10px' }),
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          flexDirection: alignRight ? 'row' : 'row-reverse',
        }}
      >
        {/* Connector line */}
        <div
          className="hotspot-line"
          style={{
            width: '48px',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(200,169,110,0.8), rgba(200,169,110,0.2))',
            flexShrink: 0,
          }}
        />

        {/* Callout card */}
        <div
          className="hotspot-card"
          style={{
            background: 'rgba(10,10,10,0.82)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(200,169,110,0.2)',
            padding: '0.6rem 0.875rem',
            minWidth: '180px',
            maxWidth: '220px',
          }}
        >
          <p
            className="hotspot-label"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c8a96e',
              marginBottom: '0.3rem',
            }}
          >
            {label}
          </p>
          <p
            className="hotspot-desc"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 300,
              color: 'rgba(245,245,245,0.65)',
              lineHeight: 1.55,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Pulse keyframe — injected as a style tag once */}
      <style>{`
        @keyframes hotspot-ring-pulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @media (max-width: 768px) {
          .hotspot-card {
            min-width: 120px !important;
            max-width: 150px !important;
            padding: 0.4rem 0.6rem !important;
          }
          .hotspot-line {
            width: 16px !important;
          }
          .hotspot-label {
            font-size: 0.5rem !important;
            letter-spacing: 0.1em !important;
            margin-bottom: 0.15rem !important;
          }
          .hotspot-desc {
            font-size: 0.6rem !important;
            line-height: 1.35 !important;
          }
        }
      `}</style>
    </div>
  );
}
