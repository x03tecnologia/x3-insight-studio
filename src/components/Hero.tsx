import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Cloud, Code2, ShieldCheck, BarChart3, UsersRound } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/x3-technology-hero.jpg";
import padLogo from "@/assets/pergunte-aos-dados-logo.webp.asset.json";
import { PAD_URL, PadMockup } from "@/components/PergunteAosDados";

const capabilities = [
  { icon: Code2, label: "Software & SaaS" },
  { icon: Cloud, label: "Cloud" },
  { icon: ShieldCheck, label: "Segurança" },
  { icon: BarChart3, label: "Analytics" },
  { icon: UsersRound, label: "Talentos" },
];

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
                  Software, cloud, segurança, dados e especialistas — da estratégia à operação.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-12 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90">
                    <a href="#servicos">Conheça nossas soluções <ArrowRight /></a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <a href="#contato">Fale com especialistas</a>
                  </Button>
                </div>
              </div>
              <div className="hidden flex-wrap gap-2 pb-12 sm:flex">
                {capabilities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm text-primary-foreground/75 backdrop-blur">
                    <Icon className="h-4 w-4 text-accent" /> {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 2 - Pergunte aos Dados */}
          <div className="relative min-h-[92vh] min-w-0 shrink-0 basis-full bg-x3-dark" aria-roledescription="slide">
            <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="container relative z-10 mx-auto grid min-h-[calc(92vh-5rem)] items-center gap-12 px-4 py-16 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div>
                <div className="inline-flex rounded-2xl bg-card px-4 py-3">
                  <img src={padLogo.url} alt="Pergunte aos Dados" className="h-10 w-auto sm:h-12" />
                </div>
                <h2 className="mt-8 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                  Pergunte aos <span className="text-accent">dados</span>. Receba respostas.
                </h2>
                <p className="mt-6 max-w-xl text-lg text-primary-foreground/70">
                  Conecte suas fontes e crie agentes de IA em linguagem natural.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-12 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90">
                    <a href={PAD_URL} target="_blank" rel="noopener noreferrer">Experimentar agora <ArrowRight /></a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <a href="#pergunte-aos-dados">Saiba mais</a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block"><PadMockup /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <button aria-label="Slide anterior" onClick={() => emblaApi?.scrollPrev()} className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <ChevronLeft className="h-4 w-4" />
        </button>
        {[0, 1].map((i) => (
          <button key={i} aria-label={`Ir para slide ${i + 1}`} onClick={() => emblaApi?.scrollTo(i)} className={`h-1.5 rounded-full transition-all ${selected === i ? "w-10 bg-accent" : "w-5 bg-primary-foreground/40"}`} />
        ))}
        <button aria-label="Próximo slide" onClick={() => emblaApi?.scrollNext()} className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
