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

export { SkillsMarquee };