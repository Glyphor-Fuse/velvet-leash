import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FeaturesSection } from "../components/FeaturesSection";
import { BannerSection } from "../components/BannerSection";
import { ComingSoon } from "../components/ComingSoon";
import { Footer } from "../components/Footer";
import { LiquidEther } from "@/components/ui/LiquidEther";
import { useRef } from "react";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect for "stars" simulated by small div elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <LiquidEther />
      </div>

      {/* Parallax Depth Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20" />
        <motion.div style={{ y: y2 }} className="absolute top-3/4 left-1/2 w-2 h-2 bg-accent rounded-full opacity-10" />
        <motion.div style={{ y: y1 }} className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full opacity-20" />
      </div>

      <Header />
      
      <main className="relative z-10 space-y-0">
        <Hero />
        <BannerSection />
        <FeaturesSection />
        <ComingSoon />
      </main>

      <Footer />
    </div>
  );
}
