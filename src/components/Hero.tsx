import { ArrowRight, BarChart3, Bot, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px)`,
             backgroundSize: '60px 60px'
           }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Consultoria em Tecnologia e Dados
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Transformamos{" "}
            <span className="text-gradient">dados</span>
            <br />
            em decisões estratégicas
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            Especialistas em Ciência de Dados, Inteligência Artificial, 
            Engenharia de Dados e Automações para impulsionar o seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <a href="#contato">
              <Button
                size="lg"
                className="bg-gradient-x3 hover:opacity-90 transition-all duration-300 px-8 py-6 text-base font-medium shadow-x3-lg group"
              >
                Iniciar Projeto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#servicos">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5"
              >
                Conhecer Serviços
              </Button>
            </a>
          </div>

          {/* Stats/Icons */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto animate-fade-in-up animation-delay-600">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                <Database className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Dados</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                <Bot className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">IA</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
