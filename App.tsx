
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import USPSection from './components/USPSection';
import BenefitsSection from './components/BenefitsSection';
import AuthenticitySection from './components/AuthenticitySection';
import PricingSection from './components/PricingSection';
import UsageSection from './components/UsageSection';
import TestimonialsSection from './components/TestimonialsSection';
import ShippingSection from './components/ShippingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-amber-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <USPSection />
        <BenefitsSection />
        <AuthenticitySection />
        <PricingSection />
        <UsageSection />
        <TestimonialsSection />
        <ShippingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
