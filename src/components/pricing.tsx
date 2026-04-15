"use client";
import React from "react";
import { Check } from "lucide-react";
const plans = [
  { name: "Starter", price: "Free", sub: "forever", desc: "Perfect for getting started", features: ["Commission-free stock trading", "Basic charting tools", "Up to $10k portfolio", "Mobile app access", "Community forum"], cta: "Start free", featured: false },
  { name: "Pro", price: "$9.99", sub: "/ month", desc: "For active traders who want an edge", features: ["Everything in Starter", "Advanced charting & indicators", "Unlimited portfolio size", "Real-time Level 2 data", "Priority execution", "API access"], cta: "Start 14-day trial", featured: true },
  { name: "Institutional", price: "Custom", sub: "", desc: "White-glove service for serious capital", features: ["Everything in Pro", "Dedicated account manager", "Custom API limits", "Co-location options", "Compliance reporting", "SLA guarantee"], cta: "Contact sales", featured: false },
];
export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#22c55e] mb-4 px-4 py-1.5 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/5">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Transparent pricing,<br /><span className="text-[#a1a1aa]">no hidden fees</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 ${plan.featured ? "bg-gradient-to-b from-[#22c55e]/10 to-transparent border-2 border-[#22c55e]/30 relative" : "glass-card"}`}>
              {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-[#22c55e] text-[#09090b] px-4 py-1 rounded-full">Most popular</div>}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-[#a1a1aa] mt-1">{plan.desc}</p>
              <div className="mt-6 mb-8"><span className="text-4xl font-bold">{plan.price}</span>{plan.sub && <span className="text-[#a1a1aa] text-sm ml-1">{plan.sub}</span>}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" /><span className="text-[#a1a1aa]">{f}</span></li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-full text-sm font-medium transition-all ${plan.featured ? "bg-[#22c55e] text-[#09090b] hover:bg-[#16a34a] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]" : "border border-[#27272a] text-white hover:border-[#22c55e]/50 hover:text-[#22c55e]"}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
