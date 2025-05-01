
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import BenefitItem from '@/components/BenefitItem';

const BenefitsSection = () => {
  return (
    <SectionContainer>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3 animate-[fade-in_0.5s_ease-out]">
          O que você vai conseguir com este método
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto animate-[fade-in_0.7s_ease-out]">
          Resultados comprovados por diversas pessoas que já aplicaram este método em suas vidas
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <BenefitItem icon="🔥" title="Acelere seu metabolismo" description="Aprenda como otimizar seu metabolismo para queimar gordura mesmo enquanto descansa." />
        <BenefitItem icon="🥗" title="Cardápio flexível" description="Adapte o plano aos alimentos que você gosta e sua rotina, sem sofrimento ou restrições extremas." />
        <BenefitItem icon="💪" title="Preserve massa muscular" description="Emagreça de forma inteligente mantendo seus músculos e evitando o efeito sanfona." />
        <BenefitItem icon="📊" title="Resultados mensuráveis" description="Acompanhe sua evolução com métricas simples e veja os resultados semana após semana." />
        <BenefitItem icon="⏱️" title="Economia de tempo" description="Chega de perder horas pesando alimentos ou calculando valores nutricionais." />
        <BenefitItem icon="🧠" title="Mentalidade transformada" description="Desenvolva uma relação saudável com a comida e elimine a ansiedade alimentar." />
      </div>
    </SectionContainer>
  );
};

export default BenefitsSection;
