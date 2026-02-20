import { useState } from "react";
import { ArrowRight, ArrowUp, Truck, Stethoscope, Factory, ShieldCheck, GraduationCap, Briefcase, Server } from "lucide-react";
import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";

const caseStudies = [
    {
        title: "Autonomous Logistics Coordination",
        summary: "Eliminating manual dispatch inefficiencies with AI-driven orchestration.",
        slug: "autonomous-logistics-coordination",
        icon: Truck,
        id: "01"
    },
    {
        title: "Intelligent Clinical Workflow Automation",
        summary: "Transforming diagnostic operations with AI-driven orchestration.",
        slug: "intelligent-clinical-workflow-automation",
        icon: Stethoscope,
        id: "02"
    },
    {
        title: "Predictive Production & Operations Orchestration",
        summary: "Driving manufacturing efficiency with AI-powered automation.",
        slug: "predictive-production-operations",
        icon: Factory,
        id: "03"
    },
    {
        title: "Intelligent Risk & Compliance Automation",
        summary: "Modernizing financial operations with AI-driven decision systems.",
        slug: "intelligent-risk-compliance",
        icon: ShieldCheck,
        id: "04"
    },
    {
        title: "Intelligent Learning Orchestration Platform",
        summary: "Scaling content delivery and learner engagement with AI automation.",
        slug: "intelligent-learning-orchestration",
        icon: GraduationCap,
        id: "05"
    },
    {
        title: "Autonomous Service Operations Platform",
        summary: "Streamlining client delivery and revenue workflows with AI orchestration.",
        slug: "autonomous-service-operations",
        icon: Briefcase,
        id: "06"
    },
    {
        title: "AI-Native Infrastructure for High-Growth Startups",
        summary: "Building scalable operating systems for product-led companies.",
        slug: "ai-native-infrastructure",
        icon: Server,
        id: "07"
    }
];

const CaseStudiesSection = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleStudies = showAll ? caseStudies : caseStudies.slice(0, 4);

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
                            <span className="text-primary">Deployments.</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {visibleStudies.map((study, index) => (
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

                {caseStudies.length > 4 && (
                    <RevealOnScroll delay={0.2}>
                        <div className="mt-16 flex justify-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                type="button"
                                className="group px-8 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-sm font-bold uppercase tracking-widest hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.05)] hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]"
                            >
                                {showAll ? (
                                    <>View Less <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" /></>
                                ) : (
                                    <>View More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></>
                                )}
                            </button>
                        </div>
                    </RevealOnScroll>
                )}

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