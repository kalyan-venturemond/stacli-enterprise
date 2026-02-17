import logo from "@/assets/stacli-logo-nobg.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="STACLI" className="h-8 w-8" />
          <span className="font-display text-lg font-bold text-foreground">STACLI</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} STACLI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
