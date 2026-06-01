import { 
  Mail, 
  ChevronRight,
  MapPin,
  Brain,
  MessageCircle,
  PawPrint
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ANIMAL_APP_URL, ATLAS_URL, JOBSYNC_URL, FULLSTACK_MAILBOX_URL, REALTIME_CHAT_URL } from '@/lib/constants';

/**
 * PROJECTS GRID
 * Redesigned to follow Jeton.com's clean grid card layouts with high-border radius,
 * flat-colored accent badges, and clean hover state borders.
 */
const Projects = () => {
  const projects = [
    {
      title: "Atlas: Logistics Route Intelligence",
      category: "Django, React, PostgreSQL",
      desc: "Full-stack logistics platform automating route planning, HOS compliance, and intelligent log sheet generation with geospatial mapping.",
      icon: <MapPin size={20} />,
      accentClass: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      link: ATLAS_URL
    },
    {
      title: "JobSync AI Pro: Resume Optimizer",
      category: "FastAPI, Gemini, Next.js",
      desc: "AI-powered resume optimizer with ATS match scoring, PDF parsing, rewrite suggestions using Google Gemini, and interactive analytics dashboard.",
      icon: <Brain size={20} />,
      accentClass: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      link: JOBSYNC_URL
    },
    {
      title: "Full Stack Mailbox",
      category: "React.js, Express.js, MySQL",
      desc: "Comprehensive email management system with secure authentication, database encryption, JWT authentication, and optimized load latency.",
      icon: <Mail size={20} />,
      accentClass: "bg-[#F73B20]/10 text-[#F73B20] border-[#F73B20]/20",
      link: FULLSTACK_MAILBOX_URL
    },
    {
      title: "Real-Time Group Chat",
      category: "Socket.io, Node.js, MySQL",
      desc: "Dynamic group chat application with real-time messaging, user authentication, message encryption, and AWS S3 attachment storage.",
      icon: <MessageCircle size={20} />,
      accentClass: "bg-pink-500/10 text-pink-500 border-pink-500/20",
      link: REALTIME_CHAT_URL
    },
    {
      title: "Full Stack Animal App",
      category: "FastAPI, React.js, SQL",
      desc: "Animal management system with favoriting capabilities, intuitive user interface, SQLAlchemy ORM, and Pydantic validation.",
      icon: <PawPrint size={20} />,
      accentClass: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      link: ANIMAL_APP_URL
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50/50 border-t border-slate-100">
      <SectionHeading 
        title="Featured Deployments" 
        subtitle="A collection of systems currently running in production."
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="group bg-white rounded-[2.25rem] p-8 border border-slate-200/80 shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:border-[#F73B20] transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
          >
            <div>
              {/* Customized Accent Icon Wrapper */}
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 border ${p.accentClass}`}>
                {p.icon}
              </div>
              
              {/* Tech Category Badge */}
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100/70 border border-slate-200/30 px-3 py-1 rounded-full w-fit mb-4">
                {p.category}
              </div>

              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">
                {p.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {p.desc}
              </p>
            </div>

            {/* View Project Action Link */}
            <a 
              href={p.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#F73B20] transition-colors cursor-pointer select-none"
            >
              View Project 
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Projects };