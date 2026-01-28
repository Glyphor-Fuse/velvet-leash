import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-blueprint p-12 text-center"
      >
        <h1 className="text-9xl font-display text-accent mb-4">404</h1>
        <p className="text-secondary uppercase tracking-[0.2em] mb-8">Navigation Error: Outside Urban Limits</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-bold uppercase transition-transform hover:scale-105"
        >
          <MoveLeft size={20} />
          Back to Base
        </Link>
      </motion.div>
    </div>
  );
}
