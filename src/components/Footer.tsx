import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="pt-24 pb-12 px-8 bg-primary">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-display font-bold mb-8">METRO.WAG</h2>
            <p className="text-secondary max-w-xs uppercase tracking-widest text-sm leading-loose">
              Defining the urban aesthetic through structural precision and high-energy editorial vision.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-bold uppercase text-accent mb-6 tracking-tighter text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:text-accent">Archive</a></li>
              <li><a href="#" className="hover:text-accent">Atelier</a></li>
              <li><a href="#" className="hover:text-accent">Logistics</a></li>
              <li><a href="#" className="hover:text-accent">Protocol</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold uppercase text-accent mb-6 tracking-tighter text-sm">Social</h4>
            <div className="flex gap-6">
              <Instagram className="hover:text-accent cursor-pointer" />
              <Twitter className="hover:text-accent cursor-pointer" />
              <Linkedin className="hover:text-accent cursor-pointer" />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-end justify-between">
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="p-6 border-2 border-muted rounded-full"
            >
              <ArrowUp size={32} />
            </motion.button>
            <div className="text-right mt-12">
              <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground block mb-2">OPERATIONAL STATUS</span>
              <span className="text-accent text-sm font-bold animate-pulse uppercase">Active Terminal</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t-2 border-muted flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© 2024 METROPOLITAN WAG ENTERPRISES</span>
          <div className="flex gap-8">
            <span>Privacy Protocol</span>
            <span>Terms of Access</span>
            <span>Site by Editorial Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
