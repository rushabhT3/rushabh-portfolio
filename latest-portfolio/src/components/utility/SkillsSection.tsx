import { 
  Server, 
  Database, 
  Cpu, 
  Code, 
  Globe, 
  Zap,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

/**
 * SKILLS SECTION
 * Enhanced with smooth animations and micro-interactions
 */
const SkillsSection = () => {
  const skillsCategories = [
    {
      id: 1,
      title: "Backend Development",
      icon: <Server className="text-white" size={32} />,
      color: "from-orange-500 to-amber-500",
      skills: ["Python", "Node.js", "Express.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
      description: "Building scalable server-side architectures and APIs"
    },
    {
      id: 2,
      title: "Frontend Development", 
      icon: <Code className="text-white" size={32} />,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      description: "Creating responsive and interactive user interfaces"
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      icon: <Database className="text-white" size={32} />,
      color: "from-green-500 to-emerald-500",
      skills: ["Docker", "AWS", "Git", "Linux", "Nginx", "CI/CD", "PM2"],
      description: "Deploying and maintaining robust infrastructure"
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      icon: <Cpu className="text-white" size={32} />,
      color: "from-purple-500 to-pink-500",
      skills: ["OpenAI CLIP", "PyMuPDF", "OCR", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      description: "Implementing intelligent systems and data processing"
    },
    {
      id: 5,
      title: "Tools & Technologies",
      icon: <Zap className="text-white" size={32} />,
      color: "from-yellow-500 to-orange-500",
      skills: ["Socket.IO", "JWT", "REST APIs", "GraphQL", "WebSocket", "Brevo", "Celery"],
      description: "Utilizing modern development tools and frameworks"
    },
    {
      id: 6,
      title: "Database & Storage",
      icon: <Globe className="text-white" size={32} />,
      color: "from-indigo-500 to-purple-500",
      skills: ["SQL", "NoSQL", "MySQL", "MongoDB", "PostgreSQL", "Redis", "AWS S3"],
      description: "Managing data persistence and storage solutions"
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('skills-container');
    if (container) {
      container.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('skills-container');
    if (container) {
      container.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <SectionHeading 
        title="Technical Expertise" 
        subtitle="Comprehensive tech stack across backend, frontend, AI/ML, and DevOps."
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Scrollable Container */}
        <div className="relative">
          {/* Navigation Arrows with glow effect */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-500 hover:border-orange-400 hover:shadow-orange-500/30 hover:bg-white transition-all duration-300 -translate-x-6 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-500 hover:border-orange-400 hover:shadow-orange-500/30 hover:bg-white transition-all duration-300 translate-x-6 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Infinite Horizontal Scroll Container */}
          <div 
            id="skills-container"
            className="overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
          >
            <div className="flex gap-6 min-w-max px-20">
              {skillsCategories.map((category, index) => (
                <div
                  key={`${category.id}-${index}`}
                  className="group relative flex-shrink-0 w-80 transition-all duration-500 ease-out hover:scale-105 hover:z-10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 h-full transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-slate-300/50">
                    {/* Gradient border on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10`}></div>
                    <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                    {/* Card Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <div className="transition-transform duration-500 group-hover:scale-110">
                          {category.icon}
                        </div>
                        {/* Rotating ring */}
                        <div className={`absolute inset-0 rounded-xl border-2 border-white/40 opacity-0 group-hover:opacity-100 animate-spin-slow`}></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                          {category.title}
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default group-hover:bg-gradient-to-br group-hover:${category.color} group-hover:text-black group-hover:border-transparent`}
                            style={{ transitionDelay: `${skillIndex * 30}ms` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white font-bold shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 cursor-default bg-[length:200%_auto] animate-gradient">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="tracking-wide">Solid year of hands-on experience</span>
          </div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Use arrow buttons or scroll horizontally to explore different technology domains. 
            From building scalable fintech infrastructure to implementing AI-powered document processing.
          </p>
        </div>
      </div>

      {/* Custom scrollbar and animation styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export { SkillsSection };