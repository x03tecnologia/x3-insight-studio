## Mudanças

### 1. `src/components/Header.tsx`
- Adicionar item **"Blog"** no array `navLinks`, após "Contato", com `href: "https://blog.x3tecnologia.com/"`.
- Como é link externo, renderizar com `target="_blank"` e `rel="noopener noreferrer"` (tratar via condicional `link.external` ou checagem `href.startsWith("http")`).
- Aplicar tanto no menu desktop quanto no mobile.

### 2. `src/components/Footer.tsx`
- Em "Links Rápidos", adicionar novo `<li>` com link **"Blog"** abaixo de "Contato", apontando para `https://blog.x3tecnologia.com/` com `target="_blank"` e `rel="noopener noreferrer"`.

Sem mudanças em outros arquivos.
