"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  Download,
  Home,
  Briefcase,
  FolderCode,
  Sparkles,
  Mail,
} from 'lucide-react';
import { RESUME_URL } from "@/lib/constants";

/**
 * NAVBAR — Floating bottom capsule only (Jeton style).
 * Active section is detected by comparing scroll position to each section's
 * offsetTop — far more reliable than IntersectionObserver for tall sections.
 */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home",       label: "Home",       icon: <Home size={14} /> },
    { id: "skills",     label: "Skills",     icon: <Sparkles size={14} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={14} /> },
    { id: "projects",   label: "Projects",   icon: <FolderCode size={14} /> },
    { id: "contact",    label: "Contact",    icon: <Mail size={14} /> },
  ];

  // Scroll-position-based active tracker — checks which section occupies the
  // middle of the viewport on every scroll event.
  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportMid = scrollY + window.innerHeight * 0.45;

    // Walk sections in reverse so the LAST one that starts before the midpoint wins
    const sectionIds = navItems.map((n) => n.id);
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= viewportMid) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateActiveSection(); // set on mount
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    if (RESUME_URL !== "#") window.open(RESUME_URL, "_blank");
  };

  return (
    /* Floating Bottom Capsule — only nav element */
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-slate-950/90 backdrop-blur-lg border border-white/10 rounded-full px-3 py-2 flex items-center gap-1 shadow-2xl shadow-black/50">
        {/* Brand logo mark */}
        <div
          onClick={() => scrollToSection("home")}
          className="w-7 h-7 rounded-full bg-[#F73B20] text-white flex items-center justify-center font-black text-xs cursor-pointer hover:scale-105 active:scale-95 transition-transform mr-1 select-none"
        >
          R
        </div>

        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none active:scale-95 ${
                isActive
                  ? "bg-[#F73B20] text-white shadow-md shadow-[#F73B20]/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-white/10 mx-1 hidden sm:block" />

        {/* Download CV */}
        <button
          onClick={handleDownloadCV}
          className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer select-none active:scale-95"
          title="Download CV"
        >
          <Download size={13} />
          <span>CV</span>
        </button>
      </div>
    </div>
  );
};

export { Navbar };