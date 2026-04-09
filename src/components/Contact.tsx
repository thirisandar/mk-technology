// import { Mail, Phone, MapPin } from "lucide-react";

// const Contact = () => {
//   return (
//     <section id="contact" className="pb-24 bg-brand-dark text-white px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-md font-bold text-blue-400 uppercase tracking-widest mb-2">Contact Us</h2>
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

// export default Contact;

import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-10 pb-20 md:py-28 bg-brand-dark text-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="text-left">
            <h2 className="text-md font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
              Contact Us
            </h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight">
              Ready to start your <br className="hidden md:block" /> next project?
            </h3>
            <p className="text-base md:text-md text-slate-400 mb-10 leading-relaxed text-justify md:text-left max-w-xl">
              At MK Technology, we specialize in navigating digital transformations for businesses across Thailand. Whether you need custom software, reliable hosting, or operational consulting, reach out today for a free consultation. We look forward to building a long-term partnership with you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div className="pt-1">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Email us at</div>
                  <div className="text-lg font-bold hover:text-brand-blue transition-colors cursor-pointer">contact@mktech.fyi </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Phone size={22} />
                </div>
                <div className="pt-1">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Call us</div>
                  <div className="text-lg font-bold hover:text-brand-blue transition-colors cursor-pointer">+19176956954</div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div className="pt-1">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Our Location</div>
                  <div className="text-lg font-bold">Bangkok, Thailand</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="bg-white rounded-[2.5rem] p-7 md:p-12 text-brand-dark shadow-2xl">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-white transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-white transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-white transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold cursor-pointer hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-500/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;