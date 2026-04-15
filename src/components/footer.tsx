"use client";
import React from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
export function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="orb orb-green w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to start<br /><span className="bg-gradient-to-r from-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">building wealth?</span></h2>
        <p className="text-[#a1a1aa] text-lg mt-6 max-w-xl mx-auto leading-relaxed">Join over 2 million traders who trust VertexTrade. Get started in under 5 minutes.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="group flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-[#09090b] font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">Create free account<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
          <button className="flex items-center gap-2 border border-[#27272a] text-white px-8 py-3.5 rounded-full hover:border-[#22c55e]/50 transition-all">View demo</button>
        </div>
        <p className="text-xs text-[#a1a1aa]/60 mt-6">No credit card required</p>
      </div>
    </section>
  );
}
export function Footer() {
  const cols = [
    { title: "Product", links: ["Stocks", "ETFs", "Crypto", "Forex", "Options"] },
    { title: "Resources", links: ["Learn", "Blog", "API docs", "Status", "Changelog"] },
    { title: "Company", links: ["About", "Careers", "Press", "Contact", "Legal"] },
  ];
  return (
    <footer className="border-t border-[#27272a]/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4"><div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center"><TrendingUp className="w-4 h-4 text-[#09090b]" strokeWidth={2.5} /></div><span className="text-lg font-semibold tracking-tight">Vertex<span className="text-[#22c55e]">Trade</span></span></a>
            <p className="text-sm text-[#a1a1aa] max-w-xs leading-relaxed">The modern trading platform built for a new generation of investors.</p>
          </div>
          {cols.map((col, i) => (
            <div key={i}><h4 className="text-sm font-semibold mb-4">{col.title}</h4><ul className="space-y-2.5">{col.links.map((link, j) => (<li key={j}><a href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">{link}</a></li>))}</ul></div>
          ))}
        </div>
        <div className="border-t border-[#27272a]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a1a1aa]/60">© 2026 VertexTrade. All rights reserved. Demo website.</p>
          <div className="flex items-center gap-6"><a href="#" className="text-xs text-[#a1a1aa]/60 hover:text-[#a1a1aa]">Privacy</a><a href="#" className="text-xs text-[#a1a1aa]/60 hover:text-[#a1a1aa]">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
