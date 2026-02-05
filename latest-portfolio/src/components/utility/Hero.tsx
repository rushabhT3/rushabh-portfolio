import { Zap, ArrowRight, Database, Github, Code, Server, Cpu } from "lucide-react";
import { Button } from "./Button";
import { GITHUB_URL } from "@/lib/constants";

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

export { Hero };