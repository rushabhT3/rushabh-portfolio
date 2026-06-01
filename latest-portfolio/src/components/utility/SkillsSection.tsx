"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, 
  Database, 
  Cpu, 
  Code, 
  Globe, 
  Zap,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

/**
 * RECONSTRUCTED TECHNICAL EXPERTISE SECTION
 * Follows Jeton.com's premium layout:
 * - Generous spacing and bold typography.
 * - Horizontal step capsule selector (01, 02, etc.).
 * - Dynamic two-column view (Watermarked highlight card + detailed skill grid).
 * - Smooth framer-motion transition animations.
 */
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillsCategories = [
    {
      id: 1,
      title: "Backend Development",
      icon: <Server size={24} />,
      colorClass: "from-[#F73B20] to-[#E03018]",
      accentColor: "#F73B20",
      accentBg: "bg-[#F73B20]/10",
      borderGlow: "hover:border-[#F73B20] hover:shadow-[#F73B20]/10",
      description: "Building scalable server-side architectures, real-time message brokers, and secure payment APIs.",
      highlights: [
        "High-throughput REST & WebSocket APIs",
        "Secure fintech transaction processing",
        "Role-based authentication & JWT flows",
        "Asynchronous task workers & caching"
      ],
      skills: ["Python", "Node.js", "Express.js", "Django", "FastAPI", "REST APIs", "WebSocket", "Redis"]
    },
    {
      id: 2,
      title: "Frontend Development", 
      icon: <Code size={24} />,
      colorClass: "from-blue-500 to-cyan-500",
      accentColor: "#3b82f6",
      accentBg: "bg-blue-500/10",
      borderGlow: "hover:border-blue-500 hover:shadow-blue-500/10",
      description: "Creating premium user interfaces with high performance, state-of-the-art responsiveness, and SEO optimization.",
      highlights: [
        "Modular atomic component architecture",
        "Dynamic client/server data fetching",
        "Clean, maintainable state machines",
        "Pixel-perfect responsive design systems"
      ],
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      icon: <Database size={24} />,
      colorClass: "from-emerald-500 to-green-600",
      accentColor: "#10b981",
      accentBg: "bg-emerald-500/10",
      borderGlow: "hover:border-emerald-500 hover:shadow-emerald-500/10",
      description: "Automating deployment pipelines, managing container workloads, and optimizing cloud compute usage.",
      highlights: [
        "Containerized environment builds",
        "Automated CI/CD git actions",
        "AWS S3 & EC2 server instances",
        "Production server load balancing & logs"
      ],
      skills: ["Docker", "AWS", "Git", "Linux", "Nginx", "CI/CD Pipelines", "PM2 Process Manager", "Shell Scripts"]
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      icon: <Cpu size={24} />,
      colorClass: "from-purple-500 to-indigo-600",
      accentColor: "#8b5cf6",
      accentBg: "bg-purple-500/10",
      borderGlow: "hover:border-purple-500 hover:shadow-purple-500/10",
      description: "Integrating LLM architectures, multi-modal embeddings, and visual models into active SaaS pipelines.",
      highlights: [
        "AI-driven OCR parser optimizations",
        "Multi-modal text/image vector search",
        "Intelligent context-prompt systems",
        "Analytics modeling & classification"
      ],
      skills: ["OpenAI CLIP", "Gemini API", "PyMuPDF", "Tesseract OCR", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      id: 5,
      title: "Databases & Storage",
      icon: <Globe size={24} />,
      colorClass: "from-indigo-500 to-violet-600",
      accentColor: "#6366f1",
      accentBg: "bg-indigo-500/10",
      borderGlow: "hover:border-indigo-500 hover:shadow-indigo-500/10",
      description: "Designing high-availability data models, transactions logic, and low-latency in-memory cache strategies.",
      highlights: [
        "Optimized indexing & complex queries",
        "NoSQL document-schema designs",
        "Distributed session management",
        "Secure credentials & backups storage"
      ],
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis Cache", "SQLAlchemy", "Prisma ORM", "AWS S3 Bucket"]
    },
    {
      id: 6,
      title: "Tools & Technologies",
      icon: <Zap size={24} />,
      colorClass: "from-amber-500 to-orange-500",
      accentColor: "#f59e0b",
      accentBg: "bg-amber-500/10",
      borderGlow: "hover:border-amber-500 hover:shadow-amber-500/10",
      description: "Utilizing modern libraries and event architectures to ensure fast updates and reliable notification pipelines.",
      highlights: [
        "Real-time event subscriptions (Socket.io)",
        "Token verification & secure headers",
        "Task queues & Celery worker schedules",
        "Automated mailing (Brevo) endpoints"
      ],
      skills: ["Socket.IO", "JWT", "Celery", "GraphQL", "WebSockets", "Brevo Mail", "Git", "REST Integrations"]
    }
  ];

  const activeCategoryData = skillsCategories[activeCategory];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background brand glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <SectionHeading 
        title="Technical Expertise" 
        subtitle="Comprehensive tech stack across backend, frontend, AI/ML, and DevOps."
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Jeton-style Step Selector Bar */}
        <div className="flex justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-2.5 p-1.5 bg-slate-50 border border-slate-100 rounded-full shadow-sm">
            {skillsCategories.map((category, index) => {
              const isActive = activeCategory === index;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none whitespace-nowrap active:scale-95 ${
                    isActive 
                      ? "bg-[#F73B20] text-white shadow-md shadow-[#F73B20]/25 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                    {`0${index + 1}`}
                  </span>
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category View */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Summary Card with Watermark */}
              <div className="lg:col-span-5 flex">
                <div className="relative w-full bg-white rounded-[2.25rem] p-8 border border-slate-200/80 shadow-lg shadow-slate-100/30 flex flex-col justify-between overflow-hidden group">
                  {/* Huge numeric watermark */}
                  <div className="absolute -bottom-6 -right-6 text-[12rem] font-extrabold font-mono tracking-tighter leading-none select-none text-slate-100/60 opacity-60 group-hover:scale-105 transition-transform duration-700 pointer-events-none">
                    {`0${activeCategory + 1}`}
                  </div>

                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                        style={{ background: `linear-gradient(135deg, ${activeCategoryData.accentColor}, ${activeCategoryData.accentColor}dd)` }}
                      >
                        {activeCategoryData.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-950">
                        {activeCategoryData.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium relative z-10">
                      {activeCategoryData.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-3 relative z-10">
                      {activeCategoryData.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#F73B20] mt-0.5 shrink-0" />
                          <span className="text-slate-600 text-xs font-semibold leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating/Proficiency metric */}
                  <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-2">
                      <span>Domain Proficiency</span>
                      <span className="text-slate-900 font-bold">Advanced</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${88 - activeCategory * 2}%`, 
                          backgroundColor: activeCategoryData.accentColor 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Skill Grid */}
              <div className="lg:col-span-7 flex">
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4.5">
                  {activeCategoryData.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                      className={`group/item bg-slate-50 border border-slate-200/50 rounded-[1.75rem] p-5.5 flex flex-col justify-between hover:bg-white transition-all duration-300 cursor-default select-none hover:-translate-y-1 ${activeCategoryData.borderGlow}`}
                    >
                      <div className="space-y-1">
                        <div className="text-slate-800 font-bold text-sm tracking-tight group-hover/item:text-slate-950 transition-colors">
                          {skill}
                        </div>
                        <div className="text-slate-400 text-[10px] font-semibold">
                          Production Ready
                        </div>
                      </div>

                      {/* Small Jeton Indicator Dot */}
                      <div className="flex justify-end mt-6">
                        <div 
                          className="w-2.5 h-2.5 rounded-full bg-slate-200 transition-colors duration-300 group-hover/item:bg-[var(--dot-color)]"
                          style={{ '--dot-color': activeCategoryData.accentColor } as React.CSSProperties}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Informative Subtext */}
        <p className="mt-12 text-center text-xs font-semibold text-slate-400 leading-relaxed max-w-xl mx-auto">
          Explore different technology domains by selecting categories above. 
          Each stack represents core capabilities deployed across real-world systems.
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export { SkillsSection };