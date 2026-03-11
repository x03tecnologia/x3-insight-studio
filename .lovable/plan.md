

## Plano: Adicionar serviço "Desenvolvimento de Aplicativos / Sistemas"

Vou adicionar um novo card na seção de serviços com o título **"Desenvolvimento de Apps & Sistemas"** e uma descrição adequada ao contexto da empresa.

### Alteração

**Arquivo:** `src/components/Services.tsx`

- Adicionar um novo item ao array `services` com:
  - Ícone: `Monitor` ou `AppWindow` do Lucide (representando desenvolvimento de software)
  - Título: "Desenvolvimento de Apps & Sistemas"
  - Descrição focada em desenvolvimento de aplicações web, mobile e sistemas sob medida

- O grid atual (3 colunas) passará de 6 para 7 cards, o que ficará com 3+3+1. Alternativa: manter 6 reorganizando, ou ajustar para que fique visualmente equilibrado.

Como 7 cards fica desbalanceado no grid de 3 colunas, posso usar `lg:grid-cols-3` mantendo o layout atual (ficará 3-3-1) ou não alterar nada e deixar o card centralizado na última linha via CSS. O comportamento padrão do grid já cuida disso de forma aceitável.

