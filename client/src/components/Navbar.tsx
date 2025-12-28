import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Oils" },
  { href: "/timeline", label: "Our Purity Journey" },
  { href: "/facilities", label: "Why Choose Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/60 backdrop-blur-2xl border-b border-white/20 shadow-sm"
        : "bg-white/30 backdrop-blur-xl border-b border-white/10"
        }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
            <img src={logo} alt="Sachkhand Logo" className="h-10 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-primary font-heading uppercase tracking-tight">SACHKHAND</span>
              <span className="text-sm font-light text-foreground/70 font-heading">Mustard Oil</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium text-sm transition-colors duration-200 ${location === link.href
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
                  }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="flex flex-col items-end text-xs font-medium text-foreground/80 leading-tight">
              <a href="tel:+919999999999" className="hover:text-primary transition-colors" data-testid="link-phone-header">
                +91 9814144368
              </a>
              <a href="mailto:info@sachkhandmustardoil.com" className="hover:text-primary transition-colors" data-testid="link-email-header">
                info@sachkhandmustardoil.com
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t shadow-lg" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${location === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-muted"
                  }`}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <div className="flex flex-col gap-2 pt-2 border-t mt-2">
                <a href="tel:+919999999999" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-center py-2" data-testid="link-phone-mobile">
                  +91 9814144368
                </a>
                <a href="mailto:info@sachkhandmustardoil.com" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-center py-2" data-testid="link-email-mobile">
                  info@sachkhandmustardoil.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
