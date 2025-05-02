
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import FAQItem from '@/components/FAQItem';

const FAQSection = () => {
  return (
    <SectionContainer background="light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3 animate-[fade-in_0.5s_ease-out]">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-700 animate-[fade-in_0.7s_ease-out]">
            Tire suas dúvidas sobre o método
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <FAQItem question="Preciso fazer academia para ter resultados?" answer="Não, o método é baseado primariamente na alimentação. No entanto, incluímos recomendações de atividades físicas simples que podem potencializar seus resultados, caso você queira incluí-las." />
          <FAQItem question="Este método funciona para mulheres?" answer="Sim! O método foi desenvolvido e testado para funcionar tanto para homens quanto para mulheres. Há orientações específicas para cada gênero, considerando as diferenças metabólicas." />
          <FAQItem question="Quanto tempo leva para ver resultados?" answer="A maioria das pessoas começa a notar mudanças em 2-3 semanas. Resultados mais significativos geralmente ocorrem dentro de 4-8 semanas seguindo o programa corretamente." />
          <FAQItem question="Vou precisar comprar alimentos caros ou especiais?" answer="Não. O plano foi desenvolvido para utilizar alimentos comuns e acessíveis. Você não precisará de nenhum ingrediente exótico ou suplemento caro." />
          <FAQItem question="O que acontece se o método não funcionar para mim?" answer="Oferecemos garantia de 7 dias. Se você seguir o programa e não estiver satisfeito com os resultados, devolveremos seu investimento integralmente." />
        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQSection;
