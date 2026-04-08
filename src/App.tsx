// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { motion } from "motion/react";
// import { 
//   Code2, 
//   Globe, 
//   Server, 
//   Cpu, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   ChevronRight,
//   Github,
//   Twitter,
//   Linkedin,
//   Menu,
//   X,
//   Atom
// } from "lucide-react";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Contact Us", href: "#contact" },
//   ];

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Atom className="text-brand-blue w-10 h-10" strokeWidth={1.5} />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
//             </div>
//           </div>
//           <div className="flex flex-col -gap-1">
//             <span className="font-display font-bold text-xl tracking-tighter text-brand-dark leading-none">MK</span>
//             <span className="text-[10px] font-bold tracking-[0.2em] text-brand-dark/80 leading-none">TECHNOLOGY</span>
//           </div>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <a 
//               key={item.name} 
//               href={item.href}
//               className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
//             >
//               {item.name}
//             </a>
//           ))}
//           <button className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-blue transition-all">
//             Get Started
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button 
//           className="md:hidden text-brand-dark cursor-pointer transition"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden"
//         >
//           {navItems.map((item) => (
//             <a 
//               key={item.name} 
//               href={item.href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-lg font-medium text-slate-600"
//             >
//               {item.name}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// const Hero = () => {
//   return (
//     <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
//             </span>
//             Innovation in Motion
//           </div>
//           <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark leading-tight mb-6">
//             Reliable <span className="text-brand-blue">Digital Solutions</span> for the Future.
//           </h1>
//           <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
//             MK Technology is a technology-focused company offering reliable digital solutions. We empower businesses with cutting-edge software, robust hosting, and innovative development strategies.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <a href="#Services" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold cursor-pointer hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2">
//               Our Services <ChevronRight size={18} />
//             </a>
            
//           </div>
//         </motion.div>
        
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
//             <img 
//               src="https://picsum.photos/seed/tech-office/800/600" 
//               alt="Modern Technology Office" 
//               className="w-full h-auto"
//               referrerPolicy="no-referrer"
//             />
//           </div>
//           {/* Decorative elements */}
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-0 opacity-50"></div>
//           <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl -z-0 opacity-30"></div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-slate-50 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="order-2 lg:order-1">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <img src="https://picsum.photos/seed/thailand1/400/500" alt="Thailand Operations" className="rounded-2xl shadow-md" referrerPolicy="no-referrer" />
//                 <div className="bg-brand-blue p-6 rounded-2xl text-white">
//                   <div className="text-3xl font-bold mb-1">100%</div>
//                   <div className="text-sm opacity-80">Customer Satisfaction</div>
//                 </div>
//               </div>
//               <div className="space-y-4 pt-8">
//                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
//                   <div className="text-3xl font-bold text-brand-blue mb-1">HQ</div>
//                   <div className="text-sm text-slate-600">Based in Thailand</div>
//                 </div>
//                 <img src="https://picsum.photos/seed/thailand2/400/400" alt="Innovation" className="rounded-2xl shadow-md" referrerPolicy="no-referrer" />
//               </div>
//             </div>
//           </div>
          
//           <div className="order-1 lg:order-2">
//             <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">About MK Technology</h2>
//             <h3 className="text-4xl font-display font-bold text-brand-dark mb-6">Delivering Excellence from Thailand to the World.</h3>
//             <p className="text-lg text-slate-600 mb-6 leading-relaxed">
//               Based in Thailand, MK Technology operates at the intersection of innovation and reliability. We deliver high-quality digital services to customers worldwide, ensuring that every solution we build is tailored to meet specific business needs.
//             </p>
//             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//               Our commitment to quality, customer satisfaction, and continuous innovation drives everything we do. Whether you're a startup or an established enterprise, we provide the technical expertise needed to thrive in today's digital landscape.
//             </p>
//             <div className="space-y-4">
//               {[
//                 "Global service delivery from Thailand",
//                 "Focus on quality and innovation",
//                 "Customer-centric approach",
//                 "Expert technical support"
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
//                     <ChevronRight size={14} strokeWidth={3} />
//                   </div>
//                   <span className="font-medium text-slate-700">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Services = () => {
//   const services = [
//     {
//       title: "Application Development",
//       description: "Custom mobile and desktop applications built with modern frameworks to provide seamless user experiences across all platforms.",
//       icon: <Code2 className="text-brand-blue" size={32} />,
//     },
//     {
//       title: "Website Development",
//       description: "Responsive, high-performance websites designed to capture your brand identity and convert visitors into loyal customers.",
//       icon: <Globe className="text-brand-blue" size={32} />,
//     },
//     {
//       title: "Hosting Services",
//       description: "Reliable, secure, and scalable cloud hosting solutions that ensure your digital assets are always available and performing at their best.",
//       icon: <Server className="text-brand-blue" size={32} />,
//     },
//     {
//       title: "General Software Development",
//       description: "End-to-end software solutions including system architecture, API integration, and legacy system modernization.",
//       icon: <Cpu className="text-brand-blue" size={32} />,
//     },
//   ];

//   return (
//     <section id="services" className="py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Our Expertise</h2>
//           <h3 className="text-4xl font-display font-bold text-brand-dark mb-6">Comprehensive Technology Services</h3>
//           <p className="text-lg text-slate-600">
//             We offer a wide range of digital solutions designed to help your business grow and succeed in the modern era.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10 }}
//               className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all"
//             >
//               <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
//                 {service.icon}
//               </div>
//               <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
//               <p className="text-slate-600 leading-relaxed text-sm">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" className="py-24 bg-brand-dark text-white px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Contact Us</h2>
//             <h3 className="text-4xl font-display font-bold mb-6">Ready to start your next project?</h3>
//             <p className="text-lg text-slate-400 mb-10">
//               We're here to help you navigate your digital transformation. Get in touch with our team today for a free consultation.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <div className="text-sm text-slate-400">Email us at</div>
//                   <div className="font-bold">contact@mktechnology.co.th</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <div className="text-sm text-slate-400">Call us</div>
//                   <div className="font-bold">+66 2 123 4567</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <div className="text-sm text-slate-400">Our Location</div>
//                   <div className="font-bold">Bangkok, Thailand</div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-3xl p-8 md:p-10 text-brand-dark">
//             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700">Full Name</label>
//                   <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="John Doe" />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700">Email Address</label>
//                   <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="john@example.com" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700">Subject</label>
//                 <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Project Inquiry" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-700">Message</label>
//                 <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none" placeholder="Tell us about your project..."></textarea>
//               </div>
//               <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="bg-slate-50 py-12 px-6 border-t border-slate-200">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Atom className="text-brand-blue w-8 h-8" strokeWidth={1.5} />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
//             </div>
//           </div>
//           <div className="flex flex-col -gap-1">
//             <span className="font-display font-bold text-lg tracking-tighter text-brand-dark leading-none">MK</span>
//             <span className="text-[8px] font-bold tracking-[0.2em] text-brand-dark/80 leading-none">TECHNOLOGY</span>
//           </div>
//         </div>
        
//         <div className="text-slate-500 text-sm">
//           © {new Date().getFullYear()} MK Technology. All rights reserved. Based in Thailand.
//         </div>
        
//         <div className="flex items-center gap-6 text-slate-400">
//           <a href="#" className="hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
//           <a href="#" className="hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
//           <a href="#" className="hover:text-brand-blue transition-colors"><Github size={20} /></a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-blue/10 selection:text-brand-blue">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Services />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
