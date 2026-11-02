import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { solutionAreas } from "@/data/solutions";

const Services = () => (
  <section id="servicos" className="bg-secondary/40 py-20 sm:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="section-label">Nossas soluções</p>
        <h2 className="section-title mt-4">Tudo o que sua operação precisa, em um só parceiro.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {solutionAreas.map((area, i) => (
          <Link
            key={area.id}
            to={`/solucoes#${area.id}`}
            className={`group flex flex-col rounded-3xl bg-card p-7 shadow-x3 transition-all duration-300 hover:-translate-y-1 hover:shadow-x3-lg ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10"><area.icon className="h-6 w-6 text-accent" /></span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">{area.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            <p className="mt-auto pt-5 text-xs text-muted-foreground/80">
              {area.solutions.map((s) => s.shortTitle).join(" · ")}
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Atuamos com <span className="font-semibold text-foreground">Azure</span>, <span className="font-semibold text-foreground">AWS</span> e <span className="font-semibold text-foreground">GCP</span>.{" "}
        <Link to="/solucoes" className="font-semibold text-accent hover:underline">Ver todas as soluções</Link>
      </p>
    </div>
  </section>
);

export default Services;
