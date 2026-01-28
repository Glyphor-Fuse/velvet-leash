import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 border-b border-transparent hover:border-accent transition-colors duration-500">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-accent" />
          <span className="text-2xl font-black tracking-tighter text-foreground italic">KINETIC</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 font-mono text-xs tracking-[0.3em] uppercase">
          <a href="#" className="hover:text-accent transition-colors">Performance</a>
          <a href="#" className="hover:text-accent transition-colors">Apparel</a>
          <a href="#" className="hover:text-accent transition-colors">System</a>
          <a href="#" className="hover:text-accent transition-colors">Archive</a>
        </div>

        <div className="flex items-center gap-6">
          <Search size={20} className="cursor-pointer hover:text-accent" />
          <ShoppingBag size={20} className="cursor-pointer hover:text-accent" />
          <Menu size={20} className="cursor-pointer hover:text-accent" />
        </div>
      </nav>
    </header>
  );
}