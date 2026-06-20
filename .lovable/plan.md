# Plano: Seção de Logos de Clientes

## O que será feito

Criar uma nova seção na landing page entre **Serviços** e **Por que nos escolher** (exatamente no espaço marcado em vermelho no print), exibindo as logos dos clientes em **grade estática centralizada**.

## Estrutura da seção

- **Eyebrow** (pequeno texto azul em maiúsculas): `NOSSOS CLIENTES`
- **Título principal**: `Empresas que já transformamos`
- **Subtítulo curto**: frase de apoio (ex: *"Marcas que confiam na X3 Tecnologia para impulsionar seus resultados com dados e IA."*)
- **Grade de logos** centralizada:
  - Desktop: 4 a 5 logos por linha
  - Tablet: 3 por linha
  - Mobile: 2 por linha
  - Cada logo em um "container" com altura uniforme, padding consistente e alinhamento central, garantindo que logos de proporções diferentes fiquem visualmente equilibradas
  - Leve hover (sutil elevação ou aumento de opacidade) para dar vida sem distrair

## Como enviar as logos

Você pode me enviar **uma a uma** nas próximas mensagens. Para cada logo, me diga:
1. **Nome da empresa** (para alt text e SEO)
2. **Site oficial** (opcional — se quiser que a logo seja clicável)

Vou aceitar qualquer formato (PNG, JPG, SVG, com ou sem fundo). Para manter consistência visual, vou:
- Padronizar todas com a mesma altura máxima
- Centralizar dentro de cards de tamanho uniforme
- Se vierem com fundos diferentes, aplicar um leve tratamento (ex: fundo branco sutil ou container neutro) para que fiquem harmônicas

## Detalhes técnicos

- Criar `src/components/Clients.tsx` com a grade responsiva (Tailwind grid + tokens semânticos do design system, sem cores hardcoded)
- Inserir `<Clients />` em `src/pages/Index.tsx` entre `<Services />` e `<WhyUs />` (ou o nome equivalente do componente "Por que nos escolher")
- Cada logo enviada será armazenada via **Lovable Assets** (CDN) através de `lovable-assets create`, gerando pointers `.asset.json` em `src/assets/clients/` — mantém o repositório leve
- Array de clientes no topo do componente para facilitar adicionar/remover/reordenar no futuro

## Fluxo sugerido

1. Você aprova este plano
2. Eu já crio a seção com a estrutura pronta (sem logos ainda, ou com placeholders)
3. Você me envia as logos uma a uma — eu vou adicionando ao array conforme chegam
