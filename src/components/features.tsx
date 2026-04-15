"use client";
import React from "react";
import { Zap, Shield, BarChart3, Globe, Smartphone, Clock } from "lucide-react";
const features = [
  { icon: Zap, title: "Lightning execution", desc: "Sub-millisecond order execution with direct market access across 35+ exchanges worldwide." },
  { icon: Shield, title: "Bank-grade security", desc: "256-bit encryption, 2FA, and cold storage for digital assets. Your capital is protected 24/7." },
  { icon: BarChart3, title: "Advanced analytics", desc: "Real-time charts, 80+ technical indicators, and AI-powered pattern recognition." },
  { icon: Globe, title: "Global markets", desc: "Trade stocks, ETFs, forex, and crypto from a single unified platform." },
  { icon: Smartphone, title: "Trade anywhere", desc: "Full-featured mobile app with biometric login, push alerts, and one-tap trading." },
  { icon: Clock, title: "24/7 markets", desc: "Access extended hours trading and round-the-clock crypto markets." },
];
export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="orb orb-green w-[500px] h-[500px] -top-40 -left-60" />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#22c55e] mb-4 px-4 py-1.5 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/5">Why VertexTrade</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Everything you need to<br /><span className="bg-gradient-to-r from-[#22c55e] to-[#3b82f6] bg-clip-text text-transparent">trade with confidence</span></h2>
          <p className="text-[#a1a1aa] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">Professional-grade tools wrapped in an intuitive interface. Built for beginners. Loved by experts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 group hover:border-[#22c55e]/30 transition-all duration-500 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-5 group-hover:bg-[#22c55e]/20 transition-colors"><f.icon className="w-5 h-5 text-[#22c55e]" /></div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
