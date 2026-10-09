import { ArrowDownRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Construir",
    description: "Produtos digitais, plataformas SaaS e soluções sob medida que transformam ideias em operações reais.",
  },
  {
    number: "02",
    title: "Operar",
    description: "Cloud, infraestrutura, backup e segurança para manter ambientes disponíveis, protegidos e preparados.",
  },
  {
    number: "03",
    title: "Evoluir",
    description: "Analytics, automação e especialistas que ampliam capacidade, eficiência e inteligência de negócio.",
  },
];

const Overview = () => (
  <section id="expertise" className="border-y border-border bg-background py-20 sm:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-label">Como atuamos</p>
          <h2 className="section-title mt-5 max-w-xl">
            Estratégia, tecnologia e pessoas em uma só parceria.
          </h2>
        </div>
        <div className="lg:pt-10">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Assumimos desafios de ponta a ponta para transformar tecnologia em uma vantagem concreta: do primeiro desenho à evolução contínua da operação.
          </p>
        </div>
      </div>

      <div className="mt-16 grid border-y border-border md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="group border-b border-border px-0 py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0 first:md:pl-0 last:md:pr-0">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-xs font-semibold text-accent">{pillar.number}</span>
              <ArrowDownRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">{pillar.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Overview;