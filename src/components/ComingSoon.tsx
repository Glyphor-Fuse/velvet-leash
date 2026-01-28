import { motion } from 'framer-motion';

export function ComingSoon() {
  return (
    <div className="relative group flex items-center justify-center p-20">
      {/* Kinetic Rotation Graphic */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] border-2 border-dashed border-primary/40 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[220px] h-[220px] border border-accent/30 rounded-full"
      />
      
      <div className="relative z-10 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black italic tracking-tighter text-secondary"
        >
          COMING <br /> SOON
        </motion.h3>
        <div className="h-1 w-12 bg-primary mx-auto mt-4" />
      </div>
    </div>
  );
}