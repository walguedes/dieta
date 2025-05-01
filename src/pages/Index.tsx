
import React from 'react';
import { toast } from 'sonner';
import CTAButton from '@/components/CTAButton';
import SectionContainer from '@/components/SectionContainer';
import TestimonialCard from '@/components/TestimonialCard';
import FAQItem from '@/components/FAQItem';
import BenefitItem from '@/components/BenefitItem';
import TransformationCard from '@/components/TransformationCard';
const Index = () => {
  const handleCTAClick = () => {
    toast.success("Esta é uma demonstração de landing page. O botão de compra estaria funcionando aqui.");
  };
  return <div className="font-poppins">
      {/* Hero Section */}
      <SectionContainer className="pt-10 lg:pt-20 pb-16 md:min-h-screen flex items-center" background="gradient">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue leading-tight mb-4">
              Transforme seu corpo com um método simples, direto e eficaz.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Aprenda a calcular sua alimentação com base no seu peso e queime gordura sem perder massa muscular.
            </p>
            <CTAButton size="large" animated onClick={handleCTAClick}>
              Quero o eBook Agora
            </CTAButton>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[calc(64rem*1.3)] md:w-[calc(80rem*1.3)] transform hover:-translate-y-2 transition-all duration-300">
              {/* Floating effect shadow */}
              <div className="absolute inset-0 rounded-lg blur-md bg-gradient-to-r from-brand-green/20 to-blue-500/20 translate-y-4"></div>
              {/* Main image */}
              <img 
                alt="eBook Dieta Prática e Eficaz" 
                className="relative w-full h-auto transform rotate-3 shadow-xl rounded-lg" 
                src="/lovable-uploads/5d044985-5010-45bc-b3e0-3ddda1d46c25.png" 
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Identification Section */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-10">
            Esse eBook é pra você se...
          </h2>
          <div className="grid gap-6">
            <div className="bg-brand-green-light p-6 rounded-lg border-l-4 border-brand-green text-left">
              <p className="font-medium">✓ Já tentou várias dietas diferentes e nenhuma funcionou a longo prazo</p>
            </div>
            <div className="bg-brand-green-light p-6 rounded-lg border-l-4 border-brand-green text-left">
              <p className="font-medium">✓ Está cansado de contar calorias e se privar de alimentos que gosta</p>
            </div>
            <div className="bg-brand-green-light p-6 rounded-lg border-l-4 border-brand-green text-left">
              <p className="font-medium">✓ Quer uma solução prática e que se adapte à sua rotina</p>
            </div>
            <div className="bg-brand-green-light p-6 rounded-lg border-l-4 border-brand-green text-left">
              <p className="font-medium">✓ Deseja emagrecer sem perder massa muscular e energia</p>
            </div>
            <div className="bg-brand-green-light p-6 rounded-lg border-l-4 border-brand-green text-left">
              <p className="font-medium">✓ Precisa de um método simples e direto ao ponto para resultados reais</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer background="light">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3">
            O que você vai conseguir com este método
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">Resultados comprovados por diversas pessoas que já aplicaram este método em suas vidas</p>
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

      {/* Before & After Transformations Section */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3">
            Transformações Reais
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Pessoas que aplicaram este método e conquistaram resultados impressionantes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <TransformationCard name="Carlos Silva" timeframe="3 meses" weightLoss="-18kg" beforeImage="/placeholder.svg" afterImage="/placeholder.svg" testimonial="Sempre tentei dietas restritivas que não conseguia manter. Com este método, consegui emagrecer sem sofrer e mantive os resultados!" />
          
          <TransformationCard name="Mariana Oliveira" timeframe="2 meses" weightLoss="-12kg" beforeImage="/placeholder.svg" afterImage="/placeholder.svg" testimonial="Perdi peso e ganhei energia! O método é super fácil de seguir e se encaixou perfeitamente na minha rotina." />
        </div>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3">
            Quem aplicou, transformou
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Histórias reais de pessoas que mudaram seus hábitos com nosso método
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard quote="Tentei de tudo antes, mas este método finalmente me fez entender como a alimentação funciona. Perdi 8kg em 2 meses sem sofrer!" name="Marcos Silva" image="/placeholder.svg" result="-8kg em 2 meses" />
          <TestimonialCard quote="Achei que precisaria passar fome para emagrecer. Com este guia, descobri que posso comer bem e ainda assim perder peso de forma saudável." name="Carla Oliveira" image="/placeholder.svg" result="-12kg em 3 meses" />
          <TestimonialCard quote="O melhor investimento que já fiz. Método direto e sem enrolação. As planilhas de acompanhamento fazem toda diferença." name="Roberto Almeida" image="/placeholder.svg" result="-15kg em 4 meses" />
        </div>
      </SectionContainer>

      {/* Author Section */}
      <SectionContainer background="light">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden border-4 border-brand-green w-48 h-48 mx-auto">
              <img src="/placeholder.svg" alt="Autor do eBook" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-4">
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

      {/* Offer Section */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3">
                O que você vai receber
              </h2>
              <p className="text-gray-700">
                Tudo o que você precisa para transformar seu corpo e sua saúde
              </p>
            </div>
            
            <div className="flex justify-center mb-10">
              <div className="bg-brand-gray-light p-6 rounded-lg px-[24px] max-w-md mx-auto">
                <h3 className="font-semibold text-lg text-brand-blue mb-3">eBook Principal</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-green mr-2">✓</span>
                    <span>Manual completo em PDF com linguagem clara</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green mr-2">✓</span>
                    <span>Fórmula baseada no seu peso — sem contar calorias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green mr-2">✓</span>
                    <span>Estratégia de alimentação, treino e mentalidade para qualquer rotina</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="mb-4">
                <span className="text-gray-500 line-through text-lg">De R$ 197,00</span>
                <p className="text-3xl md:text-4xl font-bold text-brand-blue">
                  Por apenas R$ 97,00
                </p>
                <p className="text-sm text-gray-600 mt-1">Pagamento único e seguro</p>
              </div>
              
              <CTAButton size="large" animated onClick={handleCTAClick} className="w-full max-w-md mx-auto">
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
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer background="light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-700">
              Tire suas dúvidas sobre o método
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <FAQItem question="Preciso fazer academia para ter resultados?" answer="Não, o método é baseado primariamente na alimentação. No entanto, incluímos recomendações de atividades físicas simples que podem potencializar seus resultados, caso você queira incluí-las." />
            <FAQItem question="Este método funciona para mulheres?" answer="Sim! O método foi desenvolvido e testado para funcionar tanto para homens quanto para mulheres. Há orientações específicas para cada gênero, considerando as diferenças metabólicas." />
            <FAQItem question="Quanto tempo leva para ver resultados?" answer="A maioria das pessoas começa a notar mudanças em 2-3 semanas. Resultados mais significativos geralmente ocorrem dentro de 4-8 semanas seguindo o programa corretamente." />
            <FAQItem question="Vou precisar comprar alimentos caros ou especiais?" answer="Não. O plano foi desenvolvido para utilizar alimentos comuns e acessíveis. Você não precisará de nenhum ingrediente exótico ou suplemento caro." />
            <FAQItem question="O que acontece se o método não funcionar para mim?" answer="Oferecemos garantia de 30 dias. Se você seguir o programa e não estiver satisfeito com os resultados, devolveremos seu investimento integralmente." />
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer className="pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-6">
            Você já tem o plano. Só falta decidir começar.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Imagine como será daqui a 90 dias quando você olhar no espelho e ver uma versão mais saudável e confiante de si mesmo.
          </p>
          <CTAButton size="large" animated onClick={handleCTAClick}>
            Quero Começar Agora
          </CTAButton>
          <p className="mt-4 text-sm text-gray-600">
            Acesso imediato ao eBook e todos os bônus
          </p>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="bg-brand-blue py-8 text-white text-center">
        <div className="container px-4">
          <p className="mb-4">© {new Date().getFullYear()} Dieta Prática e Eficaz - Todos os direitos reservados</p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Contato</a>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
