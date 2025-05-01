
import React from "react";
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
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IdentificationSection />
      <BenefitsSection />
      <TransformationsSection />
      <CustomTestimonialsSection /> {/* Usamos nossa seção personalizada aqui */}
      <CalculatorSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <AuthorSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default CustomIndex;
