// import { motion } from "motion/react";
// import { Code2, Globe, Server, Cpu } from "lucide-react";

// const Services = () => {
//     const testimonials = [
//         {
//           quote: "MK Technology transformed our school's digital operations. Their attention to detail is unmatched.",
//           author: "Director",
//           company: "Generations Private School"
//         },
//         {
//           quote: "The hosting and support we receive for our insurance services are reliable and lightning-fast.",
//           author: "Manager",
//           company: "RCM Insurance Service"
//         }
//       ];

//       const steps = [
//         { title: "Consultation", desc: "We listen to your specific business needs." },
//         { title: "Strategy", desc: "We design a custom digital roadmap." },
//         { title: "Development", desc: "Our team builds your high-quality solution." },
//         { title: "Support", desc: "Continuous maintenance and hosting." }
//       ];
//     const services = [
//         {
//           title: "Application Development",
//           description: "Custom mobile and desktop applications built with modern frameworks to provide seamless user experiences across all platforms.",
//           icon: <Globe className="text-brand-blue" size={32} />,
//         },
//         {
//           title: "Website Development",
//           description: "Responsive, high-performance websites designed to capture your brand identity and convert visitors into loyal customers.",
//           icon: <Globe className="text-brand-blue" size={32} />,
//         },
//         {
//           title: "Hosting Services",
//           description: "Reliable, secure, and scalable cloud hosting solutions that ensure your digital assets are always available and performing at their best.",
//           icon: <Server className="text-brand-blue" size={32} />,
//         },
//         {
//           title: "General Software Development",
//           description: "End-to-end software solutions including system architecture, API integration, and legacy system modernization.",
//           icon: <Cpu className="text-brand-blue" size={32} />,
//         },
//       ];
//       return(
//         <section id="services" className="pb-24 px-6">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center max-w-2xl mx-auto mb-16">
//                     <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Our Expertise</h2>
//                     <h3 className="text-4xl font-display font-bold text-brand-dark mb-6">Comprehensive Technology Services</h3>
//                     <p className="text-lg text-slate-600">
//                         We offer a wide range of digital solutions designed to help your business grow and succeed in the modern era.
//                     </p>
//                 </div>
    
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {services.map((service, i) => (
//                     <motion.div
//                     key={i}
//                     whileHover={{ y: -10 }}
//                     className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all"
//                     >
//                     <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
//                         {service.icon}
//                     </div>
//                     <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
//                     <p className="text-slate-600 leading-relaxed text-sm">
//                         {service.description}
//                     </p>
//                     </motion.div>
//                 ))}
//                 </div>
//             </div>
//        </section>
//       )
// };

// export default Services;

import { motion } from "motion/react";
import { Code2, Globe, Server, Cpu, CheckCircle2 } from "lucide-react";

const Services = () => {
    const services = [
        {
          title: "Application Development",
          description: "Custom mobile and desktop applications built with modern frameworks to provide seamless user experiences across all platforms.",
          icon: <Code2 className="text-brand-blue" size={32} />,
        },
        {
          title: "Website Development",
          description: "Responsive, high-performance websites designed to capture your brand identity and convert visitors into loyal customers.",
          icon: <Globe className="text-brand-blue" size={32} />,
        },
        {
          title: "Hosting Services",
          description: "Reliable, secure, and scalable cloud hosting solutions that ensure your digital assets are always available and performing at their best.",
          icon: <Server className="text-brand-blue" size={32} />,
        },
        {
          title: "General Software Development",
          description: "End-to-end software solutions including system architecture, API integration, and legacy system modernization.",
          icon: <Cpu className="text-brand-blue" size={32} />,
        },
    ];

    return (
        <section id="services" className="pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* --- Header --- */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-lg font-bold text-brand-blue uppercase tracking-widest mb-2">Our Expertise</h2>
                    <h3 className="text-3xl font-display font-bold text-brand-dark mb-3">Comprehensive Technology Services</h3>
                    <p className="text-sm text-slate-600">
                        We offer a wide range of digital solutions designed to help your business grow and succeed in the modern era.
                    </p>
                </div>
    
                {/* --- Service Cards Grid --- */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* --- NEW SECTION: HOW WE HELP OUR CLIENTS --- */}
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-slate-50 rounded-[3rem] p-8 md:p-16">
                    <div>
                        <h3 className="text-xl font-display font-bold text-brand-dark mb-6">How We Help Our Clients Succeed</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We help our clients by providing end-to-end support—from the initial consultation to long-term hosting and maintenance. Our team ensures that every digital asset we create is scalable, secure, and perfectly aligned with your brand identity. By integrating modern AI workflows and robust system architectures, we empower local businesses to compete on a global scale while maintaining the personal touch that defines our consulting service.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="text-brand-blue shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-brand-dark">Direct Client Interaction</h4>
                                    <p className="text-sm text-slate-500">We work directly with your team to ensure every requirement is met with precision.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="text-brand-blue shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-brand-dark">Tailored Strategy</h4>
                                    <p className="text-sm text-slate-500">From preschool management to insurance portals, our solutions are never one-size-fits-all.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="text-brand-blue shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-brand-dark">Operational Excellence</h4>
                                    <p className="text-sm text-slate-500">We help you set up internal processes, requisition forms, and security logbooks for total control.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default Services;