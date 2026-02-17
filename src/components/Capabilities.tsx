import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Database, Cloud, BrainCircuit } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents & Autonomous Workflows",
    items: ["Customer & partner AI agents", "Exception handling automation", "Event-triggered actions", "Intelligent alerts"],
  },
  {
    icon: Database,
    title: "Data Engineering & Orchestration",
    items: ["Real-time data pipelines", "ERP / CRM integration", "API-first architecture", "Event-driven systems"],
  },
  {
    icon: Cloud,
    title: "Infrastructure & Platform Engineering",
    items: ["Cloud-native systems", "Secure deployments", "High-availability backend", "Performance optimization"],
  },
  {
    icon: BrainCircuit,
    title: "AI Strategy & Implementation",
    items: ["Automation roadmap", "Workflow redesign", "Operational transformation planning"],
  },
];

const Capabilities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What We Engineer
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card p-8 md:p-10 hover:border-primary/30 transition-colors duration-300 group"
            >
              <cap.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{cap.title}</h3>
              <ul className="space-y-2.5">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
