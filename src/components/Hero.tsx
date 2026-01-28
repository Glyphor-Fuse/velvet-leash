import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-8 max-w-[1800px] mx-auto min-h-[90vh] flex flex-col justify-end">
      <div className="editorial-grid h-full">
        {/* Main Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 p-12 md:p-16 bg-primary/30 backdrop-blur-2xl border-blueprint shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20"
        >
          <div className="flex flex-col gap-8">
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[2px] w-24 bg-accent origin-left"
            />
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-bold text-foreground">
              URBAN <br /> <span className="text-accent">SYMMETRY</span>
            </h1>
            <p className="max-w-xl text-secondary text-lg md:text-xl leading-relaxed uppercase tracking-wide">
              Architectural precision meets the raw energy of the metropolitan streets. A new standard for the contemporary wag lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-background font-bold uppercase tracking-tighter text-xl flex items-center gap-3"
              >
                Explore Volume 01 <ArrowDownRight />
              </motion.button>
              <button className="px-8 py-4 border-2 border-muted text-foreground font-bold uppercase tracking-tighter text-xl hover:bg-muted/20 transition-colors">
                The Blueprint
              </button>
            </div>
          </div>
        </motion.div>

        {/* Decorative Image Overlap */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:block col-start-8 col-end-13 row-start-1 absolute top-0 right-0 h-full w-[45%] pointer-events-none"
        >
          <div className="relative h-full w-full overflow-hidden border-blueprint">
            <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              alt="Metropolitan Architecture" 
              className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-[3s]"
            />
          </div>
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute right-8 bottom-24 hidden lg:block vertical-text">
        <span className="text-xs uppercase tracking-[1em] text-muted-foreground rotate-90 inline-block origin-right">
          LAT 40.7128° N / LONG 74.0060° W
        </span>
      </div>
    </section>
  );
}
