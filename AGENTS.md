# Project architecture rules

- Keep the landing page organized as focused section components composed in `src/pages/Index.tsx`, so positioning and content can evolve without coupling the full page.
- Keep repeated capability, benefit, and navigation content in typed data arrays near their rendering component, so the commercial narrative remains easy to maintain.
- Keep the complete solution taxonomy and page content centralized in `src/data/solutions.ts`, so menus, landing sections, and detail routes stay synchronized.