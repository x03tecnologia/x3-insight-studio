import logoX3Footer from "@/assets/logo-x3-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img
              src={logoX3Footer}
              alt="X3 Tecnologia"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Transformamos dados em decisões estratégicas. Consultoria especializada 
              em Ciência de Dados, IA, Engenharia de Dados, Automações e Desenvolvimento de Apps e Sistemas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70 text-sm">Ciência de Dados</li>
              <li className="text-primary-foreground/70 text-sm">Agentes de IA</li>
              <li className="text-primary-foreground/70 text-sm">Engenharia de Dados</li>
              <li className="text-primary-foreground/70 text-sm">Automações</li>
              <li className="text-primary-foreground/70 text-sm">Desenvolvimento de Apps e Sistemas</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-primary-foreground/50 text-sm text-center sm:text-left">
            © {currentYear} X3 Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
