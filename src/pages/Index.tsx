import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { BannerSection } from '@/components/BannerSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ComingSoon } from '@/components/ComingSoon';
import { Footer } from '@/components/Footer';
import { LiquidEther } from '@/components/ui/LiquidEther';

export default function Index() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-secondary">
      {/* Background Layer with Motion Parallax */}
      <motion.div 
        style={{ y: yParallax }}
        className="fixed inset-0 z-[-1]"
      >
        <LiquidEther />
      </motion.div>

      <Header />
      
      <main className="relative">
        <BannerSection />
        
        <div className="container mx-auto px-6 py-24 space-y-48">
          <FeaturesSection />
          <div className="flex justify-center items-center py-20">
             <ComingSoon />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}