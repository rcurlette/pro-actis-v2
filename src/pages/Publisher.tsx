import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentPublisher from "@/components/ContentPublisher";

const Publisher = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ContentPublisher />
      </main>
      <Footer />
    </div>
  );
};

export default Publisher;
