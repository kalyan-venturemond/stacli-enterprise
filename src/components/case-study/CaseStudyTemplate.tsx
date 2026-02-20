import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Server, BarChart3, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CaseStudy } from '@/data/caseStudies';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CaseStudyTemplateProps {
    data: CaseStudy;
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({ data }) => {
    // SEO Technical Requirements
    // In a real Next.js app, use 'next/head'. Here in Vite, we update document.title manually.
    useEffect(() => {
        document.title = data.seo.title;
        // Find/Create meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', data.seo.description);
    }, [data]);

    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-emerald-500/30">
            <Navbar />

            <article>
                {/* 1. HERO SECTION */}
                <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
                    <Section className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <Link to="/#case-studies" className="inline-flex items-center text-muted-foreground hover:text-emerald-400 transition-colors text-sm font-medium group">
                                <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Case Studies
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {data.hero.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="border-emerald-700/50 text-emerald-400 bg-emerald-950/10 px-3 py-1 text-sm tracking-wide">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            {data.hero.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
                            {data.hero.subtitle}
                        </p>

                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-muted/20 border border-white/10 flex items-center justify-center relative group">
                            {/* Placeholder Image Block */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 to-black/50" />
                            <div className="text-center p-6 z-10">
                                <span className="block text-emerald-500/50 mb-2">
                                    <Globe className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                </span>
                                <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                                    {data.hero.imageLabel}
                                </p>
                            </div>
                        </div>
                    </Section>
                </section>

                {/* 2. CLIENT CONTEXT / BACKGROUND */}
                <section className="py-20 px-6 md:px-12 lg:px-24 bg-black/20">
                    <Section className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                            <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                            Client Context
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            {data.clientContext.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </Section>
                </section>

                {/* 3. THE PROBLEM (CHALLENGE) */}
                <section className="py-20 px-6 md:px-12 lg:px-24">
                    <Section className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-white flex items-center gap-3">
                            <span className="w-1 h-8 bg-pink-600 rounded-full" />
                            {data.challenge.title}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {data.challenge.points.map((point, idx) => (
                                <Card key={idx} className="bg-card/30 border-white/5 p-6 backdrop-blur-sm hover:border-white/10 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 min-w-8">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500 font-bold text-sm">
                                                {idx + 1}
                                            </span>
                                        </div>
                                        <p className="text-lg text-gray-300">{point}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Section>
                </section>

                {/* 4. SOLUTION ARCHITECTURE */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-emerald-950/10 to-transparent border-y border-white/5">
                    <Section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                                <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                                {data.solution.title}
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground mb-8">
                                {data.solution.description.map((desc, idx) => (
                                    <p key={idx}>{desc}</p>
                                ))}
                            </div>
                            <ul className="space-y-4">
                                {data.solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/90">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center relative shadow-2xl shadow-emerald-900/10">
                            {/* Placeholder Diagram */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 to-transparent opacity-50" />
                            <div className="text-center p-6 z-10">
                                <Server className="w-16 h-16 mx-auto mb-6 text-emerald-500/40" />
                                <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest border border-dashed border-white/20 p-4 rounded bg-black/20">
                                    {data.solution.imageLabel}
                                </p>
                            </div>
                        </div>
                    </Section>
                </section>

                {/* 5. IMPLEMENTATION APPROACH */}
                <section className="py-20 px-6 md:px-12 lg:px-24">
                    <Section className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-white">How It Was Implemented</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {data.implementation.steps.map((step, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="p-6 h-full border border-white/10 rounded-lg bg-card/20 hover:bg-card/40 transition-colors">
                                        <div className="text-5xl font-bold text-white/5 mb-4 font-mono group-hover:text-emerald-500/10 transition-colors">
                                            0{idx + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.description}</p>
                                    </div>
                                    {idx < data.implementation.steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </Section>
                </section>

                {/* 6. RESULTS & IMPACT */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-emerald-950/5 border-t border-white/5">
                    <Section className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-white flex items-center gap-3">
                            <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                            Measurable Outcomes
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {data.results.metrics.map((metric, idx) => (
                                <Card key={idx} className="bg-transparent border-0 p-8 text-center hover:bg-white/5 transition-colors duration-500">
                                    <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-white to-emerald-400 mb-4 tracking-tighter">
                                        {metric.value}
                                    </div>
                                    <div className="h-1 w-12 bg-emerald-600/50 mx-auto mb-4" />
                                    <p className="text-lg md:text-xl text-gray-400 font-medium">
                                        {metric.label}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </Section>
                </section>

                {/* 7. WHY THIS MATTERS */}
                <section className="py-20 px-6 md:px-12 lg:px-24">
                    <Section className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6 text-white">Why This Matters</h2>
                        <p className="text-xl md:text-2xl text-gray-300 leading-normal font-light">
                            “{data.whyMatters.content}”
                        </p>
                    </Section>
                </section>

                {/* 8. CTA SECTION */}
                <section className="py-32 px-6 text-center border-t border-white/10 bg-gradient-to-b from-background to-emerald-950/20">
                    <Section className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Want Similar Results?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10">
                            Automate your enterprise workflows with autonomous AI agents.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-6 h-auto">
                                Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto" asChild>
                                <Link to="/#capabilities">Explore Capabilities</Link>
                            </Button>
                        </div>
                    </Section>
                </section>
            </article>

            {/* Footer Navigation helpers (breadcrumby) */}
            <div className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 bg-background">
                <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                <span className="mx-2">•</span>
                <Link to="/#industries" className="hover:text-emerald-400 transition-colors">Industries</Link>
                <span className="mx-2">•</span>
                <span className="text-white/20">Case Studies</span>
                <span className="mx-2">•</span>
                <span className="text-white">{data.hero.title}</span>
            </div>

            <Footer />
        </main>
    );
};

export default CaseStudyTemplate;
