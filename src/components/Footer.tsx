import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-black mb-6 italic tracking-tighter">VELVET LEASH</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              The intersection of metropolitan performance and canine evolution. 
              Designed and assembled in the neon-industrial zone.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, color: '#f7ff42' }}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-black mb-8 text-xs tracking-[0.3em] text-primary">COLLECTION</h5>
            <ul className="space-y-4">
              {['Stryker Harness', 'Vanguard Leash', 'Neon Collar', 'Exo-Pouch'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold uppercase hover:text-primary flex items-center gap-2 group">
                    {item} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-8 text-xs tracking-[0.3em] text-primary">COMPANY</h5>
            <ul className="space-y-4">
              {['Our Story', 'Technical Lab', 'Press Kit', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold uppercase hover:text-primary">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-8 text-xs tracking-[0.3em] text-primary">LEGAL</h5>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Protocol', 'Shipping Matrix', 'Return Loop'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold uppercase hover:text-primary">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5">
          <span className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground opacity-50 uppercase">
            © 2024 Velvet Leash Metropolitan Kineticism
          </span>
          <span className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground opacity-50 uppercase mt-4 md:mt-0">
            Design: Urban Core Division
          </span>
        </div>
      </div>
    </footer>
  );
}