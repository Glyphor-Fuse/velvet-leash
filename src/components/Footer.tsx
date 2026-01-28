import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-secondary/10 py-20 px-6 mt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="text-4xl font-black mb-8 italic">METROPOLITAN</h2>
            <p className="max-w-xs text-muted font-mono text-sm uppercase">
              The architecture of performance. Engineered for the high-density digital landscape.
            </p>
          </div>
          <div>
             <h4 className="font-mono font-bold text-xs uppercase mb-6 text-accent">Navigation</h4>
             <ul className="space-y-4 font-mono text-sm text-muted">
                <li><a href="#" className="hover:text-primary">Source Index</a></li>
                <li><a href="#" className="hover:text-primary">API Protocol</a></li>
                <li><a href="#" className="hover:text-primary">Visual Identity</a></li>
             </ul>
          </div>
          <div>
             <h4 className="font-mono font-bold text-xs uppercase mb-6 text-accent">Social</h4>
             <ul className="space-y-4 font-mono text-sm text-muted">
                <li><a href="#" className="hover:text-primary">Twitter / X</a></li>
                <li><a href="#" className="hover:text-primary">Github</a></li>
                <li><a href="#" className="hover:text-primary">Discord</a></li>
             </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-secondary/5 font-mono text-[10px] uppercase text-muted tracking-widest">
           <span>© 2024 Metropolis High-Performance Urbanism</span>
           <span className="mt-4 md:mt-0">LAT: 40.7128° N | LON: 74.0060° W</span>
        </div>
      </div>
    </footer>
  );
}