import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Infrastructure Assessment", desc: "Deep analysis of existing systems, workflows, and bottlenecks." },
  { icon: PenTool, num: "02", title: "Architecture Design", desc: "Blueprint for scalable, intelligent infrastructure." },
  { icon: Rocket, num: "03", title: "Engineering & Deployment", desc: "Production-grade implementation with rigorous testing." },
  { icon: TrendingUp, num: "04", title: "Optimization & Scale", desc: "Continuous improvement and performance tuning." },
];

const Approach = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Approach</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How We Work
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative glass-card p-8 group hover:border-primary/30 transition-colors duration-300"
            >
              <span className="font-display text-5xl font-bold text-primary/10 absolute top-4 right-6">{step.num}</span>
              <step.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
