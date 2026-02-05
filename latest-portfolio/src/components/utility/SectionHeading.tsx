const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16 max-w-2xl mx-auto px-4">
    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-slate-500 text-lg md:text-xl leading-relaxed">{subtitle}</p>}
  </div>
);

export { SectionHeading };