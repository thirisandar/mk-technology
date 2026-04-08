import { ChevronRight } from "lucide-react";
import about1 from "../assets/about1.jpeg";
import about2 from "../assets/about2.jpg";

const About = () => {
  return (
    <section id="about" className="pb-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                  <img src={about1}  alt="MK Technology Team" className="rounded-2xl shadow-md w-full h-auto object-cover" />                <div className="bg-brand-blue p-6 rounded-2xl text-white">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-80">Customer Satisfaction</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-3xl font-bold text-brand-blue mb-1">HQ</div>
                  <div className="text-sm text-slate-600">Based in Thailand</div>
                </div>
                 <img src={about2}  alt="MK Technology Innovation"  className="rounded-2xl shadow-md w-full h-auto object-cover"  />            
               </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-xl font-bold text-brand-blue uppercase tracking-widest mb-4">About MK Technology</h2>
            <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">Delivering Excellence from Thailand to the World.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Based in Thailand, MK Technology operates at the intersection of innovation and reliability. We deliver high-quality digital services to customers worldwide, ensuring that every solution we build is tailored to meet specific business needs.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our commitment to quality, customer satisfaction, and continuous innovation drives everything we do. Whether you're a startup or an established enterprise, we provide the technical expertise needed to thrive in today's digital landscape.
            </p>
            <div className="space-y-4">
              {[
                "Global service delivery from Thailand",
                "Focus on quality and innovation",
                "Customer-centric approach",
                "Expert technical support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                    <ChevronRight size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;