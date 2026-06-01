import { Zap, ArrowRight, Database, Github, Code, Server, Cpu } from "lucide-react";
import { Button } from "./Button";
import { GITHUB_URL } from "@/lib/constants";

/**
 * HERO SECTION
 * Jeton-inspired layout: bold typography, solid orange accents,
 * and three animated floating mockup cards on the right.
 */
const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-slate-50">
      {/* Background blobs — same as original */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ── Left Content ── */}
        <div className="space-y-8 text-center lg:text-left">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F73B20]/10 text-[#F73B20] font-bold text-xs tracking-wider uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F73B20] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F73B20]" />
            </span>
            Now Available for Hire
          </div>

          {/* Intro greeting — personal but on-brand */}
          <p className="text-lg md:text-xl font-semibold text-slate-500 tracking-tight">
            Hi! I&apos;m{" "}
            <span className="relative inline-block text-slate-900 font-extrabold">
              Rushabh Trivedi
              {/* Brand-orange underline drawn as a decorative bottom border */}
              <span
                aria-hidden
                className="absolute left-0 -bottom-0.5 w-full h-[3px] rounded-full bg-[#F73B20] opacity-80"
              />
            </span>
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            The <span className="text-[#F73B20]">All-in-One</span> <br />
            Fullstack Solution.
          </h1>

          <p className="text-lg text-slate-500 md:max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            I build high-throughput fintech APIs and AI-driven platforms.
            Robust, scalable, and secure Python &amp; Node.js architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight size={18} />
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open(GITHUB_URL, '_blank')}
            >
              <Github size={18} /> GitHub Profile
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="text-slate-400 font-bold text-xl flex items-center gap-2">
              <Server size={24} /> 75+ APIs
            </div>
            <div className="text-slate-400 font-bold text-xl flex items-center gap-2">
              <Cpu size={24} /> AI Models
            </div>
          </div>
        </div>

        {/* ── Right — Floating Cards ── */}
        <div className="relative hidden lg:block h-[600px]">

          {/* ① Main dark card — Paycio (rotated, hover straightens) */}
          <div className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-80 h-[450px]
            bg-slate-900 rounded-[2.5rem]
            shadow-2xl shadow-slate-900/40
            p-6 flex flex-col justify-between
            transform rotate-[-6deg] hover:rotate-0
            transition-all duration-700
            z-20
            border-8 border-slate-800
          ">
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <Database className="text-[#F73B20]" size={22} />
                </div>
                <div className="text-slate-500 font-mono text-xs tracking-widest">SYS_ONLINE</div>
              </div>
              <h3 className="text-white text-3xl font-bold mb-2">
                Paycio<span className="text-[#F73B20]">.</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Crypto-fiat payment gateway handling millions in volume.
              </p>
            </div>

            {/* Progress bar */}
            <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Transactions/sec</span>
                <span className="text-green-400">High</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#F73B20] to-amber-500 h-full w-[85%] animate-pulse" />
              </div>
            </div>
          </div>

          {/* ② OCR speed card — bounces continuously */}
          <div className="
            absolute top-1/4 right-10
            w-64 h-40
            bg-white rounded-3xl
            shadow-xl shadow-orange-500/10
            p-5
            transform rotate-[12deg]
            z-10
            animate-bounce
            [animation-duration:3000ms]
            [animation-delay:700ms]
          ">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Zap className="text-[#F73B20]" size={20} />
              </div>
              <span className="text-green-500 font-bold text-xs bg-green-100 px-2 py-1 rounded-full">
                +1000x Speed
              </span>
            </div>
            <div className="text-slate-900 font-bold text-lg">OCR Pipeline</div>
            <div className="text-slate-500 text-xs">Optimized with PyMuPDF</div>
          </div>

          {/* ③ Full-stack badge — pulses */}
          <div className="
            absolute bottom-20 left-0
            w-64
            bg-white rounded-3xl
            shadow-xl shadow-slate-200/50
            p-5
            transform -rotate-[5deg]
            z-30
            animate-pulse
          ">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Code className="text-slate-900" size={20} />
              </div>
              <div>
                <div className="text-slate-900 font-bold">Full Stack</div>
                <div className="text-slate-500 text-xs">MERN &amp; Python</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Hero };