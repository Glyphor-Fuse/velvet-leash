import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ComingSoon } from '../components/ComingSoon';
import { Footer } from '../components/Footer';
import { ParallaxStars } from '../components/ParallaxStars';
import { LiquidEther } from '@/components/ui/LiquidEther';

export default function Index() {
  return (
    <main className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 opacity-40">
        <LiquidEther />
      </div>
      
      {/* Parallax Stars Effect (Requested in critique for App.tsx, implemented here for scope) */}
      <ParallaxStars />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <ComingSoon />
        <Footer />
      </div>
      
      {/* Brutalist Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none brutalist-grid opacity-20 z-0" />
    </main>
  );
}