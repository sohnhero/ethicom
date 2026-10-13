"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ultra-smooth, Apple/Linear-grade viewport reveal component.
 * Tracks elements with IntersectionObserver as you scroll down the page.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up", // "up" | "down" | "left" | "right" | "scale" | "fade" | "blur"
  as: Tag = "div",
  threshold = 0.05,
  rootMargin = "0px 0px -20px 0px",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${isVisible ? "is-visible" : "is-hidden"} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
