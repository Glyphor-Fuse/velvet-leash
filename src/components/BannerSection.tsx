import React from 'react';
import { motion } from 'framer-motion';
import { Orb } from '@/components/ui/orb';
import { ArrowRight } from 'lucide-react';

export function BannerSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Orb - Resolves Import Error */}
      <div className="absolute top-1/4 right-[-5%] z-0">
        <Orb color="hsl(var(--primary))" size={400} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Block with shadow and blur as per critique */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="col-span-12 lg:col-span-8 bg-background/40 backdrop-blur-xl border border-secondary/10 p-12 md:p-20 shadow-2xl relative"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-accent mb-12"
            />
            
            <h1 className="text-6xl md:text-8xl leading-none font-black mb-8 mix-blend-difference">
              METROPOLITAN <br /> 
              <span className="text-primary italic">PERFORMANCE</span>
            </h1>
            
            <p className="max-w-xl text-lg text-muted font-mono mb-12 uppercase tracking-tight">
              High-intensity urban infrastructure for the next generation of digital architects. Brutalist geometry meets kinetic efficiency.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 bg-secondary text-background px-10 py-6 font-mono font-bold uppercase"
            >
              Initialize Project <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Overlapping Typography Detail */}
          <div className="hidden lg:block col-span-4 relative">
             <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 0.1, y: 0 }}
              className="absolute bottom-0 right-0 origin-bottom-right rotate-90 whitespace-nowrap"
             >
                <span className="text-[12rem] font-black leading-none tracking-tighter">
                  URBANISM
                </span>
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* Image Integration */}
      <div className="absolute bottom-0 left-[60%] w-full h-full -z-10 opacity-20 filter grayscale">
        ///IMG:metropolitan brutalist architecture skyscraper|portrait|editorial///
      </div>
    </section>
  );
}