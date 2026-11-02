import Hero from "@/components/Hero";
import PergunteAosDados from "@/components/PergunteAosDados";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Differentials from "@/components/Differentials";
import CTA from "@/components/CTA";

const Index = () => (
  <main className="bg-background">
    <Hero />
    <PergunteAosDados />
    <Services />
    <Differentials />
    <Clients />
    <CTA />
  </main>
);

export default Index;
