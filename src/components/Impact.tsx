import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "30–40%", label: "Manual effort reduction" },
  { value: "1.5–2×", label: "Faster execution cycles" },
  { value: "25–45%", label: "Operational waste reduction" },
];

const Impact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Impact</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Measurable Outcomes
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card p-10"
            >
              <p className="font-display text-5xl md:text-6xl font-bold text-gradient">{m.value}</p>
              <p className="mt-4 text-muted-foreground text-base">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-muted-foreground text-lg"
        >
          Enterprise-level execution. Measurable outcomes.
        </motion.p>
      </div>
    </section>
  );
};

export default Impact;
