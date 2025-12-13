import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 font-medium uppercase tracking-wider transition-all duration-300 text-sm rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40',
    secondary:
      'border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-primary/20 backdrop-blur-sm',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 
      'hover:bg-accent hover:text-accent-foreground',
  };

  const variantStyles = variants[variant] || variants.primary;
  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
