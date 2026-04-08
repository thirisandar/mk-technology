import { Atom, Twitter, Linkedin, Github } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-7 px-6 border-t border-slate-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <img 
            src={logo} 
            alt="MK Technology Logo" 
            className="h-8 w-auto object-contain" 
          />
        </div>
        <div className="flex flex-col -gap-1">
          <span className="font-display font-bold text-lg tracking-tighter text-brand-dark leading-none">MK</span>
          <span className="text-[8px] font-bold tracking-[0.2em] text-brand-dark/80 leading-none">TECHNOLOGY</span>
        </div>
      </div>
      
      <div className="text-slate-500 text-sm">
        © <span className="font-bold">{new Date().getFullYear()}</span> MK Technology. All rights reserved. Based in Thailand.
      </div>
      
      <div className="flex items-center gap-6 text-slate-400">
        <a href="#" className="hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
        <a href="#" className="hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
        <a href="#" className="hover:text-brand-blue transition-colors"><Github size={20} /></a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;