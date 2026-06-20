import zaneLogo from "@/assets/clients/zane.jpeg.asset.json";
import kebabShopLogo from "@/assets/clients/kebab-shop.png.asset.json";
import atelierLogo from "@/assets/clients/atelier-dos-sabores.jpg.asset.json";
import oakberryLogo from "@/assets/clients/oakberry.png.asset.json";

const clients: Array<{ name: string; logo: string }> = [
  { name: "Zane", logo: zaneLogo.url },
  { name: "Kebab Shop", logo: kebabShopLogo.url },
  { name: "Atelier dos Sabores", logo: atelierLogo.url },
  { name: "Oakberry", logo: oakberryLogo.url },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-28 md:h-32 flex items-center justify-center p-5 md:p-6 rounded-xl bg-white border border-border/60 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
