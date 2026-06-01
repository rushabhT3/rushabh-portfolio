import { Github, Linkedin, Mail } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/constants";

/**
 * FOOTER
 */
const Footer = () => {
  const handleGithubClick = () => {
    window.open(GITHUB_URL, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open(LINKEDIN_URL, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
           <div className="w-8 h-8 bg-[#F73B20] rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-sm shadow-[#F73B20]/10">
              R
           </div>
           <span className="font-bold text-slate-900">Rushabh<span className="text-[#F73B20]">.Dev</span></span>
        </div>
        
        <div className="text-slate-500 text-xs font-semibold">
          © {new Date().getFullYear()} Rushabh Trivedi. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <button onClick={handleGithubClick} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">
            <Github size={18} />
          </button>
          <button onClick={handleLinkedInClick} className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors">
            <Linkedin size={18} />
          </button>
          <button onClick={handleEmailClick} className="text-slate-400 hover:text-[#F73B20] cursor-pointer transition-colors">
            <Mail size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };