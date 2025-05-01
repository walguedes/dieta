
import React from 'react';
import { toast } from 'sonner';
import FloatingCTA from '@/components/FloatingCTA';
import HeroSection from '@/components/sections/HeroSection';
import IdentificationSection from '@/components/sections/IdentificationSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TransformationsSection from '@/components/sections/TransformationsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AuthorSection from '@/components/sections/AuthorSection';
import OfferSection from '@/components/sections/OfferSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const handleCTAClick = () => {
    toast.success("Esta é uma demonstração de landing page. O botão de compra estaria funcionando aqui.");
  };
  
  return (
    <div className="font-poppins relative">
      {/* Hero Section */}
      <HeroSection onCTAClick={handleCTAClick} />

      {/* Identification Section */}
      <IdentificationSection />

      {/* Calculator Section */}
      <CalculatorSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Before & After Transformations Section */}
      <TransformationsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Author Section */}
      <AuthorSection />

      {/* Offer Section */}
      <OfferSection onCTAClick={handleCTAClick} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection onCTAClick={handleCTAClick} />

      {/* Footer */}
      <Footer />
      
      {/* Floating CTA Button */}
      <FloatingCTA onClick={handleCTAClick} />
    </div>
  );
};
export default Index;
