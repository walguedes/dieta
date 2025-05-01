
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import CTAButton from '@/components/CTAButton';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingCTAProps {
  ctaText?: string;
  onClick?: () => void;
}

const FloatingCTA = ({ 
  ctaText = "Quero Começar Agora", 
  onClick 
}: FloatingCTAProps) => {
  const [visible, setVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      const shouldShowCTA = window.scrollY > 300;
      // Show scroll to top after scrolling down 1000px
      const shouldShowScrollTop = window.scrollY > 1000;
      
      setVisible(shouldShowCTA);
      setShowScrollTop(shouldShowScrollTop);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  if (!visible) return null;
  
  return (
    <div className={cn(
      "fixed z-50 transition-all duration-300 flex gap-3",
      isMobile ? "bottom-4 right-4 left-4" : "bottom-8 right-8",
      visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
    )}>
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="h-12 w-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors animate-fade-in"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5 text-brand-blue" />
        </button>
      )}
      <CTAButton 
        onClick={onClick} 
        className={cn(
          "shadow-lg animate-fade-in",
          isMobile ? "w-full" : ""
        )}
      >
        {ctaText}
      </CTAButton>
    </div>
  );
};

export default FloatingCTA;
