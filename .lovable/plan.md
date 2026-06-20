## Adicionar logos dos clientes

Vou subir as 4 logos como Lovable Assets (CDN) e adicioná-las à array `clients` no componente `src/components/Clients.tsx`, sem links.

### Logos a adicionar
1. Zane — fundo claro, logo verde
2. Kebab Shop — fundo branco, logo preto
3. Atelier dos Sabores — fundo preto, logo branco
4. Oakberry — fundo branco, logo roxo

### Tratamento visual
Como as logos têm fundos diferentes (algumas claras, Atelier com fundo preto), vou ajustar o container de cada card para usar fundo branco uniforme (`bg-white`) com leve padding, de modo que todas as logos fiquem visualmente consistentes na grade — independentemente do tema (claro/escuro) do site. Isso evita que a logo do Atelier "suma" em fundo escuro, ou que logos pretas fiquem ilegíveis.

Hover effects existentes (border highlight, leve elevação) são mantidos.

### Mudanças técnicas
1. Upload das 4 imagens via `lovable-assets create` a partir de `/mnt/user-uploads/`, gerando `.asset.json` em `src/assets/clients/`.
2. Importar os 4 pointers no topo de `src/components/Clients.tsx`.
3. Substituir a array `clients` vazia/placeholder por 4 entradas `{ name, logo }` (sem `website`).
4. Ajustar o container da logo para `bg-white` com padding adequado, garantindo contraste para todas.
5. Remover o estado "placeholder vazio" já que agora há logos.

### Próximos passos
Quando vier a próxima leva de logos, basta enviar — adiciono no mesmo padrão.