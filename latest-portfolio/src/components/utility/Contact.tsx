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
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500 via-slate-900 to-slate-900" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to scale your <span className="text-orange-500">Application?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            I'm currently available for full-time roles or freelance contracts. 
            Let's build something that handles millions of requests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              <Mail className="text-orange-500" />
              Email Me!
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="inline-flex items-center justify-center gap-3 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="text-blue-400" />
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };