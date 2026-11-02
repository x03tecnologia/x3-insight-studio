import { ArrowRight, Database, MessageSquare, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import padLogo from "@/assets/pergunte-aos-dados-logo.webp.asset.json";

export const PAD_URL = "https://pad.x3tecnologia.com/";

const benefits = [
  { icon: Database, title: "Conecte suas fontes", description: "Bancos, planilhas e sistemas em poucos cliques." },
  { icon: MessageSquare, title: "Pergunte naturalmente", description: "Sem SQL, sem código, sem esperar o time de dados." },
  { icon: Sparkles, title: "Crie seus agentes", description: "Agentes de IA sob medida para cada área do negócio." },
];

const bars = [
  { label: "Sul", h: "100%" },
  { label: "Sudeste", h: "78%" },
  { label: "Nordeste", h: "54%" },
  { label: "Centro", h: "38%" },
];

export const PadMockup = () => (
  <div className="rounded-3xl border border-border bg-card p-5 shadow-x3-lg sm:p-6">
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="h-2 w-2 animate-pulse rounded-full bg-status" /> Conectado às suas fontes de dados
    </div>
    <div className="mt-5 flex justify-end gap-3">
      <div className="rounded-2xl rounded-tr-sm bg-secondary px-4 py-3 text-sm text-foreground">
        Quais regiões mais cresceram em vendas este mês?
      </div>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary"><User className="h-4 w-4 text-muted-foreground" /></div>
    </div>
    <div className="mt-4 rounded-2xl rounded-tl-sm bg-muted p-4">
      <p className="text-sm leading-relaxed text-foreground/80">
        O <strong className="text-foreground">Sul</strong> liderou com <span className="font-semibold text-accent">+18%</span>, seguido pelo Sudeste.
      </p>
      <div className="mt-4 grid h-28 grid-cols-4 items-end gap-3">
        {bars.map((b) => (
          <div key={b.label} className="flex h-full flex-col justify-end gap-1 text-center">
            <div className="w-full rounded-t-md bg-accent/80" style={{ height: b.h }} />
            <span className="text-[10px] text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PergunteAosDados = () => (
  <section id="pergunte-aos-dados" className="bg-background py-20 sm:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Novo produto X3</span>
          <img src={padLogo.url} alt="Pergunte aos Dados" className="mt-6 h-16 w-auto sm:h-20" />
          <h2 className="mt-6 max-w-lg text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Seus dados respondem. Você decide.
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            Conecte suas fontes de dados e construa agentes de IA que respondem em linguagem natural.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10"><Icon className="h-5 w-5 text-accent" /></span>
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="mt-10 h-12 px-7">
            <a href={PAD_URL} target="_blank" rel="noopener noreferrer">Conheça o Pergunte aos Dados <ArrowRight /></a>
          </Button>
        </div>
        <PadMockup />
      </div>
    </div>
  </section>
);

export default PergunteAosDados;
