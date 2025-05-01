
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import BMICalculator from '@/components/BMICalculator';

const CalculatorSection = () => {
  return (
    <SectionContainer background="light">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3 animate-[fade-in_0.5s_ease-out]">
          Calcule seu potencial de transformação
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto animate-[fade-in_0.7s_ease-out]">
          Descubra onde você está e para onde pode ir com nosso método
        </p>
      </div>
      <BMICalculator />
    </SectionContainer>
  );
};

export default CalculatorSection;
