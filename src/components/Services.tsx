import { 
  Brain, 
  Bot, 
  Database, 
  Cog, 
  BarChart3, 
  Palette,
  Monitor 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Ciência de Dados",
    description: "Análises preditivas, machine learning e insights estratégicos para tomada de decisões baseadas em dados.",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description: "Desenvolvimento de agentes inteligentes e chatbots personalizados para automatizar processos complexos.",
  },
  {
    icon: Database,
    title: "Engenharia de Dados",
    description: "Arquitetura de dados robusta, pipelines ETL e infraestrutura escalável para seus projetos.",
  },
  {
    icon: Cog,
    title: "Automações",
    description: "Automatização de processos repetitivos, integrações e workflows para aumentar a eficiência operacional.",
  },
  {
    icon: BarChart3,
    title: "Visualização de Dados",
    description: "Dashboards interativos e relatórios visuais que transformam dados complexos em insights claros.",
  },
  {
    icon: Palette,
    title: "Information Design",
    description: "Design de informação estratégico para comunicar dados de forma clara, impactante e acessível.",
  },
  {
    icon: Monitor,
    title: "Desenvolvimento de Apps & Sistemas",
    description: "Criação de aplicações web, mobile e sistemas sob medida para otimizar operações e impulsionar o crescimento do seu negócio.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Soluções completas em{" "}
            <span className="text-gradient">dados e tecnologia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um portfólio completo de serviços para transformar 
            a maneira como sua empresa trabalha com dados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-x3 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-x3 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Accent Line */}
                <div className="h-1 w-0 bg-gradient-x3 mt-6 rounded-full group-hover:w-16 transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
