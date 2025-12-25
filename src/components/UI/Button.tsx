import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-gradient-to-r from-santa-red to-soft-red text-white hover:scale-105 active:scale-95',
    secondary: 'bg-white/80 text-gray-800 border border-gray-200 hover:bg-white',
    ghost: 'bg-transparent text-santa-red hover:bg-santa-red/10',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};