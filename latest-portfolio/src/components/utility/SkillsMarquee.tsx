/**
 * SKILLS MARQUEE
 * Truly infinite scrolling with zero resets
 */
const SkillsMarquee = () => {
  const skills = [
    "Python", "JavaScript", "Node.js", "React.js", "Next.js", "TypeScript", 
    "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker", 
    "AWS", "Socket.IO", "MERN"
  ];

  return (
    <div className="w-full bg-slate-900 py-10 overflow-hidden transform -skew-y-2 origin-left border-y-4 border-orange-500">
      <div className="flex gap-16">
        {/* First set */}
        <div className="flex gap-16 animate-scroll shrink-0">
          {skills.map((skill, i) => (
            <div 
              key={`a-${i}`} 
              className="flex items-center gap-2 text-2xl font-bold text-white/80 hover:text-orange-400 transition-colors cursor-default shrink-0"
            >
              <span className="text-orange-500">•</span> {skill}
            </div>
          ))}
        </div>
        {/* Duplicate set */}
        <div className="flex gap-16 animate-scroll shrink-0">
          {skills.map((skill, i) => (
            <div 
              key={`b-${i}`} 
              className="flex items-center gap-2 text-2xl font-bold text-white/80 hover:text-orange-400 transition-colors cursor-default shrink-0"
            >
              <span className="text-orange-500">•</span> {skill}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export { SkillsMarquee };