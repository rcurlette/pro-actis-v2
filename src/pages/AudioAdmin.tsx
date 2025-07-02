import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioUploadAdmin from "@/components/AudioUploadAdmin";

const AudioAdmin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <AudioUploadAdmin />
      </main>
      <Footer />
    </div>
  );
};

export default AudioAdmin;
