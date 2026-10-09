# Portfólio completo de soluções X3

## Objetivo
Transformar a navegação atual, concentrada em uma única página, em uma experiência institucional com **páginas próprias para cada solução** e um menu amplo de “Soluções”, inspirado na facilidade de consulta da Insi, mas com identidade, textos e organização próprios da X3.

O site continuará rápido e integrado, porém cada serviço terá uma URL limpa e compartilhável, como `/solucoes/cloud` ou `/solucoes/desenvolvimento-de-software`.

## Menu de Soluções
No computador, “Soluções” abrirá um painel amplo organizado em cinco áreas. No celular, as mesmas áreas aparecerão em grupos expansíveis dentro do menu.

1. **Cloud & Operações**
   - Cloud: Azure, AWS e GCP
   - DevOps
   - Gestão de TI
   - Backup & Continuidade

2. **Produtos Digitais**
   - UX/UI Design
   - Desenvolvimento de Software
   - Produtos Digitais & SaaS
   - Automações e Integrações

3. **Gestão & Qualidade**
   - Project Management
   - Qualidade de Software
   - Equipes Dedicadas & Squads

4. **Dados & IA**
   - Estruturação de áreas de IA
   - Cultura e operação Data-Driven
   - Analytics & Engenharia de Dados
   - Agentes e soluções de IA

5. **Segurança & Continuidade**
   - Segurança da Informação
   - Políticas e Governança
   - Revisões e Auditorias de Segurança

O painel terá nomes claros, uma breve introdução de cada área e acesso direto às páginas, sem incluir parceiros, certificações ou resultados não informados.

## Página inicial
- Substituir a grade atual de seis cards por uma apresentação editorial das cinco áreas estratégicas.
- Destacar Azure, AWS e GCP como plataformas com as quais a X3 trabalha, sem sugerir certificações ou parcerias oficiais.
- Atualizar os textos de “Como atuamos”, diferenciais e rodapé para refletir também DevOps, gestão de projetos, UX/UI, gestão de TI, qualidade de software e estruturação de áreas de IA e dados.
- Manter X3 Agent, clientes, contatos, Blog e os demais elementos já existentes.

## Páginas de solução
Criar uma página própria para cada item do menu, usando uma estrutura visual consistente:

- nome da solução e benefício principal;
- contexto do problema que a X3 resolve;
- entregas e frentes de atuação;
- forma de trabalho da X3;
- soluções relacionadas;
- chamada final para conversar com os consultores.

Os textos serão objetivos e comerciais, baseados somente nas capacidades informadas. Azure, AWS e GCP serão apresentados como tecnologias atendidas, sem alegações de parceria.

## Navegação e experiência
- Manter cabeçalho e rodapé institucionais em todas as páginas.
- Indicar visualmente a área e solução ativa.
- Incluir caminho de navegação e retorno para “Todas as soluções”.
- Garantir acesso direto, atualização e compartilhamento de cada URL.
- Fechar menus ao navegar, ao clicar fora ou ao pressionar Escape; manter navegação por teclado e leitura adequada por tecnologias assistivas.
- Preservar o visual corporativo em azul-marinho, ciano e branco, com adaptação completa para celular.

## Detalhes técnicos
- Centralizar áreas, soluções, URLs, resumos e conteúdo em uma única estrutura tipada para alimentar menu, página inicial, páginas internas e links relacionados.
- Adicionar rotas públicas com React Router, incluindo uma visão geral em `/solucoes` e páginas individuais em `/solucoes/:slug`.
- Criar um layout compartilhado para cabeçalho, conteúdo e rodapé, evitando duplicação entre as páginas.
- Usar o menu de navegação já disponível no projeto como base para o painel no desktop e grupos expansíveis no celular.
- Atualizar título e descrição do navegador conforme a solução acessada.
- Validar URLs diretas, menu desktop e celular, links relacionados, WhatsApp, Blog, contraste, navegação por teclado e ausência de erros.
