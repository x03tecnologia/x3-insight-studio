import { ArrowRight, Mail, Phone } from "lucide-react";

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
          <p className="text-primary-foreground/80 text-lg mb-12 max-w-xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa
            a alcançar novos patamares com dados e inteligência artificial.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email Card */}
            <a
              href="mailto:x03.tecnologia@gmail.com"
              className="group relative p-7 sm:p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/15 hover:border-primary-foreground/40 hover:-translate-y-1 hover:shadow-2xl hover:bg-primary-foreground/10 transition-all duration-500 text-left overflow-hidden"
            >
              {/* Top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent" />
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary-foreground/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Status badge */}
              <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-[10px] font-medium text-primary-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/80 animate-pulse" />
                Resposta em até 24h
              </div>

              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-foreground/25 to-primary-foreground/5 border border-primary-foreground/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary-foreground/20 transition-all duration-500">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="text-primary-foreground font-semibold text-lg mb-1.5">Email</h3>
              <p className="text-primary-foreground/90 text-sm font-medium mb-5 break-all">x03.tecnologia@gmail.com</p>

              <div className="inline-flex items-center text-primary-foreground/80 text-sm font-medium group-hover:text-primary-foreground transition-colors">
                <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary-foreground group-hover:after:w-full after:transition-all after:duration-300">
                  Enviar mensagem
                </span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://web.whatsapp.com/send?phone=5521965616062&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20X3%20Tecnologia."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-7 sm:p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/15 hover:border-primary-foreground/40 hover:-translate-y-1 hover:shadow-2xl hover:bg-primary-foreground/10 transition-all duration-500 text-left overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent" />
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary-foreground/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-[10px] font-medium text-primary-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Online agora
              </div>

              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-foreground/25 to-primary-foreground/5 border border-primary-foreground/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary-foreground/20 transition-all duration-500">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="text-primary-foreground font-semibold text-lg mb-1.5">WhatsApp</h3>
              <p className="text-primary-foreground/90 text-sm font-medium mb-5">+55 21 96561-6062</p>

              <div className="inline-flex items-center text-primary-foreground/80 text-sm font-medium group-hover:text-primary-foreground transition-colors">
                <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary-foreground group-hover:after:w-full after:transition-all after:duration-300">
                  Iniciar conversa
                </span>
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
