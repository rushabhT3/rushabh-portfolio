import { 
  Mail, 
  Globe, 
  Zap,
  ChevronRight,
  MapPin,
  Brain
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ANIMAL_APP_URL, ATLAS_URL, JOBSYNC_URL, FULLSTACK_MAILBOX_URL, REALTIME_CHAT_URL } from '@/lib/constants';


/**
 * PROJECTS GRID
 * styled like "Our Features" sections on SaaS sites.
 */
const Projects = () => {
  const projects = [
    {
      title: "Atlas: Logistics Route Intelligence",
      category: "Django, React, PostgreSQL, Leaflet",
      desc: "Full-stack logistics platform automating route planning, HOS compliance, and intelligent log sheet generation with geospatial visualization.",
      icon: <MapPin className="text-white" size={24} />,
      color: "from-indigo-500 to-blue-600",
      link: ATLAS_URL
    },
    {
      title: "JobSync AI Pro: Resume Optimizer",
      category: "FastAPI, Gemini, Next.js, SpaCy",
      desc: "AI-powered resume optimizer with ATS match scoring, PDF parsing, rewrite suggestions using Google Gemini, and interactive analytics.",
      icon: <Brain className="text-white" size={24} />,
      color: "from-teal-500 to-emerald-600",
      link: JOBSYNC_URL
    },
    {
      title: "Full Stack Mailbox",
      category: "React.js, Express.js, MySQL",
      desc: "Comprehensive email management system with secure authentication, database encryption, and JWT authentication.",
      icon: <Mail className="text-white" size={24} />,
      color: "from-blue-500 to-cyan-500",
      link: FULLSTACK_MAILBOX_URL
    },
    {
      title: "Real-Time Group Chat",
      category: "Socket.io, Node.js, MySQL",
      desc: "Dynamic group chat application with real-time messaging, user authentication, message encryption, and AWS storage.",
      icon: <Zap className="text-white" size={24} />,
      color: "from-purple-500 to-pink-500",
      link: REALTIME_CHAT_URL
    },
    {
      title: "Full Stack Animal App",
      category: "FastAPI, React.js, SQL",
      desc: "Animal management system with favoriting capabilities, intuitive UI, SQLAlchemy ORM, and Pydantic validation.",
      icon: <Globe className="text-white" size={24} />,
      color: "from-rose-400 to-pink-600",
      link: ANIMAL_APP_URL
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <SectionHeading 
        title="Featured Deployments" 
        subtitle="A collection of systems currently running in production."
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-lg`}>
              {p.icon}
            </div>
            
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{p.category}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
              {p.desc}
            </p>

            <a 
              href={p.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-600 font-bold text-sm hover:gap-2 transition-all"
            >
              View Project <ChevronRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Projects };