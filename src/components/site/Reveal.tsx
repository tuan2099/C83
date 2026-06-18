import { useEffect, useRef, useState } from "react";

/* Shared scroll-reveal + section primitives, matching the home page design
   vocabulary so every page animates and labels content consistently. */

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${visible ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionLabel({
  children,
  center,
  light,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-8 ${light ? "bg-accent" : "bg-primary"}`} />
      <span
        className={`text-xs font-black tracking-[0.25em] uppercase ${
          light ? "text-accent" : "text-primary"
        }`}
      >
        {children}
      </span>
      <span className={`h-px w-8 ${light ? "bg-accent" : "bg-primary"}`} />
    </div>
  );
}

export function Counter({
  end,
  suffix = "",
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);
  return (
    <span ref={ref}>
      {n.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}
