import React from 'react';
import { motion } from 'framer-motion';

interface OrbProps {
  color?: string;
  size?: number;
}

export function Orb({ color = "hsl(var(--primary))", size = 300 }: OrbProps) {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        filter: 'blur(100px)',
      }}
      className="rounded-full"
    />
  );
}