import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";
import heroimg from "../assets/heroimg.jpeg";


const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          Innovation in Motion
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark leading-tight mb-6">
          Reliable <span className="text-brand-blue">Digital Solutions</span> for the Future.
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
          MK Technology is a technology-focused company offering reliable digital solutions. We empower businesses with cutting-edge software, robust hosting, and innovative development strategies.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#services" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold cursor-pointer hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2">
            Our Services <ChevronRight size={18} />
          </a>
          
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
          {/* <img 
            src="https://picsum.photos/seed/tech-office/800/600" 
            alt="Modern Technology Office" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          /> */}
          <img 
            src={heroimg} 
            alt="MK Technology Logo" 
            className="w-full h-auto background-transparent object-contain" 
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-0 opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl -z-0 opacity-30"></div>
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;