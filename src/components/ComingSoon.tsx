import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Activity, Target } from 'lucide-react';

const features = [
  {
    title: "Ripstop Exo-Frame",
    description: "Ballistic-grade nylon weave with integrated carbon fiber tension points.",
    icon: Shield,
    color: "primary"
  },
  {
    title: "Quick-Lock Cobalt",
    description: "Magnetic-mechanical attachment systems tested at 500kg of shear force.",
    icon: Zap,
    color: "accent"
  },
  {
    title: "Neural Fit Tech",
    description: "Asymmetric design that maps to canine muscular extension during full sprint.",
    icon: Activity,
    color: "primary"
  },
  {
    title: "Low-Light Optic",
    description: "Retro-reflective micro-bead coating for 360-degree metropolitan visibility.",
    icon: Target,
    color: "accent"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden" id="specs">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4">ENGINEERED<br/>SPECIFICATIONS</h2>
          <div className="h-2 w-32 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-10 group hover:bg-secondary transition-colors duration-500"
            >
              <feature.icon className={`mb-8 text-${feature.color} group-hover:scale-110 transition-transform`} size={40} />
              <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video bg-muted border border-white/10 overflow-hidden">
             <img 
              src="///IMG:close up of high-tech tactical gear stitching with neon green accents|landscape|editorial///" 
              alt="Technical Detail"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
          <div>
            <h3 className="text-3xl font-black mb-6">UNCOMPROMISING <br/> DURABILITY</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Every seam is reinforced with high-tensile aramid thread, originally developed for deep-sea exploration. We don't just build harnesses; we build urban exoskeletons.
            </p>
            <div className="space-y-4">
              {[85, 92, 98].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-muted-foreground/20 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className="absolute inset-0 bg-primary"
                    />
                  </div>
                  <span className="font-black text-sm w-12">{stat}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}