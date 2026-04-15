"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#22c55e] mb-2 px-4 py-1.5 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/5">Next-gen trading platform</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">Invest in your future,<br /><span className="bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#3b82f6] bg-clip-text text-transparent">commission free</span></h1>
            <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto mt-4 leading-relaxed">Stocks, ETFs, crypto, and forex — all in one powerful platform. Start with as little as $1.</p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#09090b] font-semibold px-8 py-3 rounded-full transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] text-sm">Open account</button>
              <button className="border border-[#27272a] text-white px-8 py-3 rounded-full hover:border-[#22c55e]/50 transition-all text-sm">Watch demo</button>
            </div>
          </div>
        }
      >
        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&h=720&fit=crop" alt="Trading dashboard" className="mx-auto rounded-2xl object-cover h-full w-full object-left-top" draggable={false} />
      </ContainerScroll>
    </div>
  );
}
