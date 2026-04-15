"use client";
import React, { useState, useEffect } from "react";
import { TrendingUp, Menu, X } from "lucide-react";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-[#27272a]/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center group-hover:scale-110 transition-transform"><TrendingUp className="w-4 h-4 text-[#09090b]" strokeWidth={2.5} /></div>
          <span className="text-lg font-semibold tracking-tight">Vertex<span className="text-[#22c55e]">Trade</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Pricing</a>
          <a href="#stats" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Performance</a>
          <a href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Security</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-[#a1a1aa] hover:text-white px-4 py-2">Sign in</button>
          <button className="text-sm font-medium bg-[#22c55e] hover:bg-[#16a34a] text-[#09090b] px-5 py-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">Get started free</button>
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
      </div>
    </nav>
  );
}
