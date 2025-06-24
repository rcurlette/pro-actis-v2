import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import CookieConsent from "@/components/CookieConsent";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Privacy;
