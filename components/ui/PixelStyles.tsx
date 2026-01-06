import React, { ReactNode, ButtonHTMLAttributes } from 'react';

// --- Pixel Card ---
interface PixelCardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const PixelCard: React.FC<PixelCardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-white border-4 border-pixel-dark shadow-pixel relative ${className}`}>
      {/* Corner decorations for extra retro feel */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-pixel-dark -ml-1 -mt-1" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-pixel-dark -mr-1 -mt-1" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-pixel-dark -ml-1 -mb-1" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-pixel-dark -mr-1 -mb-1" />
      
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};

// --- Pixel Button ---
interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const PixelButton: React.FC<PixelButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyle = "font-press border-4 border-pixel-dark transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus:outline-none";
  
  const variants = {
    primary: "bg-pixel-yellow text-pixel-dark hover:bg-yellow-300 shadow-pixel",
    secondary: "bg-white text-pixel-dark hover:bg-gray-100 shadow-pixel",
    danger: "bg-red-500 text-white hover:bg-red-400 shadow-pixel"
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Section Heading ---
export const SectionHeading: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="font-press text-2xl md:text-4xl uppercase mb-4 tracking-widest relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-pixel-dark"></span>
    </h2>
    {subtitle && (
      <p className="font-vt text-xl md:text-2xl mt-4 opacity-90 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);
