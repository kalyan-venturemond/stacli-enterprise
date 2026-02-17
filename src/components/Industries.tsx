import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industries = [
  {
    name: "Healthcare & Diagnostics",
    challenges: ["Manual patient data handling", "Compliance bottlenecks", "Disconnected clinical systems"],
    deploy: ["AI-powered diagnostic workflows", "Automated compliance reporting", "Integrated patient management"],
    impact: ["30–40% reduction in admin overhead", "1.5× faster diagnostic cycles", "25–35% operational waste reduction"],
  },
  {
    name: "Logistics & Supply Chain",
    challenges: ["Manual coordination", "SLA delays", "Disconnected ERPs"],
    deploy: ["AI dispatch agents", "Automated status workflows", "Event-based alerts"],
    impact: ["30–40% manual reduction", "1.5–2× faster cycles", "25–45% operational waste reduction"],
  },
  {
    name: "Manufacturing",
    challenges: ["Quality control delays", "Production scheduling gaps", "Equipment downtime"],
    deploy: ["Predictive maintenance systems", "Automated production scheduling", "Quality assurance automation"],
    impact: ["35% reduction in downtime", "1.8× faster production cycles", "40% waste reduction"],
  },
  {
    name: "Financial Services",
    challenges: ["Regulatory compliance overhead", "Manual risk assessment", "Fragmented data systems"],
    deploy: ["Automated compliance workflows", "AI-driven risk models", "Unified data pipelines"],
    impact: ["30% compliance cost reduction", "2× faster risk assessment", "35% operational efficiency gain"],
  },
  {
    name: "EdTech",
    challenges: ["Manual content management", "Disconnected learning platforms", "Scaling challenges"],
    deploy: ["AI content orchestration", "Integrated learning pipelines", "Automated assessment systems"],
    impact: ["30% content delivery improvement", "1.5× faster onboarding", "25% cost reduction"],
  },
  {
    name: "Service Businesses",
    challenges: ["Client coordination overhead", "Project tracking gaps", "Manual reporting"],
    deploy: ["AI project management agents", "Automated client workflows", "Real-time reporting dashboards"],
    impact: ["35% operational overhead reduction", "1.5× faster project delivery", "30% cost savings"],
  },
  {
    name: "Tech Startups",
    challenges: ["Infrastructure scaling pain", "Resource allocation", "Manual DevOps"],
    deploy: ["Auto-scaling infrastructure", "AI-driven resource optimization", "CI/CD automation"],
    impact: ["40% infrastructure cost reduction", "2× faster deployments", "30% team productivity gain"],
  },
];

const Industries = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Industries</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Industries We Serve
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {industries.map((ind) => (
              <AccordionItem
                key={ind.name}
                value={ind.name}
                className="glass-card px-8 border-border/50 data-[state=open]:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline py-6">
                  {ind.name}
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Challenges</h4>
                      <ul className="space-y-2">
                        {ind.challenges.map((c) => (
                          <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">What We Deploy</h4>
                      <ul className="space-y-2">
                        {ind.deploy.map((d) => (
                          <li key={d} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Impact</h4>
                      <ul className="space-y-2">
                        {ind.impact.map((im) => (
                          <li key={im} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {im}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
