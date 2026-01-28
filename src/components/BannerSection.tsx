import { motion } from "framer-motion";

export function BannerSection() {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-12 border-y-2 border-muted overflow-hidden bg-accent">
      <motion.div 
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="text-6xl md:text-8xl font-display text-background font-bold tracking-tighter uppercase">
              Metropolitan Wag
            </span>
            <div className="w-12 h-12 border-4 border-background rounded-full" />
            <span className="text-6xl md:text-8xl font-display text-background font-light italic tracking-tighter uppercase">
              High Energy
            </span>
            <div className="w-12 h-12 bg-background rotate-45" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
