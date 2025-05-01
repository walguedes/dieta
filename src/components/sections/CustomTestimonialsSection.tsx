
import React from 'react';
import SectionContainer from '../SectionContainer';
import TestimonialCarousel from '../TestimonialCarousel';

const CustomTestimonialsSection: React.FC = () => {
  return (
    <SectionContainer id="depoimentos" className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos Reais</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Veja como nosso método tem transformado vidas. Resultados reais de pessoas que seguiram nossas orientações.
          </p>
        </div>
        
        {/* Novo componente de carrossel de depoimentos */}
        <TestimonialCarousel />
      </div>
    </SectionContainer>
  );
};

export default CustomTestimonialsSection;
