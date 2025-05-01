
import React from "react";
import { toast } from "sonner";
import HeroSection from "../components/sections/HeroSection";
import IdentificationSection from "../components/sections/IdentificationSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import TransformationsSection from "../components/sections/TransformationsSection";
import CustomTestimonialsSection from "../components/sections/CustomTestimonialsSection";
import CalculatorSection from "../components/sections/CalculatorSection";
import OfferSection from "../components/sections/OfferSection";
import FAQSection from "../components/sections/FAQSection";
import FinalCTASection from "../components/sections/FinalCTASection";
import AuthorSection from "../components/sections/AuthorSection";
import Footer from "../components/sections/Footer";
import FloatingCTA from "../components/FloatingCTA";

const CustomIndex: React.FC = () => {
  const handleCTAClick = () => {
    toast.success("Esta é uma demonstração de landing page. O botão de compra estaria funcionando aqui.");
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onCTAClick={handleCTAClick} />
      <IdentificationSection />
      <BenefitsSection />
      <TransformationsSection />
      <CustomTestimonialsSection /> {/* Usamos nossa seção personalizada aqui */}
      <CalculatorSection />
      <OfferSection onCTAClick={handleCTAClick} />
      <FAQSection />
      <FinalCTASection onCTAClick={handleCTAClick} />
      <AuthorSection />
      <Footer />
      <FloatingCTA onClick={handleCTAClick} />
    </div>
  );
};

export default CustomIndex;
