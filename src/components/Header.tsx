import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoX3 from "@/assets/logo-x3.png";
import { Link } from "react-router-dom";
import { solutionAreas } from "@/data/solutions";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#expertise", label: "Expertise" },
    { href: "/#x3-agent", label: "X3 Agent" },
    { href: "/#clientes", label: "Clientes" },
    { href: "/#contato", label: "Contato" },
    { href: "https://blog.x3tecnologia.com/", label: "Blog", external: true },
  ];

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b border-border/60 backdrop-blur-xl ${isMenuOpen ? "bg-background" : "bg-background/90"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoX3} 
              alt="X3 Tecnologia" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 bg-transparent px-2 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground">
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[min(1060px,calc(100vw-3rem))] bg-popover p-7">
                      <div className="mb-6 flex items-end justify-between border-b border-border pb-5">
                        <div>
                          <p className="text-xs font-semibold uppercase text-accent">Portfólio X3</p>
                          <p className="mt-2 text-xl font-semibold text-foreground">Tecnologia conectada ao resultado.</p>
                        </div>
                        <NavigationMenuLink asChild>
                          <Link to="/solucoes" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">Ver todas <ArrowUpRight className="h-4 w-4" /></Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid grid-cols-5 gap-6">
                        {solutionAreas.map((area) => (
                          <div key={area.id}>
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><area.icon className="h-4 w-4 text-accent" />{area.name}</div>
                            <ul className="mt-4 space-y-3">
                              {area.solutions.map((solution) => (
                                <li key={solution.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link to={`/solucoes/${solution.slug}`} className="block text-xs leading-snug text-muted-foreground transition-colors hover:text-foreground">{solution.shortTitle}</Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="h-11 px-5">
              <a href="/#contato">Fale com a X3 <ArrowUpRight /></a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border bg-background py-4 animate-fade-in lg:hidden">
            <nav className="flex flex-col gap-4">
              <details className="group border-b border-border pb-4">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-foreground">
                  Soluções <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-3 space-y-5 border-l border-border pl-4">
                  {solutionAreas.map((area) => (
                    <div key={area.id}>
                      <p className="text-xs font-semibold text-foreground">{area.name}</p>
                      <div className="mt-2 grid gap-2">
                        {area.solutions.map((solution) => (
                          <Link key={solution.slug} to={`/solucoes/${solution.slug}`} className="text-xs text-muted-foreground" onClick={() => setIsMenuOpen(false)}>{solution.shortTitle}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link to="/solucoes" className="inline-flex items-center gap-2 text-sm font-semibold text-primary" onClick={() => setIsMenuOpen(false)}>Ver todas <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </details>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full">
                <a href="/#contato" onClick={() => setIsMenuOpen(false)}>Fale com a X3</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
