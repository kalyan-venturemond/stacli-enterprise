import { ArrowRight, FileText, BarChart2, Share2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";

const caseStudies = [
    {
        title: "Autonomous Logistics Coordination",
        summary: "Reduced SLA breaches by 42% via context-aware routing.",
        slug: "autonomous-logistics-coordination",
        icon: Globe,
        id: "01"
    },
    {
        title: "Intelligent Claims Processing",
        summary: "End-to-end automation cutting cycle time from 3 days to 4 hours.",
        slug: "intelligent-claims-processing",
        icon: FileText,
        id: "02"
    },
    {
        title: "Multi-Agent Supply Chain",
        summary: "Synchronized inventory across global hubs with zero human intervention.",
        slug: "multi-agent-supply-chain",
        icon: Share2,
        id: "03"
    },
    {
        title: "Enterprise Knowledge Graph",
        summary: "Unified data silo access for 5,000+ employees.",
        slug: "enterprise-knowledge-graph",
        icon: BarChart2,
        id: "04"
    }
];

const CaseStudiesSection = () => {
    return (
        <section id="case-studies" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <RevealOnScroll>
                    <div className="mb-16">
                        <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold tracking-wider uppercase mb-6">
                            CASE STUDIES
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                            Successful <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Deployments.</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <RevealOnScroll key={study.slug} delay={index * 0.1}>
                            <div className="group relative">
                                {/* Card Body */}
                                <div className="h-full bg-card/20 backdrop-blur-sm border border-white/5 rounded-2xl p-10 flex flex-col justify-between transition-all duration-500 hover:border-emerald-500/30 hover:bg-card/30">

                                    {/* Top Section: Icon & Index */}
                                    <div className="mb-12">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500 font-display font-bold">
                                            <study.icon size={20} />
                                        </div>
                                    </div>

                                    {/* Middle Section: Content */}
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                                            {study.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm">
                                            {study.summary}
                                        </p>
                                    </div>

                                    {/* Bottom Section: Action */}
                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <Link
                                            to={`/case-study/${study.slug}`}
                                            className="inline-flex items-center text-emerald-500 text-sm font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors"
                                        >
                                            View Case Study <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover Background effect */}
                                <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                <RevealOnScroll delay={0.4}>
                    <div className="mt-20 flex justify-center">
                        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default CaseStudiesSection;