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
    <section id="clientes" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-label">Relações de confiança</p>
            <h2 className="section-title mt-5">Tecnologia que avança junto com cada negócio.</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
            Empresas que escolheram a X3 para transformar desafios em soluções digitais consistentes.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-32 items-center justify-center border-b border-r border-border bg-card p-6 grayscale transition-all duration-300 hover:grayscale-0 md:h-40 md:p-8"
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
