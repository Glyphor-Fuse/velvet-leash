import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-2 border-muted bg-background/80 backdrop-blur-xl">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between h-20 px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-accent" />
          <span className="font-display text-2xl font-bold tracking-tighter">METRO.WAG</span>
        </motion.div>

        <nav className="hidden md:flex gap-12">
          {['Archive', 'Atelier', 'Logistics', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: 'hsl(var(--accent))' }}
              className="uppercase text-sm font-bold tracking-widest text-secondary"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block px-6 py-2 border-2 border-accent text-accent font-bold uppercase text-xs hover:bg-accent hover:text-background transition-colors">
            Access Terminal
          </button>
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-background border-b-2 border-muted p-8 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {['Archive', 'Atelier', 'Logistics', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-2xl font-display uppercase">{item}</a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
