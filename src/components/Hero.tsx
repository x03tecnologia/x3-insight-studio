import { ArrowRight, Cloud, Code2, ShieldCheck, BarChart3, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/x3-technology-hero.jpg";

const capabilities = [
  { icon: Code2, label: "Software & SaaS" },
  { icon: Cloud, label: "Cloud" },
  { icon: ShieldCheck, label: "Segurança" },
  { icon: BarChart3, label: "Analytics" },
  { icon: UsersRound, label: "Talentos" },
];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] overflow-hidden bg-hero pt-20 text-primary-foreground"
    >
      <img src={heroImage} alt="Equipe de tecnologia em um ambiente corporativo moderno" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(92vh-5rem)] flex-col justify-end px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
        <div className="max-w-4xl py-16 lg:py-20">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-accent">
            <span className="h-px w-10 bg-accent" /> Parceira de evolução tecnológica
          </p>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Tecnologia para construir, proteger e <span className="text-accent">escalar</span> o seu negócio.
          </h1>

          {/* Subheadline */}
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl">
            Da estratégia à operação, conectamos software, cloud, segurança, automação, analytics e especialistas para fazer sua empresa avançar.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-13 px-7 text-base">
              <a href="#servicos">Conheça nossas soluções <ArrowRight /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="#contato">Fale com especialistas</a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 border-t border-primary-foreground/20 pt-6 sm:grid-cols-5">
          {capabilities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 py-2 text-sm text-primary-foreground/70">
              <Icon className="h-4 w-4 text-accent" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
