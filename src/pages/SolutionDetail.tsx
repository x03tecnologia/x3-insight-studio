import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import CTA from "@/components/CTA";
import { allSolutions, findSolution } from "@/data/solutions";

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = findSolution(slug);

  useEffect(() => {
    if (!solution) return;
    document.title = `${solution.title} | X3 Tecnologia`;
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
    <main className="bg-background pt-16 md:pt-20">
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Caminho de navegação" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/solucoes" className="hover:text-foreground">Soluções</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/solucoes#${solution.areaId}`} className="hover:text-foreground">{solution.areaName}</Link>
          </nav>
          <div className="mt-10 flex items-start gap-6">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 sm:flex"><solution.icon className="h-8 w-8 text-accent" /></span>
            <div>
              <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{solution.areaName}</span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">{solution.title}</h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{solution.promise}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-card p-7 shadow-x3 sm:p-10">
            <p className="section-label">O desafio</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80">{solution.context}</p>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl bg-card p-7 shadow-x3 sm:p-10">
              <p className="section-label">O que entregamos</p>
              <ul className="mt-6 space-y-4">
                {solution.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-secondary/60 p-7 sm:p-10">
              <p className="section-label">Como trabalhamos</p>
              <ol className="mt-6 space-y-4">
                {solution.approach.map((item, index) => (
                  <li key={item} className="flex items-center gap-4 text-foreground">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card text-xs font-semibold text-accent">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold text-foreground">Soluções relacionadas</h2>
                <Link to="/solucoes" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"><ArrowLeft className="h-4 w-4" /> Todas as soluções</Link>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.slug} to={`/solucoes/${item.slug}`} className="group flex items-center justify-between rounded-2xl bg-card p-6 shadow-x3 transition-all hover:-translate-y-1 hover:shadow-x3-lg">
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10"><item.icon className="h-5 w-5 text-accent" /></span>
                      <span className="font-semibold text-foreground">{item.shortTitle}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default SolutionDetail;
