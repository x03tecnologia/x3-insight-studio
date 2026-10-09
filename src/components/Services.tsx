import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { solutionAreas } from "@/data/solutions";

const Services = () => {
  return (
    <section id="servicos" className="bg-secondary/45 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-label">Nossas soluções</p>
            <h2 className="section-title mt-5 max-w-2xl">Capacidades que conectam estratégia à execução.</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
            Da infraestrutura à experiência, da governança à inteligência: combinamos competências para resolver o desafio completo.
          </p>
        </div>

        <div className="border-t border-border">
          {solutionAreas.map((area, index) => (
            <article
              key={area.id}
              className="group grid gap-8 border-b border-border py-9 lg:grid-cols-[0.12fr_0.33fr_0.55fr] lg:items-start"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                <area.icon className="h-6 w-6 text-accent lg:hidden" />
              </div>
              <div>
                <area.icon className="hidden h-7 w-7 text-accent lg:block" />
                <h3 className="mt-0 text-2xl font-semibold lg:mt-7">{area.name}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </div>
              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {area.solutions.map((solution) => (
                  <Link key={solution.slug} to={`/solucoes/${solution.slug}`} className="flex items-center justify-between border-b border-border py-3 text-sm font-medium text-foreground transition-colors hover:text-accent">
                    {solution.shortTitle} <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
                <Link to={`/solucoes#${area.id}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">Explorar esta área <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-l-2 border-accent bg-card p-6">
          <div><p className="font-semibold text-foreground">Cloud nas plataformas que sua operação exige.</p><p className="mt-1 text-sm text-muted-foreground">Atuamos com ambientes Microsoft Azure, Amazon Web Services e Google Cloud Platform.</p></div>
          <div className="flex flex-wrap gap-2"><span className="border border-border px-3 py-2 text-xs font-semibold">Azure</span><span className="border border-border px-3 py-2 text-xs font-semibold">AWS</span><span className="border border-border px-3 py-2 text-xs font-semibold">GCP</span></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
