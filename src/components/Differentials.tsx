import { BriefcaseBusiness, Layers3, Users, Waypoints } from "lucide-react";

const differentials = [
  {
    icon: BriefcaseBusiness,
    title: "Visão de negócio",
    description: "Começamos pelo contexto da sua operação para definir a tecnologia certa — e não o contrário.",
  },
  {
    icon: Layers3,
    title: "Execução ponta a ponta",
    description: "Unimos estratégia, construção e sustentação para reduzir dependências e acelerar resultados.",
  },
  {
    icon: Users,
    title: "Especialistas sob medida",
    description: "Formamos a combinação certa de competências para cada fase e complexidade do desafio.",
  },
  {
    icon: Waypoints,
    title: "Parceria contínua",
    description: "Trabalhamos próximos ao seu time, com transparência, evolução constante e compromisso com a entrega.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="section-label">Por que a X3</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">A proximidade de quem entende. A capacidade de quem entrega.</h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/65">Reunimos estratégia, design, engenharia, operação e governança para assumir desafios complexos sem perder proximidade com o seu time.</p>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-6">
            {differentials.map((item, index) => (
              <div
                key={item.title}
                className="group flex gap-5 border-b border-primary-foreground/15 py-6 last:border-b-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center border border-primary-foreground/20 bg-primary-foreground/5">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
