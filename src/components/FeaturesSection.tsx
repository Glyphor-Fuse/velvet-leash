import { motion } from "framer-motion";
import { Zap, Shield, Wind, Cpu } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Instant Response",
    desc: "Adaptive fibers that react to kinetic energy shifts within milliseconds."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Urban Armor",
    desc: "Metropolitan-grade durability with lightweight carbon-weave architecture."
  },
  {
    icon: <Wind className="w-10 h-10" />,
    title: "Aero-Flow",
    desc: "Precision ventilation mapping designed for high-velocity urban movement."
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Neural Mesh",
    desc: "Integrated biometric sensors tracking your performance in real-time."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-primary/20">
      <div className="mb-20">
        <span className="text-accent font-mono text-sm tracking-widest mb-4 block uppercase font-bold">/// CORE_SPECIFICATIONS</span>
        <h2 className="text-5xl md:text-7xl">ENGINEERED<br />TO DEFY.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="brutalist-card flex flex-col gap-6 group"
          >
            <div className="text-accent group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <div>
              <h3 className="text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}