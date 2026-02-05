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

export { Button };