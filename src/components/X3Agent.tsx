import {
  ArrowRight,
  Bot,
  Database,
  MessageSquare,
  Sparkles,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { label: "Eletrônicos", value: 720, display: "R$ 720k" },
  { label: "Moda", value: 480, display: "R$ 480k" },
  { label: "Casa", value: 360, display: "R$ 360k" },
  { label: "Outros", value: 280, display: "R$ 280k" },
];
const maxValue = Math.max(...chartData.map((d) => d.value));

const benefits = [
  {
    icon: MessageSquare,
    title: "Perguntas em linguagem natural",
    description:
      "Sem SQL, sem dashboards complexos. Pergunte como falaria com um analista de dados.",
  },
  {
    icon: Database,
    title: "Conecta ao seu banco de dados",
    description:
      "Integração segura e read-only com os principais SGBDs do mercado.",
  },
  {
    icon: Sparkles,
    title: "Insights automáticos",
    description:
      "O agente identifica tendências, anomalias e oportunidades sem você pedir.",
  },
];

const databases = [
  "PostgreSQL",
  "MySQL",
  "BigQuery",
  "Supabase",
  "SQL Server",
  "Snowflake",
  "MongoDB",
  "Oracle",
];

const whatsappUrl =
  "https://web.whatsapp.com/send?phone=5521965616062&text=Ol%C3%A1!%20Quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20X3%20Agent.";

const X3Agent = () => {
  return (
    <section
      id="x3-agent"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Lançamento · Novo produto
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Pergunte aos seus dados.{" "}
            <span className="text-gradient">Receba respostas</span> em segundos.
          </h2>

          <p className="text-muted-foreground text-lg">
            Contrate o <strong className="text-foreground font-semibold">X3 Agent</strong> como seu analista sênior. Obtenha análises,
            relatórios e insights em linguagem natural — em segundos e sem precisar escrever uma linha de código.
          </p>
        </div>

        {/* Chat demo */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="rounded-2xl border border-white/10 shadow-x3-lg overflow-hidden"
            style={{ backgroundColor: "hsl(215 50% 8%)" }}
          >
            {/* Window bar */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60 ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                X3 Agent · conectado ao banco
              </div>
            </div>

            {/* Chat body */}
            <div className="p-5 sm:p-8 space-y-6">
              {/* User message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90">
                  Qual foi o faturamento por categoria no último trimestre?
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-white/70" />
                </div>
              </div>

              {/* Agent response */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-x3 flex items-center justify-center shrink-0 shadow-lg">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="flex-1 max-w-[90%] rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/10 px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-sm text-white/90 mb-5 leading-relaxed">
                    No <strong className="text-white">Q3/2025</strong>, o faturamento total foi{" "}
                    <strong className="text-white">R$ 1,84M</strong>, com destaque para{" "}
                    <span className="text-accent font-medium">Eletrônicos (+22% vs Q2)</span>.
                  </p>

                  {/* Bar chart */}
                  <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 sm:p-5">
                    <div className="flex items-end justify-between gap-3 sm:gap-5 h-40">
                      {chartData.map((bar) => {
                        const heightPct = (bar.value / maxValue) * 100;
                        return (
                          <div
                            key={bar.label}
                            className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                          >
                            <span className="text-[10px] sm:text-xs text-white/70 font-medium tabular-nums">
                              {bar.display}
                            </span>
                            <div
                              className="w-full rounded-t-md bg-gradient-to-t from-accent/40 to-accent transition-all"
                              style={{ height: `${heightPct}%` }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between gap-3 sm:gap-5 mt-3 pt-3 border-t border-white/5">
                      {chartData.map((bar) => (
                        <span
                          key={bar.label}
                          className="flex-1 text-center text-[10px] sm:text-xs text-white/50"
                        >
                          {bar.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="flex items-start gap-2 mt-4 text-xs sm:text-sm text-white/80">
                    <Sparkles className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p>
                      <span className="text-accent font-medium">Insight:</span>{" "}
                      Eletrônicos foi o único segmento com crescimento acima da meta trimestral.
                      <span className="inline-block w-1.5 h-4 bg-accent/80 align-middle ml-1 animate-pulse" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {benefits.map((b) => (
            <Card
              key={b.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-x3"
            >
              <CardContent className="p-6 sm:p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-x3 flex items-center justify-center mb-5">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-x3 hover:opacity-90 transition-all duration-300 px-8 py-6 text-base font-medium shadow-x3-lg group"
            >
              Agendar demonstração
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default X3Agent;
