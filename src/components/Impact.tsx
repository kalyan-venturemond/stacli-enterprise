import { motion } from "framer-motion";

const metrics = [
  { value: "30–40%", label: "Manual effort reduction" },
  { value: "1.5–2×", label: "Faster execution cycles" },
  { value: "25–45%", label: "Operational waste reduction" },
];

const Impact = () => {
  return (
    <section id="impact" className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 * i }}
              className="glass-card p-10"
            >
              <p className="font-display text-5xl md:text-6xl font-bold text-gradient">{m.value}</p>
              <p className="mt-4 text-muted-foreground text-base">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          className="mt-12 text-muted-foreground text-lg"
        >
          Enterprise-level execution. Measurable outcomes.
        </motion.p>
      </div>
    </section>
  );
};

export default Impact;
