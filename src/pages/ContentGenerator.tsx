import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentIdeaGenerator from "@/components/ContentIdeaGenerator";

const ContentGenerator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ContentIdeaGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default ContentGenerator;
