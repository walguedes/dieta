import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import CTAButton from '@/components/CTAButton';
interface OfferSectionProps {
  onCTAClick: () => void;
}
const OfferSection = ({
  onCTAClick
}: OfferSectionProps) => {
  return <SectionContainer>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3 animate-[fade-in_0.5s_ease-out]">
              O que você vai receber
            </h2>
            <p className="text-gray-700 animate-[fade-in_0.7s_ease-out]">
              Tudo o que você precisa para transformar seu corpo e sua saúde
            </p>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="bg-[#103252]/10 p-6 rounded-lg px-[24px] max-w-md mx-auto hover:bg-[#103252]/15 transition-all duration-300">
              <h3 className="font-semibold text-lg text-brand-blue mb-3">eBook Principal</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#103252] mr-2">✓</span>
                  <span>Manual completo em PDF com linguagem clara</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#103252] mr-2">✓</span>
                  <span>Fórmula baseada no seu peso — sem contar calorias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#103252] mr-2">✓</span>
                  <span>Estratégia de alimentação, treino e mentalidade para qualquer rotina</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <div className="mb-4">
              <span className="text-gray-500 line-through text-lg">De R$ 49,90</span>
              <p className="text-3xl md:text-4xl font-bold text-brand-blue animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">Por apenas R$ 19,90</p>
              <p className="text-sm text-gray-600 mt-1">Pagamento único e seguro</p>
            </div>
            
            <CTAButton size="large" animated onClick={onCTAClick} className="w-full max-w-md mx-auto">
              Quero Começar Agora
            </CTAButton>
            
            <p className="mt-4 text-sm text-gray-600">
              Acesso imediato após a confirmação do pagamento
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/placeholder.svg" alt="Forma de pagamento" className="h-8" />
            <img src="/placeholder.svg" alt="Forma de pagamento" className="h-8" />
            <img src="/placeholder.svg" alt="Forma de pagamento" className="h-8" />
            <img src="/placeholder.svg" alt="Forma de pagamento" className="h-8" />
          </div>
        </div>
      </div>
    </SectionContainer>;
};
export default OfferSection;