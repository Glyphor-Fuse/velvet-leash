import { motion } from "framer-motion";
import { Orb } from "@/components/ui/orb";

export function ComingSoon() {
  return (
    <section className="py-32 px-8 overflow-hidden relative border-b-2 border-muted">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <Orb className="w-full h-full" />
      </div>

      <div className="max-w-[1800px] mx-auto text-center relative z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-12"
        >
          <div className="w-48 h-48 rounded-full border-4 border-dashed border-accent flex items-center justify-center p-4">
             <div className="w-full h-full rounded-full border-2 border-accent flex items-center justify-center">
                <span className="font-display text-accent text-sm tracking-tighter">PHASE_01</span>
             </div>
          </div>
        </motion.div>

        <h2 className="text-6xl md:text-[8rem] font-bold leading-none mb-12">
          REVEAL <br /> <span className="text-accent italic">PENDING</span>
        </h2>
        
        <p className="text-xl text-secondary max-w-2xl mx-auto uppercase tracking-[0.3em] mb-12">
          The next evolution of metropolitan architecture is under construction. Join the registry for early terminal access.
        </p>

        <form className="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="USER@NETWORK.ID" 
            className="flex-1 bg-transparent border-2 border-muted px-6 py-4 outline-none focus:border-accent uppercase tracking-widest transition-colors"
          />
          <button className="px-8 py-4 bg-foreground text-background font-bold uppercase hover:bg-accent transition-colors">
            Link
          </button>
        </form>
      </div>
    </section>
  );
}
