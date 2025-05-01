
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import TransformationCard from '@/components/TransformationCard';

const TransformationsSection = () => {
  return (
    <SectionContainer>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3 animate-[fade-in_0.5s_ease-out]">
          Transformações Reais
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto animate-[fade-in_0.7s_ease-out]">
          Pessoas que aplicaram este método e conquistaram resultados impressionantes
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <TransformationCard name="Carlos Silva" timeframe="3 meses" weightLoss="-18kg" beforeImage="/placeholder.svg" afterImage="/placeholder.svg" testimonial="Sempre tentei dietas restritivas que não conseguia manter. Com este método, consegui emagrecer sem sofrer e mantive os resultados!" />
        
        <TransformationCard name="Mariana Oliveira" timeframe="2 meses" weightLoss="-12kg" beforeImage="/placeholder.svg" afterImage="/placeholder.svg" testimonial="Perdi peso e ganhei energia! O método é super fácil de seguir e se encaixou perfeitamente na minha rotina." />
      </div>
    </SectionContainer>
  );
};

export default TransformationsSection;
