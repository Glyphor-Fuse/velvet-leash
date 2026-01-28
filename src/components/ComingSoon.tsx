import { motion } from "framer-motion";

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30">
            <span className="text-4xl">✨</span>
          </div>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Coming Soon
        </h1>
        
        <p className="text-lg md:text-xl text-purple-200/80 mb-8 max-w-md mx-auto">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-purple-300/60"
        >
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm">Building in progress</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
