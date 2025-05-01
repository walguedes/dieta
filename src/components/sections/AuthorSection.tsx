
import React from 'react';
import SectionContainer from '@/components/SectionContainer';

const AuthorSection = () => {
  return (
    <SectionContainer background="light">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        <div className="md:w-1/3">
          <div className="rounded-full overflow-hidden border-4 border-brand-green w-48 h-48 mx-auto">
            <img src="/placeholder.svg" alt="Autor do eBook" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-4 animate-[fade-in_0.5s_ease-out]">
            Sobre o Autor
          </h2>
          <p className="text-gray-700 mb-4">Olá! Meu nome é Antony Pissinatti.
Não sou nutricionista, sou alguém que testou, errou, adaptou — e encontrou um caminho simples, direto e eficaz para transformar o corpo sem complicação.</p>
          <p className="text-gray-700 mb-4">Fui uma única vez ao nutricionista e percebi que aquele modelo engessado não funcionava pra mim. Então passei anos estudando e testando estratégias inspiradas em atletas, até desenvolver uma abordagem prática que cabia na minha rotina — e que finalmente me deu resultado.</p>
          <p className="text-gray-700">O melhor? Não funcionou só comigo. Pessoas próximas começaram a aplicar também e tiveram transformações reais. Foi aí que nasceu este eBook.
Pra simplificar o que te disseram que era difícil.</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AuthorSection;
