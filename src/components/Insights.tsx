import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  { title: "AI in Logistics", teaser: "How autonomous agents are transforming supply chain coordination and reducing SLA delays." },
  { title: "Workflow Intelligence", teaser: "The shift from rule-based automation to context-aware intelligent workflows." },
  { title: "Automation ROI", teaser: "Measuring real impact: frameworks for quantifying automation returns." },
  { title: "Infrastructure Thinking", teaser: "Why platform engineering is the foundation of sustainable AI adoption." },
];

const Insights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Insights</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Insights
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card p-8 group hover:border-primary/30 transition-colors duration-300 cursor-pointer"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.teaser}</p>
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Read more <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
