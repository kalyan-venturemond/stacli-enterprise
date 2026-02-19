
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/stacli-logo-nobg.png";
import { Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    // If it's a route (starts with /), navigate to it
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Handle hash links
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Industries", href: "#industries" },
    { label: "Approach", href: "#approach" },
    { label: "Impact", href: "#impact" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-background border-t border-border/50 pt-16 pb-8 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="STACLI" className="h-10 w-10" />
              <span className="font-display text-2xl font-bold text-foreground">STACLI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              AI agents, automation systems, and enterprise platforms designed to eliminate operational friction and accelerate execution.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-6">Explore</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLinkClick("/privacy-policy")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/terms")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:hello@stacli.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  hello@stacli.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  4th Floor, Bizness Square, Hitec City, Hyderabad – 500084
                </p>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} STACLI. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
