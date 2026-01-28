import React from 'react';
import { motion } from 'framer-motion';

export function LiquidEther() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background overflow-hidden opacity-50">
      {/* Animated gradient mesh simulation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(65,95,52,0.05)_0%,transparent_70%)]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(20,95,55,0.03)_0%,transparent_70%)]"
      />
      {/* Brutalist Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}