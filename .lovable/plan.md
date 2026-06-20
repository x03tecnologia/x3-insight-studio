## Ajustes na Landing Page

**1) Footer — `src/components/Footer.tsx`**
- Remover a coluna "Serviços" (título + lista com Ciência de Dados, Agentes de IA, Engenharia de Dados, Automações, Desenvolvimento de Apps e Sistemas).
- Manter as demais colunas (Links Rápidos, Contato, etc.) e ajustar o grid para acomodar a remoção.

**2) Card "Agentes de IA" — `src/components/Services.tsx` (ou onde estiver definido)**
- Atualizar a descrição para: *"Desenvolvimento de agentes inteligentes e personalizados para automatizar processos complexos."*

**3) Card de Email — `src/components/CTA.tsx`**
- Remover o `<a href="mailto:...">` (card deixa de ser clicável).
- Remover o texto "Enviar mensagem" e a seta (ícone) ao lado.
- Manter ícone, título "Email", endereço `x03.tecnologia@gmail.com` e o badge "Resposta em até 24h".
