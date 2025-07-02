import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalAudioHub from "@/components/LegalAudioHub";

const LegalAudio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-20">
        <LegalAudioHub />
      </main>
      <Footer />
    </div>
  );
};

export default LegalAudio;
