const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";
  const variants = {
    primary: "bg-[#F73B20] text-white hover:bg-[#e03018] shadow-md shadow-[#F73B20]/10 hover:shadow-lg hover:shadow-[#F73B20]/20",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-900 hover:bg-slate-50 shadow-sm",
    dark: "bg-slate-950 text-white hover:bg-black"
  };
  
  // @ts-ignore
  return <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

export { Button };