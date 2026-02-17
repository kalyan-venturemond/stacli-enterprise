import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            Engineering Intelligent Infrastructure for{" "}
            <span className="text-gradient">Real-World Scale</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            AI agents, automation systems, and enterprise platforms designed to eliminate operational friction and accelerate execution.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Book Strategy Call
            </button>
            <button
              onClick={() => scrollTo("#capabilities")}
              className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary transition-colors"
            >
              Explore Capabilities
            </button>
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          {["Enterprise-Grade", "Production-Ready", "Secure", "Measurable ROI"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
