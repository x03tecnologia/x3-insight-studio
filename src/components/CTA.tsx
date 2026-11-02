import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section id="contato" className="bg-background px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
    <div className="container relative mx-auto overflow-hidden rounded-[2rem] bg-hero px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/60 blur-3xl" />
      <div className="relative mx-auto max-w-2xl">
        <p className="section-label">Vamos conversar</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">Qual é o próximo desafio da sua empresa?</h2>
        <p className="mt-5 text-lg text-primary-foreground/70">Conte com a X3 para transformar estratégia em execução.</p>
        <Button asChild size="lg" className="mt-9 h-12 bg-accent px-8 text-accent-foreground hover:bg-accent/90">
          <a href="https://web.whatsapp.com/send?phone=5521965616062&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20X3%20Tecnologia." target="_blank" rel="noopener noreferrer">Fale com nossos consultores <ArrowRight /></a>
        </Button>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-primary-foreground/65 sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> gestao@x3tecnologia.com</span>
          <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-accent" /> +55 21 96561-6062</span>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
