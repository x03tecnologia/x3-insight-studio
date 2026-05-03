## Nova seção: X3 Agent

Criar `src/components/X3Agent.tsx` e inseri-lo em `src/pages/Index.tsx` **entre o Hero e o Services** — posição que mantém o fluxo: apresentação → produto destaque → portfólio de serviços.

### Estrutura visual da seção (top → bottom)

1. **Eyebrow** — pill pequena com dot pulsante (mesmo padrão do badge do Hero): "Lançamento · Novo produto"
2. **Headline** — foco em resultado, não em tecnologia:
   "Pergunte aos seus dados. <span gradient>Receba respostas</span> em segundos."
3. **Subtítulo (2 linhas)** — "Conecte o X3 Agent ao seu banco e obtenha análises, relatórios e insights em linguagem natural — sem precisar escrever uma linha de SQL."
4. **Bloco de demo** — chat mockado com fundo escuro
5. **3 cards de benefícios**
6. **Linha de pills** com bancos compatíveis
7. **CTA** "Agendar demonstração" → link WhatsApp já existente em `CTA.tsx`

### Bloco de demo (chat com fundo escuro)

Container `rounded-2xl` com `bg-[hsl(215_50%_8%)]` (mesmo tom do `--background` dark do design system) + borda sutil `border-white/10` + `shadow-x3-lg` + glow cyan.

Layout interno:
- Barra superior estilo "janela" com 3 dots (vermelho/amarelo/verde) e label "X3 Agent · conectado ao banco"
- Bolha de mensagem do usuário (alinhada à direita, fundo `bg-white/5`):
  > "Qual foi o faturamento por categoria no último trimestre?"
- Bolha de resposta do agente (alinhada à esquerda, avatar com ícone Bot em gradient-x3):
  - Texto curto: "No Q3/2025, o faturamento total foi R$ 1,84M, com destaque para Eletrônicos (+22% vs Q2)."
  - **Mini gráfico de barras** renderizado em puro JSX/Tailwind (divs com `bg-gradient-to-t from-accent to-accent/40` e altura proporcional) — sem dependência nova. 4 barras: Eletrônicos R$ 720k, Moda R$ 480k, Casa R$ 360k, Outros R$ 280k. Eixo Y simples e labels abaixo.
  - Linha de insight com ícone Sparkles: "Insight: Eletrônicos foi o único segmento com crescimento acima da meta."

Cursor pulsante no fim da resposta para reforçar a sensação de "tempo real".

### 3 cards de benefícios

Grid `md:grid-cols-3 gap-6`, mesmo estilo dos cards de `Services.tsx` (Card com `bg-card/50 backdrop-blur-sm`, ícone em quadrado `bg-gradient-x3`):

1. **MessageSquare** — "Perguntas em linguagem natural" — "Sem SQL, sem dashboards complexos. Pergunte como falaria com um analista."
2. **Database** — "Conecta ao seu banco de dados" — "Integração segura e read-only com os principais SGBDs do mercado."
3. **Sparkles** — "Insights automáticos" — "O agente identifica tendências, anomalias e oportunidades sem você pedir."

### Linha de pills (bancos compatíveis)

Label pequena centralizada: "Compatível com os principais bancos"
Pills horizontais (flex-wrap, centralizadas) com `rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm`:
PostgreSQL · MySQL · BigQuery · Supabase · SQL Server · Snowflake · MongoDB · Oracle

### CTA

Botão único centralizado, mesmo estilo do CTA primário do Hero:
`<a href="https://web.whatsapp.com/send?phone=5521965616062&text=Olá!%20Quero%20agendar%20uma%20demonstração%20do%20X3%20Agent." target="_blank">` com Button `bg-gradient-x3 size=lg` "Agendar demonstração" + ícone ArrowRight.

### Detalhes técnicos

- Arquivo: `src/components/X3Agent.tsx`, exportado default
- `id="x3-agent"` na `<section>` para permitir âncora futura
- Background da seção: `bg-gradient-to-b from-background to-secondary/20` (transição suave do Hero para Services)
- Reusar utilities existentes: `text-gradient`, `bg-gradient-x3`, `shadow-x3-lg`, `animate-fade-in-up`, `animate-pulse-glow`
- Ícones: `Bot`, `Database`, `MessageSquare`, `Sparkles`, `ArrowRight`, `BarChart3` de `lucide-react`
- Sem novas dependências; gráfico feito com divs Tailwind
- Editar `src/pages/Index.tsx` para inserir `<X3Agent />` entre `<Hero />` e `<Services />`
- (Opcional, recomendado) adicionar item "X3 Agent" → `#x3-agent` no `navLinks` do `Header.tsx`

### Diagrama de layout

```text
┌─────────────────────────────────────────┐
│  • Lançamento · Novo produto            │
│                                         │
│        Headline com gradiente           │
│        Subtítulo de 2 linhas            │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ ● ● ●  X3 Agent · conectado       │  │
│  │                                   │  │
│  │            [pergunta usuário ▶]   │  │
│  │  [🤖 resposta + gráfico barras]   │  │
│  │      ▮ ▮ ▮ ▮  (Eletr/Moda/...)    │  │
│  │  ✨ Insight: ...                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌────────┐ ┌────────┐ ┌────────┐       │
│  │benef 1 │ │benef 2 │ │benef 3 │       │
│  └────────┘ └────────┘ └────────┘       │
│                                         │
│  Postgres · MySQL · BigQuery · ...      │
│                                         │
│        [ Agendar demonstração → ]       │
└─────────────────────────────────────────┘
```
