import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TechSpecsSection } from "@/components/TechSpecsSection";
import { MotionShowcase } from "@/components/MotionShowcase";
import { Footer } from "@/components/Footer";
import { LiquidEther } from "@/components/ui/LiquidEther";

export default function Index() {
  return (
    <main className="relative min-h-screen selection:bg-accent selection:text-primary">
      <LiquidEther />
      <Header />
      <BannerSection />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 border-y-5 border-primary">
        <aside className="lg:col-span-1 hidden lg:flex flex-col border-r border-muted/20 items-center py-20 justify-between">
          <span className="rotate-90 text-[10px] font-mono tracking-[0.5em] text-muted whitespace-nowrap">ESTABLISHED.2024</span>
          <div className="h-32 w-px bg-accent/30" />
          <span className="rotate-90 text-[10px] font-mono tracking-[0.5em] text-muted whitespace-nowrap">TYPE.MODULAR_GRIT</span>
        </aside>

        <div className="lg:col-span-10">
          <FeaturesSection />
          <MotionShowcase />
          <TechSpecsSection />
        </div>

        <aside className="lg:col-span-1 hidden lg:flex flex-col border-l border-muted/20 items-center py-20 justify-between">
          <span className="-rotate-90 text-[10px] font-mono tracking-[0.5em] text-muted whitespace-nowrap">SYSTEM.CORE_001</span>
          <div className="h-32 w-px bg-accent/30" />
          <span className="-rotate-90 text-[10px] font-mono tracking-[0.5em] text-muted whitespace-nowrap">KINETIC_FLOW</span>
        </aside>
      </div>

      <Footer />
    </main>
  );
}