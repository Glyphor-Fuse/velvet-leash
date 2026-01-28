import React from 'react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference border-b border-white/5 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-none" />
          <span className="font-mono font-bold text-white tracking-tighter text-xl">METRO_OS</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          {['Archive', 'Systems', 'Protocol', 'Terminal'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-primary font-mono text-sm uppercase tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <span className="font-mono text-white/50 text-xs hidden sm:block uppercase">Ver 4.0.2</span>
           <div className="w-4 h-4 bg-accent animate-pulse" />
        </div>
      </div>
    </motion.header>
  );
}