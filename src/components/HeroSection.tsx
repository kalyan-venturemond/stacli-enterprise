import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";


const HeroSection = () => {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    if (id.startsWith("/")) {
      navigate(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/home/bg1.gif" alt="Background Animation" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20 flex flex-col items-center text-center">
        <RevealOnScroll>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground drop-shadow-sm">
            Engineering Intelligent Infrastructure for{" "}
            <span className="text-gradient">Real-World Scale</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI agents, automation systems, and enterprise platforms designed to eliminate operational friction and accelerate execution.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => window.location.href = "https://cal.com/venture-mond-jsjuux/stacli-discovery-call-15-or-30-minutes"}
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Book Strategy Call
            </button>
            <button
              onClick={() => scrollTo("#capabilities")}
              className="px-10 py-4 rounded-full text-base font-semibold text-foreground border border-white/10 hover:bg-white/5 transition-all hover:scale-105 backdrop-blur-sm"
            >
              Explore Capabilities
            </button>
          </div>
        </RevealOnScroll>


      </div>
    </section>
  );
};
export default HeroSection;
