import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import CTAButton from '@/components/CTAButton';
import { useIsMobile } from '@/hooks/use-mobile';

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <SectionContainer className="pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-6 animate-[fade-in_0.5s_ease-out]">
          Você já tem o plano. Só falta decidir começar.
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-[fade-in_0.7s_ease-out]">
          Imagine como será daqui a 90 dias quando você olhar no espelho e ver uma versão mais saudável e confiante de si mesmo.
        </p>
        
        {/* For mobile, show the mockup before the button */}
        {isMobile && (
          <div className="mb-8 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-float">
            <img 
              alt="eBook Dieta Prática e Eficaz" 
              className="w-full max-w-[250px] h-auto mx-auto" 
              src="/lovable-uploads/5d044985-5010-45bc-b3e0-3ddda1d46c25.png" 
            />
          </div>
        )}
        
        <CTAButton size="large" animated onClick={onCTAClick}>
          Quero Começar Agora
        </CTAButton>
        <p className="mt-4 text-sm text-gray-600">
          Acesso imediato ao eBook e todos os bônus
        </p>
        
        {/* For desktop, keep the existing layout */}
        {!isMobile && (
          <div className="mt-12 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-float">
            <img 
              alt="eBook Dieta Prática e Eficaz" 
              className="w-full max-w-[250px] h-auto mx-auto" 
              src="/lovable-uploads/5d044985-5010-45bc-b3e0-3ddda1d46c25.png" 
            />
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default FinalCTASection;
