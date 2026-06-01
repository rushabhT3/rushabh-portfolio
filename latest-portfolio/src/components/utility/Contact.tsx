import { EMAIL, LINKEDIN_URL } from '@/lib/constants';
import { 
  Linkedin, 
  Mail, 
} from 'lucide-react';

/**
 * CTA / CONTACT SECTION
 * "Download App" style but for hiring.
 */
const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const handleLinkedInClick = () => {
    window.open(LINKEDIN_URL, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto bg-slate-950 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden border border-slate-900">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F73B20] via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-6 leading-tight tracking-tight">
            Ready to scale your <span className="text-[#F73B20]">Application?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 font-medium leading-relaxed">
            I'm currently available for full-time roles or freelance contracts. 
            Let's build something that handles millions of requests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#F73B20] hover:bg-[#e03018] text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-md shadow-[#F73B20]/10 hover:shadow-lg hover:shadow-[#F73B20]/20 w-full sm:w-auto cursor-pointer active:scale-95"
            >
              <Mail size={16} />
              Email Me!
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-8 py-4 rounded-full font-bold text-sm transition-all w-full sm:w-auto cursor-pointer active:scale-95"
            >
              <Linkedin size={16} className="text-blue-400" />
              LinkedIn Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };