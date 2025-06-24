import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import ProductFeatures from "@/components/ProductFeatures";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-harvey-dark">
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <ProductFeatures />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
