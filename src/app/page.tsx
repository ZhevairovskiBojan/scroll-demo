import { Navbar } from "@/components/navbar";
import { Ticker } from "@/components/ticker";
import { HeroScrollDemo } from "@/components/demo";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Pricing } from "@/components/pricing";
import { CTA, Footer } from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      <Navbar />
      <section className="pt-16"><HeroScrollDemo /></section>
      <Ticker />
      <Features />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
