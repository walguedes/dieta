
import React from 'react';
import CTAButton from '@/components/CTAButton';
import SectionContainer from '@/components/SectionContainer';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <SectionContainer className="pt-10 lg:pt-20 pb-16 md:min-h-screen flex items-center" background="gradient">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue leading-tight mb-4 animate-[fade-in_0.5s_ease-out]">
            Transforme seu corpo com um método simples, direto e eficaz.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-[fade-in_0.7s_ease-out]">
            Aprenda a calcular sua alimentação com base no seu peso e queime gordura sem perder massa muscular.
          </p>
          <CTAButton size="large" animated onClick={onCTAClick} className="animate-[fade-in_0.9s_ease-out]">
            Quero o eBook Agora
          </CTAButton>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-[400px] md:max-w-[450px] transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-float">
            <img 
              alt="eBook Dieta Prática e Eficaz" 
              className="w-full h-auto transform rotate-3" 
              src="/lovable-uploads/5d044985-5010-45bc-b3e0-3ddda1d46c25.png" 
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
