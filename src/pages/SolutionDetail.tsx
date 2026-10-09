import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { allSolutions, findSolution } from "@/data/solutions";

const whatsappUrl = "https://web.whatsapp.com/send?phone=5521965616062&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20X3%20Tecnologia.";

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = findSolution(slug);

  useEffect(() => {
    if (!solution) return;
    const title = `${solution.title} | X3 Tecnologia`;
    document.title = title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    meta?.setAttribute("content", solution.summary);
    return () => {
      document.title = "X3 Tecnologia | Software, Cloud, Segurança e Analytics";
      if (previousDescription) meta?.setAttribute("content", previousDescription);
    };
  }, [solution]);

  if (!solution) return <Navigate to="/solucoes" replace />;

  const related = allSolutions.filter((item) => item.areaId === solution.areaId && item.slug !== solution.slug).slice(0, 3);

  return (
    <main className="pt-16 md:pt-20">
      <section className="bg-x3-dark py-16 text-primary-foreground sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Caminho de navegação" className="flex flex-wrap items-center gap-2 text-xs text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/solucoes" className="hover:text-primary-foreground">Soluções</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground/80">{solution.areaName}</span>
          </nav>
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
            <div>
              <p className="section-label">{solution.areaName}</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">{solution.title}</h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-primary-foreground/70">{solution.promise}</p>
            </div>
            <solution.icon className="hidden h-28 w-28 justify-self-end text-accent/80 lg:block" strokeWidth={1} />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_0.3fr] lg:gap-24">
            <div>
              <p className="section-label">O desafio</p>
              <h2 className="section-title mt-5">Tecnologia aplicada ao contexto real da operação.</h2>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">{solution.context}</p>
            </div>
            <aside className="border-l border-border pl-7">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Área de atuação</p>
              <p className="mt-3 text-xl font-semibold text-foreground">{solution.areaName}</p>
              <Link to="/solucoes" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
                <ArrowLeft className="h-4 w-4" /> Todas as soluções
              </Link>
            </aside>
          </div>

          <div className="mt-20 grid gap-px border border-border bg-border lg:grid-cols-2">
            <div className="bg-card p-7 sm:p-10">
              <p className="section-label">O que entregamos</p>
              <ul className="mt-8 space-y-5">
                {solution.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/55 p-7 sm:p-10">
              <p className="section-label">Como trabalhamos</p>
              <ol className="mt-8 space-y-5">
                {solution.approach.map((item, index) => (
                  <li key={item} className="flex items-center gap-4 text-foreground">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-border bg-background text-xs font-semibold text-accent">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-y border-border bg-secondary/35 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-label">Soluções relacionadas</p>
            <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} to={`/solucoes/${item.slug}`} className="group bg-background p-6 transition-colors hover:bg-card">
                  <item.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Conhecer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-accent py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-accent-foreground sm:text-4xl">Vamos aplicar {solution.shortTitle} ao seu próximo desafio?</h2>
            <Button asChild size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Fale com nossos consultores <ArrowRight /></a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionDetail;