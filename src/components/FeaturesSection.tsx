import { motion } from "framer-motion";
import { Shield, Zap, LayoutGrid, Cpu } from "lucide-react";

const FEATURES = [
  {
    icon: <Shield size={40} />,
    title: "Structural Integrity",
    desc: "Built on principles of architectural permanence and urban resilience."
  },
  {
    icon: <Zap size={40} />,
    title: "Kinetic Energy",
    desc: "Optimized for high-velocity metropolitan movement and digital flow."
  },
  {
    icon: <LayoutGrid size={40} />,
    title: "Grid Logic",
    desc: "Modular frameworks that adapt to the shifting canyons of the city."
  },
  {
    icon: <Cpu size={40} />,
    title: "Core Protocol",
    desc: "The fundamental operating system of the modern urban aesthete."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-8 max-w-[1800px] mx-auto border-b-2 border-muted">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            URBAN <br />INFRASTRUCTURE
          </h2>
          <p className="text-secondary text-xl uppercase tracking-widest leading-relaxed">
            Our systems are designed for the verticality of the modern megalopolis. No compromise on performance or visual weight.
          </p>
        </div>
        <div className="text-right border-l-2 border-accent pl-8">
          <span className="font-display text-accent text-6xl">01</span>
          <p className="text-xs uppercase tracking-tighter">System Core</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-muted">
        {FEATURES.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-12 border-muted border-r-2 last:border-r-0 border-b-2 lg:border-b-0 group hover:bg-accent transition-colors duration-500"
          >
            <div className="mb-8 text-accent group-hover:text-background transition-colors">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-background transition-colors">{f.title}</h3>
            <p className="text-secondary group-hover:text-background/80 transition-colors uppercase text-sm tracking-widest leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
