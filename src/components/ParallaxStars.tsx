import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxStars() {
  const { scrollY } = useScroll();
  
  // Create multiple layers of stars with different scroll speeds
  const y1 = useTransform(scrollY, [0, 5000], [0, -1000]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -1500]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -2000]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layer 1 - Smallest, Slowest */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 200}%`,
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px'
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Medium */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-primary rounded-full opacity-30"
            style={{
              top: `${Math.random() * 200}%`,
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px'
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3 - Larger, Faster */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 200}%`,
              left: `${Math.random() * 100}%`,
              width: '3px',
              height: '3px'
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}