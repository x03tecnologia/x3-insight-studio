// Lista de clientes — adicione novas logos ao array conforme forem enviadas.
// Cada item: { name, logo (url do .asset.json), website? (opcional, torna a logo clicável) }
const clients: Array<{ name: string; logo: string; website?: string }> = [
  // Exemplo (substituir conforme as logos forem enviadas):
  // { name: "Empresa X", logo: empresaXLogo.url, website: "https://empresax.com" },
];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Clientes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Empresas que já transformamos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Marcas que confiam na X3 Tecnologia para impulsionar seus resultados com dados e IA.
          </p>
        </div>

        {clients.length === 0 ? (
          <div className="text-center text-muted-foreground/70 text-sm italic">
            Em breve, as logos dos nossos clientes aparecerão aqui.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {clients.map((client) => {
              const content = (
                <div className="h-24 md:h-28 flex items-center justify-center p-4 md:p-6 rounded-xl bg-card border border-border/60 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              );

              return client.website ? (
                <a
                  key={client.name}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar site de ${client.name}`}
                >
                  {content}
                </a>
              ) : (
                <div key={client.name}>{content}</div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
