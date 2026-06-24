import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollProgress
 * Returns a normalized progress value (0–1) for a given trigger element.
 * Used by HotspotMarker components to gate their visibility.
 */
export function useScrollProgress(triggerRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!triggerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => trigger.kill();
  }, [triggerRef]);

  return progress;
}
