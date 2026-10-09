import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="bg-accent py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase text-accent-foreground/65">Vamos conversar</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-accent-foreground sm:text-5xl md:text-6xl">
              Qual é o próximo desafio que a sua empresa precisa resolver?
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-lg leading-relaxed text-accent-foreground/70">Conte com a X3 para desenhar o caminho, reunir as competências certas e transformar estratégia em execução.</p>
            <Button asChild size="lg" className="mt-7 h-12 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://web.whatsapp.com/send?phone=5521965616062&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20X3%20Tecnologia." target="_blank" rel="noopener noreferrer">Fale com nossos consultores <ArrowRight /></a>
            </Button>
            <div className="mt-8 space-y-3 border-t border-accent-foreground/20 pt-6 text-sm text-accent-foreground/70">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> gestao@x3tecnologia.com</p>
              <p className="flex items-center gap-3"><MessageCircle className="h-4 w-4" /> +55 21 96561-6062</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
