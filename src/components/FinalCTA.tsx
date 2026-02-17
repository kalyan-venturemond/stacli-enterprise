import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Eliminate Operational Bottlenecks.
            <br />
            <span className="text-gradient">Engineer Systems Built for Scale.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how intelligent infrastructure can transform your operations.
          </p>
          <button className="mt-10 bg-primary text-primary-foreground px-10 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity">
            Book a Strategy Session
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
