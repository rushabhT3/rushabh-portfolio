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
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              R
           </div>
           <span className="font-bold text-slate-900">Rushabh.Dev</span>
        </div>
        
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Rushabh Trivedi. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <button onClick={handleGithubClick} className="text-slate-400 hover:text-slate-900 cursor-pointer">
            <Github size={20} />
          </button>
          <button onClick={handleLinkedInClick} className="text-slate-400 hover:text-blue-600 cursor-pointer">
            <Linkedin size={20} />
          </button>
          <button onClick={handleEmailClick} className="text-slate-400 hover:text-orange-500 cursor-pointer">
            <Mail size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };