import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";
import { solutionAreas } from "@/data/solutions";

const SolutionsIndex = () => {
  useEffect(() => {
    document.title = "Soluções de Tecnologia | X3 Tecnologia";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    meta?.setAttribute("content", "Cloud, DevOps, software, UX/UI, gestão, qualidade, dados, IA e segurança conectados aos desafios do seu negócio.");
    return () => {
      document.title = "X3 Tecnologia | Software, Cloud, Segurança e Analytics";
      if (previousDescription) meta?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
  <main className="bg-background pt-16 md:pt-20">
    <section className="relative overflow-hidden py-16 text-center sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Soluções X3</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">Tecnologia conectada de ponta a ponta.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">Cinco áreas, um único parceiro.</p>
      </div>
    </section>

    <section className="pb-20 sm:pb-28">
      <div className="container mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
        {solutionAreas.map((area) => (
          <div key={area.id} id={area.id} className="scroll-mt-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10"><area.icon className="h-6 w-6 text-accent" /></span>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">{area.name}</h2>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {area.solutions.map((solution) => (
                <Link key={solution.slug} to={`/solucoes/${solution.slug}`} className="group flex flex-col rounded-3xl bg-card p-6 shadow-x3 transition-all duration-300 hover:-translate-y-1 hover:shadow-x3-lg">
                  <div className="flex items-start justify-between">
                    <solution.icon className="h-6 w-6 text-accent" />
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{solution.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{solution.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <CTA />
  </main>
  );
};

export default SolutionsIndex;