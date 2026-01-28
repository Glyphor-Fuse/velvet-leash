import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Zap } from 'lucide-react';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-background/80"
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <Zap className="text-background fill-background" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Velvet Leash</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          {['Specs', 'Performance', 'Archive', 'Pre-Order'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-background px-6 py-2 font-black uppercase text-xs tracking-widest"
        >
          Join Ranks
        </motion.button>
      </div>
    </motion.header>
  );
}