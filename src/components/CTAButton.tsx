
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: 'default' | 'large';
  animated?: boolean;
}

const CTAButton = ({ 
  children, 
  className,
  onClick,
  size = 'default',
  animated = false
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        'bg-brand-green text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]',
        size === 'default' ? 'px-6 py-3 text-lg' : 'px-8 py-4 text-xl',
        animated && 'animate-pulse-slow',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CTAButton;
