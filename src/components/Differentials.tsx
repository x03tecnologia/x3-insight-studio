import { CheckCircle, Users, Zap, Shield } from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes e certificados nas principais tecnologias de dados e IA do mercado.",
  },
  {
    icon: Zap,
    title: "Metodologia Ágil",
    description: "Entregas rápidas e iterativas, com foco em resultados mensuráveis desde o início do projeto.",
  },
  {
    icon: Shield,
    title: "Segurança e Compliance",
    description: "Soluções desenvolvidas seguindo as melhores práticas de segurança e conformidade com LGPD.",
  },
  {
    icon: CheckCircle,
    title: "Soluções Sob Medida",
    description: "Cada projeto é único. Desenvolvemos soluções personalizadas para suas necessidades específicas.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Por Que Nos Escolher
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Parceiros no seu{" "}
              <span className="text-gradient">crescimento digital</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Combinamos expertise técnica com visão estratégica de negócio 
              para entregar soluções que realmente fazem a diferença.
            </p>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-6">
            {differentials.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-x3 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
