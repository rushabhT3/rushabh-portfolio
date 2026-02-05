'use client';

import { Hero } from '@/components/utility/Hero';
import { Projects } from '@/components/utility/Projects';
import { Contact } from '@/components/utility/Contact';
import { Footer } from '@/components/utility/Footer';
import { Experience } from '@/components/utility/Experience';
import { Navbar } from '@/components/utility/Navbar';
import { SkillsSection } from '@/components/utility/SkillsSection';
import { SkillsMarquee } from '@/components/utility/SkillsMarquee';

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