import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import X3Agent from "@/components/X3Agent";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Differentials from "@/components/Differentials";
import CTA from "@/components/CTA";

const Index = () => {
  return (
      <main className="bg-background">
        <Hero />
        <Overview />
        <Services />
        <X3Agent />
        <Clients />
        <Differentials />
        <CTA />
      </main>
  );
};

export default Index;
