import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AIShowcaseSection from "@/components/AIShowcaseSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <ProcessSection />
        <TestimonialsSection />
        <AIShowcaseSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
