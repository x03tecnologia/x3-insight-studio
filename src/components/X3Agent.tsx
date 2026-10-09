import { ArrowRight, Bot, Database, MessageSquare, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const chartData = [
  { label: "Eletrônicos", height: "100%", display: "R$ 720k" },
  { label: "Moda", height: "67%", display: "R$ 480k" },
  { label: "Casa", height: "50%", display: "R$ 360k" },
  { label: "Outros", height: "39%", display: "R$ 280k" },
];

const benefits = [
  { icon: MessageSquare, title: "Converse naturalmente", description: "Faça perguntas como faria a um analista experiente." },
  { icon: Database, title: "Use seus próprios dados", description: "Conecte a inteligência ao contexto real da sua operação." },
  { icon: Sparkles, title: "Descubra o que importa", description: "Receba análises e insights acionáveis em segundos." },
];

const whatsappUrl = "https://web.whatsapp.com/send?phone=5521965616062&text=Ol%C3%A1!%20Quero%20conhecer%20o%20X3%20Agent.";

const X3Agent = () => (
  <section id="x3-agent" className="overflow-hidden bg-x3-dark py-20 text-primary-foreground sm:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="section-label">Produto X3 · Inteligência aplicada</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Seu negócio já gera respostas. O X3 Agent ajuda você a encontrá-las.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/65">
            Um agente de IA conectado ao contexto da sua empresa para transformar perguntas em análises, relatórios e insights — em segundos.
          </p>

          <div className="mt-10 space-y-5">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 border-t border-primary-foreground/15 pt-5">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/55">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6">
              <a href="https://agent.x3tecnologia.com/" target="_blank" rel="noopener noreferrer">Experimentar demonstração <ArrowRight /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 border-primary-foreground/25 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Fale com nossos consultores</a>
            </Button>
          </div>
        </div>

        <div className="border border-primary-foreground/15 bg-primary-foreground/[0.035] shadow-x3-lg">
          <div className="flex items-center justify-between border-b border-primary-foreground/10 px-5 py-4">
            <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
              <span className="h-2 w-2 bg-status animate-pulse" /> X3 Agent · ambiente conectado
            </div>
            <Bot className="h-5 w-5 text-accent" />
          </div>
          <div className="space-y-6 p-5 sm:p-7">
            <div className="flex justify-end gap-3">
              <div className="max-w-[82%] border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground/85">
                Qual foi o faturamento por categoria no último trimestre?
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary-foreground/15"><User className="h-4 w-4 text-primary-foreground/60" /></div>
            </div>
            <div className="border-l-2 border-accent bg-primary-foreground/[0.035] p-5">
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                No último trimestre, o faturamento total foi <strong className="text-primary-foreground">R$ 1,84M</strong>. Eletrônicos liderou o período e cresceu <span className="font-medium text-accent">22%</span>.
              </p>
              <div className="mt-6 grid h-40 grid-cols-4 items-end gap-3 border-b border-primary-foreground/10 pb-3">
                {chartData.map((bar) => (
                  <div key={bar.label} className="flex h-full flex-col justify-end gap-2 text-center">
                    <span className="text-[10px] text-primary-foreground/60">{bar.display}</span>
                    <div className="w-full bg-accent/80" style={{ height: bar.height }} />
                    <span className="truncate text-[9px] text-primary-foreground/45 sm:text-[10px]">{bar.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-2 text-sm text-primary-foreground/70">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p><span className="font-medium text-accent">Insight:</span> a categoria superou a meta e apresenta potencial para ampliação de investimento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default X3Agent;
