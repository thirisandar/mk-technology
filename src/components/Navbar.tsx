import { useState, useEffect } from "react";
import { Atom, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <a href="#home" className="flex items-center">
            <img 
              src={logo} 
              alt="MK Technology Logo" 
              className="h-10 w-auto object-contain" 
            />
          </a>
          <div className="flex flex-col -gap-1">
            <span className="font-display font-bold text-xl tracking-tighter text-brand-dark leading-none">MK</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-dark/80 leading-none">TECHNOLOGY</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {item.name}
            </a>
          ))}
          {/* <button className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-blue transition-all cursor-pointer">
            Get Started
          </button> */}

          <a href="#contact" className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-blue transition-all cursor-pointer">Get Started</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-dark cursor-pointer transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden"
        >
        {navItems.map((item) => (
            <a 
            key={item.name} 
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-normal text-slate-600 text-center p-2 transition-colors duration-200 
                       active:text-brand-blue 
                       hover:text-brand-blue"
          >
            {item.name}
          </a>
        ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;