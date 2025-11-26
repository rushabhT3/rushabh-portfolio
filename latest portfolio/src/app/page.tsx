'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Server, 
  Database, 
  Cpu, 
  Code, 
  Globe, 
  Zap,
  CheckCircle2,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

// Environment variables for links
const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || 'https://drive.google.com/file/d/1U6mMEfduBt3Mr9EGGDS7HYyRma58Av55/view?usp=sharing';
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/rushabhT3/';
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/trivedirushabh/';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'rushabhtrivedi03@gmail.com';

// Project links
const FULLSTACK_MAILBOX_URL = process.env.NEXT_PUBLIC_FULLSTACK_MAILBOX_URL || '#';
const REALTIME_CHAT_URL = process.env.NEXT_PUBLIC_REALTIME_CHAT_URL || '#';
const EXPENSE_TRACKER_URL = process.env.NEXT_PUBLIC_EXPENSE_TRACKER_URL || '#';
const TODO_APP_URL = process.env.NEXT_PUBLIC_TODO_APP_URL || '#';
const ANIMAL_APP_URL = process.env.NEXT_PUBLIC_ANIMAL_APP_URL || '#';

// --- UTILITY COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-orange-500 hover:text-orange-600 shadow-sm",
    dark: "bg-slate-900 text-white hover:bg-slate-800"
  };
  
  // @ts-ignore
  return <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16 max-w-2xl mx-auto px-4">
    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-slate-500 text-lg md:text-xl leading-relaxed">{subtitle}</p>}
  </div>
);

// --- SEPARATE COMPONENTS ---

/**
 * NAVBAR
 * Clean, sticky, white background with orange accent buttons.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && event.target instanceof Element) {
        const target = event.target as Element;
        const menuElement = document.querySelector('[data-mobile-menu]');
        const toggleElement = document.querySelector('[data-menu-toggle]');
        
        if (menuElement && !menuElement.contains(target) && 
            toggleElement && !toggleElement.contains(target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleDownloadCV = () => {
    if (RESUME_URL !== '#') {
      window.open(RESUME_URL, '_blank');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20">
            R
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Rushabh<span className="text-orange-500">.Dev</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Experience', 'Projects', 'Skills'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 font-medium hover:text-orange-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.toLowerCase());
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item}
            </a>
          ))}
          <Button variant="primary" className="!py-3 !px-6 text-xs" onClick={handleDownloadCV}>
            Download CV <Download size={16} />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)} data-menu-toggle>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 shadow-xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5" data-mobile-menu>
           {['Experience', 'Projects', 'Skills'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold text-slate-800 py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const element = document.getElementById(item.toLowerCase());
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item}
            </a>
          ))}
          <Button variant="primary" className="w-full" onClick={handleDownloadCV}>Download CV</Button>
        </div>
      )}
    </nav>
  );
};

/**
 * HERO SECTION
 * Mimics Jeton's "One Wallet" hero with bold typography and 
 * abstract 3D-style cards floating on the right.
 */
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            Now Available for Hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">All-in-One</span> <br />
            Fullstack Solution.
          </h1>
          
          <p className="text-xl text-slate-600 md:max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I build high-throughput fintech APIs and AI-driven platforms. 
            Robust, scalable, and secure Python & Node.js architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" onClick={() => window.open(GITHUB_URL, '_blank')}>
              <Github size={18} /> GitHub Profile
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            {/* Trust Badges imitation */}
            <div className="text-slate-400 font-bold text-xl flex items-center gap-2"><Server size={24}/> 75+ APIs</div>
            <div className="text-slate-400 font-bold text-xl flex items-center gap-2"><Cpu size={24}/> AI Models</div>
          </div>
        </div>

        {/* Right Visuals - Floating Cards */}
        <div className="relative hidden lg:block h-[600px]">
          {/* Main Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[450px] bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-900/40 p-6 flex flex-col justify-between transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 z-20 border-8 border-slate-800">
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <Database className="text-orange-500" />
                </div>
                <div className="text-slate-500 font-mono text-xs">SYS_ONLINE</div>
              </div>
              <h3 className="text-white text-3xl font-bold mb-2">Paycio<span className="text-orange-500">.</span></h3>
              <p className="text-slate-400 text-sm">Crypto-fiat payment gateway handling millions in volume.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Transactions/sec</span>
                <span className="text-green-400">High</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-full w-[85%]"></div>
              </div>
            </div>
          </div>

          {/* Secondary Floating Card */}
          <div className="absolute top-1/4 right-10 w-64 h-40 bg-white rounded-3xl shadow-xl shadow-orange-500/10 p-5 transform rotate-[12deg] z-10 animate-bounce delay-700 duration-[3000ms]">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Zap className="text-orange-500" size={20} />
              </div>
              <span className="text-green-500 font-bold text-xs bg-green-100 px-2 py-1 rounded-full">+1000x Speed</span>
            </div>
            <div className="text-slate-900 font-bold text-lg">OCR Pipeline</div>
            <div className="text-slate-500 text-xs">Optimized with PyMuPDF</div>
          </div>

          {/* Third Floating Card */}
          <div className="absolute bottom-20 left-0 w-64 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-5 transform -rotate-[5deg] z-30 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Code className="text-slate-900" size={20} />
              </div>
              <div>
                <div className="text-slate-900 font-bold">Full Stack</div>
                <div className="text-slate-500 text-xs">MERN & Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SKILLS MARQUEE
 * Infinite scrolling strip mimicking a stock/crypto ticker.
 */
const SkillsMarquee = () => {
  const skills = [
    "Python", "Node.js", "React.js", "TypeScript", "Django", "FastAPI", "PostgreSQL", 
    "MongoDB", "Redis", "Docker", "AWS", "Socket.IO", "Next.js", "Tailwind", "MERN", "SQL", "JWT"
  ];

  return (
    <div className="w-full bg-slate-900 py-10 overflow-hidden transform -skew-y-2 origin-left border-y-4 border-orange-500">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-2 text-2xl font-bold text-white/80 hover:text-orange-400 transition-colors cursor-default">
            <span className="text-orange-500">•</span> {skill}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

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

/**
 * EXPERIENCE TIMELINE
 * Chronological vertical timeline with alternating left/right layout.
 */
const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Coinearth Technologies",
      position: "SDE (Backend)",
      period: "Jun 2025 – Present",
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
      position: "Software Developer L1",
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

/**
 * PROJECTS GRID
 * styled like "Our Features" sections on SaaS sites.
 */
const Projects = () => {
  const projects = [
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
      title: "Backend Expense Tracker",
      category: "Express.js, SQL, AWS",
      desc: "Scalable expense management API with JWT authentication, encrypted data handling, and automated email reports.",
      icon: <Database className="text-white" size={24} />,
      color: "from-amber-400 to-orange-500",
      link: EXPENSE_TRACKER_URL
    },
    {
      title: "Multi-Column Todo App",
      category: "Next.js, TypeScript, MongoDB",
      desc: "Dynamic Todo app with drag-and-drop functionality, full CRUD operations, and responsive Tailwind CSS styling.",
      icon: <CheckCircle2 className="text-white" size={24} />,
      color: "from-emerald-400 to-green-600",
      link: TODO_APP_URL
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

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <SkillsSection />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}