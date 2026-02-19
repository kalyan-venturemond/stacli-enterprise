import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
        >
          Eliminate Operational Bottlenecks
          <br />
          <span className="text-gradient">Engineer Systems Built for Scale</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Let's discuss how intelligent infrastructure can transform your operations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => window.open("https://cal.com/venture-mond-jsjuux/stacli-discovery-call-15-or-30-minutes", "_blank")}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Book a Strategy Session
          </button>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border border-input bg-background hover:bg-accent hover:text-accent-foreground text-foreground px-10 py-4 rounded-lg text-base font-semibold transition-colors w-full sm:w-auto"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
