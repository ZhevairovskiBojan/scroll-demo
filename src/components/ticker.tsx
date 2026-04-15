"use client";
import React from "react";
const tickers = [
  { symbol: "AAPL", price: "198.42", change: "+2.34%", up: true },
  { symbol: "TSLA", price: "312.87", change: "+5.12%", up: true },
  { symbol: "NVDA", price: "1,024.56", change: "+3.78%", up: true },
  { symbol: "AMZN", price: "201.34", change: "-0.45%", up: false },
  { symbol: "MSFT", price: "467.21", change: "+1.23%", up: true },
  { symbol: "GOOGL", price: "178.90", change: "-0.12%", up: false },
  { symbol: "META", price: "542.67", change: "+2.89%", up: true },
  { symbol: "BTC", price: "97,432", change: "+4.21%", up: true },
  { symbol: "ETH", price: "3,845", change: "+1.67%", up: true },
  { symbol: "SPY", price: "578.23", change: "+0.87%", up: true },
];
export function Ticker() {
  const doubled = [...tickers, ...tickers];
  return (
    <div className="w-full overflow-hidden border-y border-[#27272a]/50 bg-[#111113]/80 backdrop-blur-sm">
      <div className="ticker-track flex whitespace-nowrap py-3">
        {doubled.map((t, i) => (
          <div key={i} className="inline-flex items-center gap-3 px-6 border-r border-[#27272a]/30">
            <span className="text-sm font-semibold text-white/90">{t.symbol}</span>
            <span className="text-sm text-[#a1a1aa] font-mono">${t.price}</span>
            <span className={`text-xs font-mono font-medium ${t.up ? "text-[#22c55e]" : "text-[#ef4444]"}`}>{t.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
