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

const Clients = () => (
  <section id="clientes" className="bg-background pb-20 sm:pb-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mb-10 text-center text-sm font-medium text-muted-foreground">Empresas que confiam na X3</p>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {clients.map((client) => (
          <div key={client.name} className="flex h-28 items-center justify-center rounded-2xl bg-card p-6 grayscale shadow-x3 transition-all duration-300 hover:grayscale-0 md:h-32">
            <img src={client.logo} alt={`Logo ${client.name}`} loading="lazy" className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
