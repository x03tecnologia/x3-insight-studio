import Header from "@/components/Header";
import Hero from "@/components/Hero";
import X3Agent from "@/components/X3Agent";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Differentials from "@/components/Differentials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <X3Agent />
        <Services />
        <Clients />
        <Differentials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
