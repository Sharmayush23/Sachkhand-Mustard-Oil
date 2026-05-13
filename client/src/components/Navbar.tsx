import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
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
        ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-white/50 backdrop-blur-sm border-b border-transparent"
        }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
            <img src={logo} alt="Sachkhand Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary font-heading uppercase tracking-tight">SACHKHAND</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.href === "/products") {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 font-medium text-sm transition-colors duration-200 ${location.startsWith("/products")
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                        }`}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full -left-4 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                      <div className="bg-white rounded-xl shadow-2xl border border-border p-2 overflow-hidden backdrop-blur-xl bg-white/95">
                        {products.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="flex flex-col px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group/item"
                          >
                            <span className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">
                              {product.name}
                            </span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                              {product.category === "oils" ? "Premium Oil" : "Essential Feed"}
                            </span>
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-border px-2 pb-1">
                          <Link 
                            href="/products" 
                            className="flex items-center justify-between px-3 py-2 rounded-lg bg-brand-gradient-green text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                          >
                            Explore All
                            <X className="h-3 w-3 rotate-45" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
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
              );
            })}
          </div>

          <div className="hidden md:block">
            <div className="flex flex-col items-end text-xs font-medium text-foreground/60 leading-tight">
              <a href="tel:+919417858885" className="hover:text-primary transition-colors" data-testid="link-phone-header">
                +91 9417858885 / +91 9888565548
              </a>
              <a href="mailto:Amarnath_vinodkumar@yahoo.com" className="hover:text-secondary transition-colors" data-testid="link-email-header">
                Amarnath_vinodkumar@yahoo.com
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-border shadow-lg" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${location === link.href
                  ? "bg-primary/5 text-primary"
                  : "text-foreground/80 hover:bg-muted"
                  }`}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <div className="flex flex-col gap-2 pt-2 border-t border-border mt-2">
                <a href="tel:+919417858885" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-center py-2" data-testid="link-phone-mobile">
                  +91 9417858885 / +91 9888565548
                </a>
                <a href="mailto:Amarnath_vinodkumar@yahoo.com" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors text-center py-2" data-testid="link-email-mobile">
                  Amarnath_vinodkumar@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
