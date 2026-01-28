import React from 'react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const features = [
    { title: "Grid Systems", desc: "Rigid asymmetric layouts optimized for rapid data ingestion." },
    { title: "Kinetic Flow", desc: "Fluid motion transitions that eliminate perceptual latency." },
    { title: "Brutalist Core", desc: "Raw visual honesty through structural transparency." },
    { title: "High-Peak Load", desc: "Sustained performance under extreme metropolitan density." }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-secondary/10">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-background p-10 border border-secondary/5 hover:border-primary transition-colors group"
        >
          <span className="font-mono text-accent text-sm mb-4 block">0{i + 1} // SYSTEM</span>
          <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
          <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
          <div className="mt-8 h-px w-0 group-hover:w-full bg-primary transition-all duration-500" />
        </motion.div>
      ))}
    </section>
  );
}