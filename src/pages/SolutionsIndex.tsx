import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";
import { solutionAreas } from "@/data/solutions";

const SolutionsIndex = () => (
  <main className="pt-16 md:pt-20">
    <section className="bg-x3-dark py-20 text-primary-foreground sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Soluções X3</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Tecnologia conectada de ponta a ponta.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/65 sm:text-xl">
          Cinco áreas de atuação que conectam estratégia, construção, operação, proteção e evolução tecnológica.
        </p>
      </div>
    </section>

    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {solutionAreas.map((area, areaIndex) => (
            <div key={area.id} id={area.id} className="scroll-mt-28 grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
              <div>
                <span className="text-xs font-semibold text-accent">0{areaIndex + 1}</span>
                <h2 className="mt-4 text-3xl font-semibold text-foreground">{area.name}</h2>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </div>
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {area.solutions.map((solution) => (
                  <Link key={solution.slug} to={`/solucoes/${solution.slug}`} className="group bg-card p-6 transition-colors hover:bg-secondary/60">
                    <solution.icon className="h-6 w-6 text-accent" />
                    <h3 className="mt-8 text-xl font-semibold text-foreground">{solution.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solution.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Conhecer solução <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTA />
  </main>
);

export default SolutionsIndex;