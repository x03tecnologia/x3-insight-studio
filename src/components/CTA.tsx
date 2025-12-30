import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-x3">
      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para transformar seus dados em resultados?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa 
            a alcançar novos patamares com dados e inteligência artificial.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email Card */}
            <a 
              href="mailto:x03.tecnologia@gmail.com"
              className="group p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-primary-foreground font-semibold text-lg mb-2">Email</h3>
              <p className="text-primary-foreground/80 text-sm">x03.tecnologia@gmail.com</p>
              <div className="mt-4 flex items-center text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors">
                Enviar mensagem
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://web.whatsapp.com/send?phone=5521965616062&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20X3%20Tecnologia."
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-primary-foreground font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-primary-foreground/80 text-sm">+55 21 96561-6062</p>
              <div className="mt-4 flex items-center text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors">
                Iniciar conversa
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
