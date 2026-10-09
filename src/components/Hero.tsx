import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Bot, ChevronLeft, ChevronRight, Cloud, Code2, ShieldCheck, BarChart3, UsersRound, User } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/x3-technology-hero.jpg";

const capabilities = [
  { icon: Code2, label: "Software & SaaS" },
  { icon: Cloud, label: "Cloud" },
  { icon: ShieldCheck, label: "Segurança" },
  { icon: BarChart3, label: "Analytics" },
  { icon: UsersRound, label: "Talentos" },
];

const bars = [
  { label: "Sul", h: "100%", v: "R$ 640k" },
  { label: "Sudeste", h: "82%", v: "R$ 525k" },
  { label: "Nordeste", h: "55%", v: "R$ 350k" },
  { label: "Centro", h: "40%", v: "R$ 255k" },
];

const AgentMockup = () => (
  <div className="w-full border border-primary-foreground/15 bg-x3-dark/80 shadow-x3-lg backdrop-blur">
    <div className="flex items-center justify-between border-b border-primary-foreground/10 px-5 py-3">
      <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
        <span className="h-2 w-2 animate-pulse bg-status" /> X3 Agent · conectado aos seus dados
      </div>
      <Bot className="h-5 w-5 text-accent" />
    </div>
    <div className="space-y-5 p-5">
      <div className="flex justify-end gap-3">
        <div className="max-w-[85%] border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground/85">
          Quais regiões mais cresceram em vendas este mês?
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary-foreground/15"><User className="h-4 w-4 text-primary-foreground/60" /></div>
      </div>
      <div className="border-l-2 border-accent bg-primary-foreground/[0.04] p-4">
        <p className="text-sm leading-relaxed text-primary-foreground/80">
          O <strong className="text-primary-foreground">Sul</strong> liderou com crescimento de <span className="font-medium text-accent">18%</span>, seguido pelo Sudeste.
        </p>
        <div className="mt-5 grid h-32 grid-cols-4 items-end gap-3 border-b border-primary-foreground/10 pb-2">
          {bars.map((b) => (
            <div key={b.label} className="flex h-full flex-col justify-end gap-1 text-center">
              <span className="text-[10px] text-primary-foreground/60">{b.v}</span>
              <div className="w-full bg-accent/80" style={{ height: b.h }} />
              <span className="text-[10px] text-primary-foreground/45">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => emblaApi && setSelected(emblaApi.selectedScrollSnap()), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = reduce ? undefined : window.setInterval(() => emblaApi.scrollNext(), 8000);
    return () => {
      emblaApi.off("select", onSelect);
      if (id) window.clearInterval(id);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="inicio" className="relative overflow-hidden bg-hero pt-20 text-primary-foreground">
      <div ref={emblaRef} className="overflow-hidden" aria-roledescription="carousel">
        <div className="flex">
          {/* Slide 1 - Institucional */}
          <div className="relative min-h-[92vh] min-w-0 shrink-0 basis-full" aria-roledescription="slide">
            <img src={heroImage} alt="Equipe de tecnologia em um ambiente corporativo moderno" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-hero-overlay" />
            <div className="container relative z-10 mx-auto flex min-h-[calc(92vh-5rem)] flex-col justify-end px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
              <div className="max-w-4xl py-16 lg:py-20">
                <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-accent">
                  <span className="h-px w-10 bg-accent" /> Parceira de evolução tecnológica
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
                  Tecnologia para construir, proteger e <span className="text-accent">escalar</span> o seu negócio.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl">
                  Da estratégia à operação, conectamos software, cloud, segurança, automação, analytics e especialistas para fazer sua empresa avançar.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-13 px-7 text-base">
                    <a href="#servicos">Conheça nossas soluções <ArrowRight /></a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-13 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <a href="#contato">Fale com especialistas</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-primary-foreground/20 pb-10 pt-6 sm:grid-cols-5">
                {capabilities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 py-2 text-sm text-primary-foreground/70">
                    <Icon className="h-4 w-4 text-accent" /> {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 2 - X3 Agent */}
          <div className="relative min-h-[92vh] min-w-0 shrink-0 basis-full bg-x3-dark" aria-roledescription="slide">
            <div className="container relative z-10 mx-auto grid min-h-[calc(92vh-5rem)] items-center gap-12 px-4 py-16 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div>
                <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-accent">
                  <span className="h-px w-10 bg-accent" /> Produto X3 · X3 Agent
                </p>
                <h2 className="text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                  Pergunte aos <span className="text-accent">dados</span>. Receba respostas.
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
                  O X3 Agent é seu analista sênior de IA: faça perguntas em linguagem natural e obtenha análises, relatórios e insights em segundos.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-13 px-7 text-base">
                    <a href="https://agent.x3tecnologia.com/" target="_blank" rel="noopener noreferrer">Experimentar o X3 Agent <ArrowRight /></a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-13 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <a href="#x3-agent">Saiba mais</a>
                  </Button>
                </div>
              </div>
              <AgentMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <button aria-label="Slide anterior" onClick={() => emblaApi?.scrollPrev()} className="flex h-9 w-9 items-center justify-center border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <ChevronLeft className="h-4 w-4" />
        </button>
        {[0, 1].map((i) => (
          <button key={i} aria-label={`Ir para slide ${i + 1}`} onClick={() => emblaApi?.scrollTo(i)} className={`h-1 transition-all ${selected === i ? "w-10 bg-accent" : "w-5 bg-primary-foreground/40"}`} />
        ))}
        <button aria-label="Próximo slide" onClick={() => emblaApi?.scrollNext()} className="flex h-9 w-9 items-center justify-center border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
