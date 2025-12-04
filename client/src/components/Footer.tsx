import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiFacebook, SiX } from "react-icons/si";
import founderImage from "@/assets/founder.jpg";

const productLinks = [
  { label: "Circular Needles", href: "/products" },
  { label: "Flat Needles", href: "/products" },
  { label: "Hosiery Needles", href: "/products" },
  { label: "Interlock Needles", href: "/products" },
  { label: "Transfer Needles", href: "/products" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our History", href: "/timeline" },
  { label: "Facilities", href: "/facilities" },
  { label: "Quality Assurance", href: "/about" },
];

const socialLinks = [
  { icon: SiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: SiX, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-white">
              MEFA NEEDLES
            </h3>
            
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-accent/30 flex-shrink-0">
                <img
                  src={founderImage}
                  alt="Mr. Prem Nath Ji - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-accent">Mr. Prem Nath Ji</p>
                <p className="text-sm text-white/60">Founder & Visionary</p>
                <p className="text-xs text-white/40 mt-1 italic">
                  "Building the future of knitting since 1968"
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              India's premier needle manufacturing company, serving the global
              hosiery industry for over 55 years with precision and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-accent mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-accent mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-accent mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:sales@mefaneedles.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="link-footer-email"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  sales@mefaneedles.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919115550799"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  +91-9115550799
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  B-XXI – 14531, G.T. Road<br />
                  Ludhiana - 141003 (PB.)<br />
                  Punjab, India
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} MEFA NEEDLES Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
