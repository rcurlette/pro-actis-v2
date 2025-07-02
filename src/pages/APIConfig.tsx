import Header from "@/components/Header";
import Footer from "@/components/Footer";
import APIConfigAdmin from "@/components/APIConfigAdmin";

const APIConfig = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <APIConfigAdmin />
      </main>
      <Footer />
    </div>
  );
};

export default APIConfig;
