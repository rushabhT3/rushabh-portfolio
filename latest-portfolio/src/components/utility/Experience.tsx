import { 
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from "./SectionHeading";


/**
 * EXPERIENCE TIMELINE
 * Chronological vertical timeline with alternating left/right layout.
 */
const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Coinearth Technologies",
      position: "Backend Developer",
      period: "Jun 2025 – Nov 2025",
      location: "Hyderabad, India",
      description: "Architecting the backbone of Paycio (Crypto-Fiat) & Indoex (Trading). I handle the money flow—securely and instantly.",
      achievements: [
        "Powered 50+ APIs for KYC, Wallets & Settlements",
        "Integrated Redis for caching & rate limiting",
        "Built Real-time Order Books with Socket.IO"
      ],
      color: "from-orange-500 to-amber-500",
      side: "right"
    },
    {
      id: 2,
      company: "Polynomial AI",
      position: "Python Django Developer",
      period: "Nov 2024 – May 2025",
      location: "Surat, Gujarat, India",
      description: "Developed the Invoice Intelligence Platform. We turned unstructured documents into structured data using AI.",
      achievements: [
        "Optimized 35+ Django REST APIs",
        "Built CLIP-based document filtering system",
        "Achieved 1000x faster OCR processing"
      ],
      color: "from-purple-500 to-pink-500",
      side: "left"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <SectionHeading 
        title="Professional Journey" 
        subtitle="Driving fintech innovation and AI efficiency at scale."
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Timeline Line - Hidden on small screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-amber-500 to-orange-500 rounded-full"></div>
        
        {/* Timeline Items */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center ${
              exp.side === 'left' ? 'justify-start' : 'justify-end'
            }`}>
              {/* Timeline Dot - Different for mobile vs desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-orange-500 rounded-full z-20 shadow-lg hidden md:block"></div>
              {/* Mobile Timeline Dot */}
              <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full z-20 shadow-lg md:hidden"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${
                exp.side === 'left' ? 'md:pr-12 text-right' : 'md:pl-12'
              } ml-8 md:ml-0`}>
                <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-orange-200 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute top-0 ${exp.side === 'left' ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-br ${exp.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    {/* Period Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white font-bold text-sm mb-4 ${
                      exp.side === 'left' ? 'ml-auto' : ''
                    }`}>
                      <span className="text-xs">{exp.period}</span>
                    </div>
                    
                    {/* Company Info */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.company}</h3>
                    <p className={`text-orange-500 font-semibold mb-2 ${
                      exp.side === 'left' ? 'text-right' : ''
                    }`}>{exp.position}</p>
                    <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
                    
                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                    
                    {/* Achievements */}
                    <div className={`space-y-3 ${
                      exp.side === 'left' ? 'text-right' : ''
                    }`}>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className={`flex items-center gap-3 text-slate-700 ${
                          exp.side === 'left' ? 'justify-end' : ''
                        }`}>
                          {exp.side === 'right' && (
                            <div className="mt-1 min-w-[20px] text-orange-500 flex-shrink-0">
                              <CheckCircle2 size={18} />
                            </div>
                          )}
                          <span className="text-sm font-medium">{achievement}</span>
                          {exp.side === 'left' && (
                            <div className="mt-1 min-w-[20px] text-orange-500 flex-shrink-0">
                              <CheckCircle2 size={18} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Experience };