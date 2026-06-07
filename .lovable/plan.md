## Mudanças

### 1. `src/components/X3Agent.tsx` — adicionar segundo CTA e renomear o atual

- Renomear o botão atual "Agendar demonstração" para **"Fale com nossos Consultores"** (mantém link WhatsApp atual e estilo gradient primário).
- Adicionar um novo botão **"Experimente nosso Agente para Demonstrações"** que aponta para `https://agent.x3tecnologia.com/` (target=_blank).
- Layout: dois botões lado a lado, centralizados, com `flex-wrap` para responsivo. O novo botão usa estilo `variant="outline"` com borda em accent e ícone `Sparkles` (ou `Bot`) para diferenciar visualmente do CTA primário sem competir com ele.

```text
[ Experimente nosso Agente ✨ ]   [ Fale com nossos Consultores → ]
       (outline / secondary)              (gradient primário)
```

### 2. `src/components/CTA.tsx` — modernizar os cards de Email e WhatsApp

Manter o conteúdo (email, telefone, links) e o fundo gradient da seção. Atualizar apenas o visual dos dois cards para um look mais moderno e premium:

- **Glassmorphism refinado**: fundo `bg-primary-foreground/5` com `backdrop-blur-xl`, borda dupla (`border border-primary-foreground/15`) e leve highlight no topo via gradiente sutil.
- **Hover elevado**: `hover:-translate-y-1`, sombra suave `hover:shadow-2xl`, borda passa a `border-primary-foreground/40`, e um glow radial sutil aparece atrás do card.
- **Ícone com profundidade**: container do ícone com `bg-gradient-to-br from-primary-foreground/25 to-primary-foreground/5`, borda `border-primary-foreground/20`, ring sutil no hover, e mantém o scale-110.
- **Tipografia hierárquica**: título alinhado à esquerda (não centralizado), subtítulo `text-primary-foreground/70`, valor (email/telefone) em destaque com `font-medium` e `text-primary-foreground/90`.
- **CTA inline mais limpo**: link "Enviar mensagem" / "Iniciar conversa" com underline animado on hover (`after:` pseudo-elemento) e seta com translate.
- **Pequeno badge de status** no canto superior direito de cada card: pílula discreta com dot pulsante — "Resposta em até 24h" no Email e "Online agora" no WhatsApp — para reforçar conversão.
- Padding aumentado (`p-7 sm:p-8`), bordas `rounded-3xl`, transições suaves `duration-500`.

Sem mudanças em outros componentes, sem novas dependências.
