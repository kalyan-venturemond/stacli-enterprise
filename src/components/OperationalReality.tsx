import { motion } from "framer-motion";

const stats = [
  { value: "20–35%", label: "Capacity lost to manual workflows" },
  { value: "Disconnected", label: "Systems creating data silos" },
  { value: "Delayed", label: "Decision cycles slowing execution" },
  { value: "Human-Dependent", label: "Task chains limiting scale" },
];

const OperationalReality = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground max-w-4xl"
        >
          Most Organizations Don't Have a Technology Problem.
          <span className="text-primary block mt-2">They Have a Coordination Problem.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 * i }}
              className="glass-card p-8"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalReality;
