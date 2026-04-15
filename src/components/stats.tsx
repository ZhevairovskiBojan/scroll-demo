"use client";
import React, { useEffect, useRef, useState } from "react";
const stats = [
  { value: 2.4, suffix: "M+", label: "Active traders", prefix: "" },
  { value: 18, suffix: "B+", label: "Monthly volume", prefix: "$" },
  { value: 0, suffix: "%", label: "Commission on stocks", prefix: "", raw: "0%" },
  { value: 99.98, suffix: "%", label: "Uptime guaranteed", prefix: "" },
];
function AnimNum({ value, suffix, prefix, raw }: { value: number; suffix: string; prefix: string; raw?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.5 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!vis || raw) return;
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min((now - start) / 2000, 1);
      setCount((1 - Math.pow(1 - p, 3)) * value);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [vis, value, raw]);
  const display = raw ? raw : `${prefix}${count.toFixed(value < 10 ? 1 : value > 99 ? 2 : 0)}${suffix}`;
  return <div ref={ref} className="text-center"><div className="stat-number text-5xl md:text-6xl font-bold font-mono tracking-tight">{display}</div></div>;
}
export function Stats() {
  return (
    <section id="stats" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <AnimNum {...s} />
              <div className="text-[#a1a1aa] text-sm mt-3 tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
    </section>
  );
}
