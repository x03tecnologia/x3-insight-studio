import { ArrowUpRight, BarChart3, Bot, Boxes, CloudCog, ShieldCheck, UsersRound } from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "Produtos Digitais & SaaS",
    description: "Criamos plataformas, aplicações e produtos digitais que nascem prontos para evoluir com o negócio.",
    details: "Estratégia de produto · UX/UI · Desenvolvimento · Evolução contínua",
  },
  {
    icon: Bot,
    title: "Automação & IA",
    description: "Redesenhamos fluxos e conectamos sistemas para reduzir esforço manual e acelerar operações complexas.",
    details: "Agentes inteligentes · Integrações · RPA · Workflows",
  },
  {
    icon: CloudCog,
    title: "Cloud, Infraestrutura & Backup",
    description: "Estruturamos ambientes resilientes, escaláveis e preparados para manter sua operação sempre disponível.",
    details: "Arquitetura · Migração · Operação · Continuidade e recuperação",
  },
  {
    icon: ShieldCheck,
    title: "Segurança da Informação",
    description: "Protegemos sistemas, dados e acessos com uma abordagem orientada a risco, governança e continuidade.",
    details: "Diagnóstico · Proteção · Governança · Resposta a riscos",
  },
  {
    icon: BarChart3,
    title: "Analytics & Dados",
    description: "Transformamos dados em clareza para decisões melhores, com mensuração confiável e inteligência aplicada.",
    details: "Web Analytics · Engenharia · Visualização · Ciência de Dados",
  },
  {
    icon: UsersRound,
    title: "Talentos & Squads X3",
    description: "Integramos especialistas ou times multidisciplinares à sua operação para acelerar entregas e ampliar capacidades.",
    details: "Profissionais sob demanda · Squads dedicados · Gestão próxima",
  },
];

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
            Tecnologia não funciona em silos. Por isso, combinamos competências para resolver o desafio completo do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group min-h-[330px] border-b border-r border-border bg-card p-7 transition-colors duration-300 hover:bg-background sm:p-8"
            >
              <div className="flex items-start justify-between">
                <service.icon className="h-8 w-8 text-accent" />
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <h3 className="mt-14 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
              <p className="mt-6 border-t border-border pt-4 text-xs font-medium text-foreground/70">{service.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
