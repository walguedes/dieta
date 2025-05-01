
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <SectionContainer>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3 animate-[fade-in_0.5s_ease-out]">
          Quem aplicou, transformou
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto animate-[fade-in_0.7s_ease-out]">
          Histórias reais de pessoas que mudaram seus hábitos com nosso método
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <TestimonialCard quote="Tentei de tudo antes, mas este método finalmente me fez entender como a alimentação funciona. Perdi 8kg em 2 meses sem sofrer!" name="Marcos Silva" image="/placeholder.svg" result="-8kg em 2 meses" />
        <TestimonialCard quote="Achei que precisaria passar fome para emagrecer. Com este guia, descobri que posso comer bem e ainda assim perder peso de forma saudável." name="Carla Oliveira" image="/placeholder.svg" result="-12kg em 3 meses" />
        <TestimonialCard quote="O melhor investimento que já fiz. Método direto e sem enrolação. As planilhas de acompanhamento fazem toda diferença." name="Roberto Almeida" image="/placeholder.svg" result="-15kg em 4 meses" />
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
