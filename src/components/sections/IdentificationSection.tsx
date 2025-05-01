
import React from 'react';
import SectionContainer from '@/components/SectionContainer';

const IdentificationSection = () => {
  return (
    <SectionContainer>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-10 animate-[fade-in_0.5s_ease-out]">
          Esse eBook é pra você se...
        </h2>
        <div className="grid gap-6">
          <div className="bg-[#103252]/10 p-6 rounded-lg border-l-4 border-[#103252] text-left hover:bg-[#103252]/15 transition-all duration-300 animate-[fade-in_0.6s_ease-out]">
            <p className="font-medium">✓ Já tentou várias dietas diferentes e nenhuma funcionou a longo prazo</p>
          </div>
          <div className="bg-[#103252]/10 p-6 rounded-lg border-l-4 border-[#103252] text-left hover:bg-[#103252]/15 transition-all duration-300 animate-[fade-in_0.7s_ease-out]">
            <p className="font-medium">✓ Está cansado de contar calorias e se privar de alimentos que gosta</p>
          </div>
          <div className="bg-[#103252]/10 p-6 rounded-lg border-l-4 border-[#103252] text-left hover:bg-[#103252]/15 transition-all duration-300 animate-[fade-in_0.8s_ease-out]">
            <p className="font-medium">✓ Quer uma solução prática e que se adapte à sua rotina</p>
          </div>
          <div className="bg-[#103252]/10 p-6 rounded-lg border-l-4 border-[#103252] text-left hover:bg-[#103252]/15 transition-all duration-300 animate-[fade-in_0.9s_ease-out]">
            <p className="font-medium">✓ Deseja emagrecer sem perder massa muscular e energia</p>
          </div>
          <div className="bg-[#103252]/10 p-6 rounded-lg border-l-4 border-[#103252] text-left hover:bg-[#103252]/15 transition-all duration-300 animate-[fade-in_1s_ease-out]">
            <p className="font-medium">✓ Precisa de um método simples e direto ao ponto para resultados reais</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default IdentificationSection;
