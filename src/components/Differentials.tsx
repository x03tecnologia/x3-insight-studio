import { BriefcaseBusiness, Layers3, Users, Waypoints } from "lucide-react";

const differentials = [
  { icon: BriefcaseBusiness, title: "Visão de negócio", description: "Tecnologia escolhida a partir do seu contexto." },
  { icon: Layers3, title: "Ponta a ponta", description: "Da estratégia à sustentação, sem dependências." },
  { icon: Users, title: "Especialistas sob medida", description: "As competências certas para cada fase." },
  { icon: Waypoints, title: "Parceria contínua", description: "Proximidade, transparência e evolução constante." },
];

const Differentials = () => (
  <section id="expertise" className="bg-background py-20 sm:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="section-label">Por que a X3</p>
        <h2 className="section-title mt-4">Proximidade de quem entende. Capacidade de quem entrega.</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {differentials.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-3xl border border-border p-7 transition-colors hover:border-accent/40">
            <Icon className="h-7 w-7 text-accent" />
            <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
