"use client";

import { useEffect, useRef } from "react";

/**
 * High-performance, GPU-accelerated scroll progress indicator.
 * Uses native CSS animation-timeline: scroll() when supported,
 * with a silky requestAnimationFrame fallback for universal compatibility.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Check for native CSS scroll timeline support
    if (
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("animation-timeline", "scroll()")
    ) {
      return;
    }

    const bar = barRef.current;
    if (!bar) return;

    let rafId = null;

    const update = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const ratio = scrollHeight > 0 ? Math.min(1, Math.max(0, current / scrollHeight)) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={barRef}
      id="scroll-progress-indicator"
      className="scroll-progress-bar"
      aria-hidden="true"
    >
      <span className="scroll-progress-glow" />
    </div>
  );
}
