import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Orb } from "@/components/ui/orb";

export function BannerSection() {
  return (
    <section className="relative h-screen flex flex-col justify-end p-6 md:p-12 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 pointer-events-none">
        <Orb className="opacity-40" />
      </div>
      
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[12vw] leading-[0.8] font-black italic mb-6 motion-blur-in"
          >
            URBAN<br />
            <span className="text-stroke">KINETICISM</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-secondary font-mono text-sm leading-relaxed mb-8 border-l-3 border-accent pl-4"
          >
            A fusion of high-performance sportswear aesthetics and metropolitan architectural grit. 
            Engineered for the velocity of the modern megalopolis.
          </motion.p>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="brutalist-card bg-accent text-primary relative group cursor-pointer"
          >
            <div className="absolute top-2 right-2">
              <ArrowDownRight size={24} />
            </div>
            <span className="block text-xs font-mono font-bold mb-1">MODULE_01</span>
            <span className="text-2xl font-black">EXPLORE DROP</span>
          </motion.div>
          
          <div className="flex gap-4">
            <div className="flex-1 h-32 border-3 border-muted/50 p-4 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-muted uppercase">Latency</span>
              <span className="text-2xl font-black">0.02ms</span>
            </div>
            <div className="flex-1 h-32 border-3 border-muted/50 p-4 flex flex-col justify-between bg-primary/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-muted uppercase">Strain</span>
              <span className="text-2xl font-black">450KG</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 p-12 hidden lg:block">
        <div className="w-px h-64 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}