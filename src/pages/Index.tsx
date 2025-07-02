import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AIShowcaseSection from "@/components/AIShowcaseSection";
import QuizCTA from "@/components/QuizCTA";
import LegalAudioCTA from "@/components/LegalAudioCTA";
import DashboardCTA from "@/components/DashboardCTA";
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
        <PartnersSection />
        <TestimonialsSection />
        <AIShowcaseSection />
        <QuizCTA />
        <LegalAudioCTA />
        <DashboardCTA />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
