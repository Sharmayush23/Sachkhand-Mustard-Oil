import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiFacebook, SiX } from "react-icons/si";
import logo from "@/assets/logo.png";

const productLinks = [
  { label: "Mustard Oil", href: "/products" },
  { label: "Mustard Cake", href: "/products" },
  { label: "Cotton Refined Oil", href: "/products" },
  { label: "Cattle Feed", href: "/products" },
  { label: "Cottonseed Cake", href: "/products" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Facilities", href: "/facilities" },
  { label: "Timeline", href: "/timeline" },
  { label: "Contact Us", href: "/contact" },
];


const socialLinks = [
  { icon: SiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: SiX, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sachkhand Logo" className="h-12 w-auto" />
              <h3 className="font-heading text-2xl font-bold text-white">
                Sachkhand
              </h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premier mustard oil brand, dedicated to purity and quality for over 45 years. Delivering the essence of health and tradition to your kitchen.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-semibold text-primary mb-6 uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-semibold text-primary mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex justify-center md:justify-start">
                <a
                  href="mailto:Amarnath_vinodkumar@yahoo.com"
                  className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-email"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  Amarnath_vinodkumar@yahoo.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a
                  href="tel:+919417858885"
                  className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +91 94178 58885 / +91 98885 65548
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-center md:text-left">
                  Paali Nagar, Guru Nanak Nagar<br />
                  Opposite Smart Store, Amloh Road<br />
                  Khanna - 141401, Punjab
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-white/10 hover:scale-110"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Sachkhand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
