import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="brutalist-card max-w-md text-center"
      >
        <h1 className="text-8xl font-black mb-4 italic">404</h1>
        <p className="text-accent font-mono mb-8 tracking-widest uppercase">System Breach // Route Not Found</p>
        <Link to="/">
          <button className="flex items-center gap-2 bg-accent text-primary px-6 py-3 font-bold hover:gap-4 transition-all">
            <ArrowLeft size={20} />
            BACK TO GRID
          </button>
        </Link>
      </motion.div>
    </div>
  );
}