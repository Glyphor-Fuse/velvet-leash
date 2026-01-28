import { Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-foreground pt-24 pb-12 px-6 md:px-12 border-t-5 border-accent">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-6">
          <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-8 leading-[0.8]">KINETIC</h2>
          <div className="flex gap-6">
            <Github className="cursor-pointer hover:text-accent" />
            <Instagram className="cursor-pointer hover:text-accent" />
            <Twitter className="cursor-pointer hover:text-accent" />
          </div>
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 gap-4 font-mono text-sm uppercase tracking-widest">
          <h4 className="font-black text-accent mb-4">Navigation</h4>
          <a href="#" className="hover:pl-2 transition-all">Shop All</a>
          <a href="#" className="hover:pl-2 transition-all">Collections</a>
          <a href="#" className="hover:pl-2 transition-all">Lab Archives</a>
          <a href="#" className="hover:pl-2 transition-all">Sizing Guide</a>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 gap-4 font-mono text-sm uppercase tracking-widest">
          <h4 className="font-black text-accent mb-4">Contact</h4>
          <p className="text-muted-foreground">HQ: New Osaka, Grid 7</p>
          <p className="text-muted-foreground">comms@kinetic.io</p>
          <div className="mt-8">
            <input 
              type="text" 
              placeholder="JOIN THE FREQUENCY" 
              className="w-full bg-transparent border-b-2 border-muted/50 p-2 focus:border-accent outline-none font-bold"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-muted/20 pt-12 gap-8">
        <span className="text-[10px] font-mono text-muted uppercase">© 2024 Kinetic System Dynamics. All Rights Reserved.</span>
        <div className="flex gap-12 text-[10px] font-mono text-muted uppercase">
          <a href="#" className="hover:text-foreground">Privacy Protocol</a>
          <a href="#" className="hover:text-foreground">Terms of Deployment</a>
        </div>
      </div>
    </footer>
  );
}