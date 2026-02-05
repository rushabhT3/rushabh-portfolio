"use client";

import { useState, useEffect } from "react";
import { 
  Download, 
  Menu,
  X,
} from 'lucide-react';
import { RESUME_URL } from "@/lib/constants";
import { Button } from "./Button";

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

export { Navbar };