
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
        <TransformationCard 
          name="Ricardo" 
          timeframe="3 meses" 
          beforeImage="public/lovable-uploads/345f6c42-e8fc-446e-9a55-eed2e40b86ec.png" 
          afterImage="public/lovable-uploads/56468bad-a9ba-4757-9a28-45b1c94037c1.png" 
          testimonial="Minha alimentação sempre foi desregrada — comia o que dava, na hora que dava, e quase sempre alimentos industrializados. Achava que comer bem era complicado. Com o Antony, descobri que é possível ter uma alimentação prática, saudável e adaptada à rotina. Aprendi a fazer boas escolhas sem radicalismos e a montar refeições equilibradas de forma simples. Hoje me alimento melhor, com mais consciência e sem complicação. Pequenas mudanças transformaram minha energia, meu corpo e minha relação com a comida." />
        
        <TransformationCard 
          name="Genaine Andrade" 
          timeframe="2 meses" 
          beforeImage="public/lovable-uploads/03f8e791-5309-4652-8685-f8af1b402fd0.png" 
          afterImage="public/lovable-uploads/d43557c7-89d6-459b-83ec-463810fd7b24.png" 
          testimonial="Durante muito tempo, tive hábitos alimentares desregulados e quase nenhuma disposição para atividades físicas. Comia o que dava, quando dava, e geralmente alimentos industrializados. Isso mudou quando conheci o Antony. Algo nele me despertou curiosidade, principalmente por ver como ele alcançou seus objetivos físicos e, mais importante, por que decidiu mudar. Com ele, aprendi que treinar e me alimentar bem vai muito além do físico. É sobre superar limites, acreditar no meu potencial e buscar qualidade de vida. Entendi que musculação não é só levantar peso, mas executar cada movimento com propósito. A alimentação, que antes era um problema, virou aliada na minha transformação. Sou grata por tudo que aprendi com o Antony. Hoje tenho uma nova visão sobre cuidar do corpo e da mente, e levo isso como um estilo de vida equilibrado." />
      </div>
    </SectionContainer>
  );
};

export default TransformationsSection;
