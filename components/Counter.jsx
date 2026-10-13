"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter with smooth quintic ease-out interpolation.
 * Activates once when element scrolls into view.
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className = "",
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    const numericTarget = typeof value === "number" ? value : parseInt(value, 10);
    if (isNaN(numericTarget)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const frame = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth quintic ease-out: 1 - (1 - t)^5
            const ease = 1 - Math.pow(1 - progress, 5);
            const currentVal = Math.round(ease * numericTarget);
            setDisplayValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(frame);
            } else {
              setDisplayValue(numericTarget);
            }
          };

          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={`counter-number ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
