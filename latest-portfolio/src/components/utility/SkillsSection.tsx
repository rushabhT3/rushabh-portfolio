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
 * Infinite horizontal scroll with zoom on hover and navigation arrows.
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
    <section id="skills" className="py-24 bg-white">
      <SectionHeading 
        title="Technical Expertise" 
        subtitle="Comprehensive tech stack across backend, frontend, AI/ML, and DevOps."
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Scrollable Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-500 hover:border-orange-400 hover:shadow-orange-500/20 transition-all duration-300 -translate-x-6"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-500 hover:border-orange-400 hover:shadow-orange-500/20 transition-all duration-300 translate-x-6"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                  className="group relative flex-shrink-0 w-80 transition-all duration-300 ease-out hover:scale-110 hover:z-10"
                >
                  <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 h-full transition-all duration-300 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                    {/* Card Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{category.title}</h3>
                        <p className="text-slate-600 text-xs">{category.description}</p>
                      </div>
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-all duration-300 group-hover:border-orange-300 group-hover:text-orange-600 group-hover:bg-orange-50"
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

        {/* Instructions */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-lg shadow-orange-500/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Solid year of hands-on experience
          </div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Use arrow buttons or scroll horizontally to explore different technology domains. 
            From building scalable fintech infrastructure to implementing AI-powered document processing.
          </p>
        </div>
      </div>

      {/* Custom scrollbar styles */}
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
      `}</style>
    </section>
  );
};

export { SkillsSection };