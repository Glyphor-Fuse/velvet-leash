import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-secondary/40 backdrop-blur-md p-10 md:p-16 border border-white/5 shadow-2xl"
          >
            <motion.span 
              className="inline-block bg-primary text-background px-4 py-1 font-black text-sm uppercase tracking-widest mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              System Active: V.02
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.85] mb-8">
              KINETIC <br />
              <span className="text-primary italic">URBANISM</span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Engineering high-performance canine tactical wear for the metropolitan perimeter. 
              Precision silhouettes meeting high-speed utility.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-foreground text-background px-10 py-5 font-black uppercase text-sm tracking-widest flex items-center gap-3"
              >
                Explore Gear <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-foreground/20 px-10 py-5 font-black uppercase text-sm tracking-widest flex items-center gap-3 hover:bg-foreground/5"
              >
                Manifesto <MoveUpRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Imagery */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-primary/20 -z-10 translate-x-4 translate-y-4" />
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img 
                src="///IMG:sharp silhouette of a powerful dog in futuristic tactical gear running through a dark neon city street with motion blur|portrait|cyberpunk///" 
                alt="Tactical Canine"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            {/* Speed Lines Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[1px] bg-primary/40"
                  style={{ 
                    top: `${20 * i}%`, 
                    left: '-10%', 
                    width: '120%',
                    rotate: '-15deg'
                  }}
                  animate={{ x: [0, 50, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-4 border-t border-white/5 pointer-events-none opacity-10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[12rem] font-black uppercase leading-none"
        >
          SPEED PRECISION UTILITY METROPOLIS KINETIC DURABILITY FORCE VELOCITY
        </motion.div>
      </div>
    </section>
  );
}