import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  { title: "Autonomous Logistics Coordination", teaser: "Reduced SLA breaches by 42% via context-aware routing." },
  { title: "Intelligent Claims Processing", teaser: "End-to-end automation cutting cycle time from 3 days to 4 hours." },
  { title: "Multi-Agent Supply Chain", teaser: "Synchronized inventory across global hubs with zero human intervention." },
  { title: "Enterprise Knowledge Graph", teaser: "Unified data silo access for 5,000+ employees." },
];

const Insights = () => {
  return (
    <section id="case-studies" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Case Studies</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Case Studies
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 group hover:border-primary/30 transition-colors duration-300 cursor-pointer"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.teaser}</p>
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                View Case Study <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
