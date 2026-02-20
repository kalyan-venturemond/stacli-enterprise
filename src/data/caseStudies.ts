export interface CaseStudy {
    id: string;
    slug: string;
    hero: {
        title: string;
        subtitle: string;
        tags: string[];
        imageLabel: string;
    };
    clientContext: {
        content: string[];
    };
    challenge: {
        title: string;
        points: string[];
    };
    solution: {
        title: string;
        description: string[];
        imageLabel: string;
        features: string[];
    };
    implementation: {
        steps: { title: string; description: string }[];
    };
    results: {
        metrics: { value: string; label: string }[];
    };
    whyMatters: {
        content: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: "1",
        slug: "autonomous-logistics-coordination",
        hero: {
            title: "Autonomous Logistics Coordination",
            subtitle: "Eliminating manual dispatch inefficiencies with AI-driven orchestration",
            tags: ["Logistics", "Autonomous Agents", "Supply Chain"],
            imageLabel: "PLACEHOLDER – Case Study Hero Image"
        },
        clientContext: {
            content: [
                "A leading enterprise logistics provider operating across 12 countries faced scaling challenges due to heavy reliance on manual dispatch and coordination.",
                "Managing over 5,000 daily shipments, the operations team struggled with real-time route optimization and carrier selection, leading to increased costs and delays.",
                "The client needed a solution to automate decision-making processes and integrate seamlessly with their existing TMS (Transportation Management System)."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Manual coordination across fragmented systems resulted in data silos.",
                "High frequency of SLA breaches due to slow response times.",
                "Inability to dynamically reroute shipments in response to traffic or weather delays.",
                "Human-dependent workflows created bottlenecks during peak seasons."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We developed a multi-agent system that autonomously coordinates logistics operations, from carrier selection to final delivery tracking.",
                "The system integrates with existing ERP and TMS platforms, ingesting real-time data to make sub-second dispatch decisions."
            ],
            imageLabel: "PLACEHOLDER – System / AI Architecture Diagram",
            features: [
                "AI Agents for predictive route optimization",
                "Real-time data pipelines for tracking and alerts",
                "Automated carrier negotiation and booking",
                "Self-healing workflows for exception handling"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Assessment",
                    description: "Analyzed existing data flows and identified integration points."
                },
                {
                    title: "Architecture Design",
                    description: "Designed a scalable multi-agent event-driven architecture."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Built and deployed the solution in phases to minimize disruption."
                },
                {
                    title: "Optimization & Scaling",
                    description: "Fine-tuned agent behaviors and scaled to all operating regions."
                }
            ]
        },
        results: {
            metrics: [
                { value: "35%", label: "Reduction in manual effort" },
                { value: "2x", label: "Faster execution cycles" },
                { value: "40%", label: "Operational waste reduction" }
            ]
        },
        whyMatters: {
            content: "This transformation allows the client to scale operations without linearly increasing headcount, ensuring long-term competitiveness in a low-margin industry."
        },
        seo: {
            title: "AI Automation Case Study: Autonomous Logistics Coordination - STACLI",
            description: "Discover how STACLI's autonomous AI agents reduced manual logistics effort by 35% and doubled execution speed for a global enterprise provider.",
            keywords: ["AI automation case study logistics", "autonomous logistics", "supply chain AI", "intelligent dispatch"]
        }
    },
    {
        id: "2",
        slug: "intelligent-claims-processing",
        hero: {
            title: "Intelligent Claims Processing",
            subtitle: "Accelerating settlements with AI-powered document understanding",
            tags: ["Insurance", "Document Intelligence", "FinTech"],
            imageLabel: "PLACEHOLDER – Claims Processing Hero Image"
        },
        clientContext: {
            content: [
                "A national insurance carrier was overwhelmed by a 200% surge in claims volume following a seasonal spike.",
                "Manual review of unstructured documents (PDFs, images, emails) caused significant backlogs and customer dissatisfaction.",
                "Automation was critical to improve processing speed and accuracy without compromising compliance."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Unstructured data trapped in diverse document formats.",
                "High error rates in manual data entry.",
                "Long turnaround times leading to customer churn.",
                "Strict regulatory compliance requirements."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We implemented an intelligent document processing pipeline using computer vision and NLP models.",
                "The system automatically extracts key information, validates claims against policy rules, and flags anomalies for human review."
            ],
            imageLabel: "PLACEHOLDER – Architecture Diagram",
            features: [
                "OCR and NLP for document extraction",
                "Automated fraud detection algorithms",
                "Rule-based decision engine for instant approvals",
                "Seamless integration with core claims systems"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Data Analysis",
                    description: "Evaluated historical claims data to train ML models."
                },
                {
                    title: "Model Development",
                    description: "Developed and tuned custom extraction models."
                },
                {
                    title: "Integration",
                    description: "Connected the AI pipeline to the claims management system."
                },
                {
                    title: "Validation",
                    description: "Rigorous testing to ensure 99.9% accuracy."
                }
            ]
        },
        results: {
            metrics: [
                { value: "70%", label: "Reduction in processing time" },
                { value: "95%", label: "Accuracy in data extraction" },
                { value: "50%", label: "Cost savings per claim" }
            ]
        },
        whyMatters: {
            content: "By automating routine claims, the insurer can focus human expertise on complex cases, improving both efficiency and customer trust."
        },
        seo: {
            title: "AI Case Study: Intelligent Claims Processing - STACLI",
            description: "Learn how intelligent document processing reduced claims settlement time by 70% for a major insurance carrier.",
            keywords: ["insurance automation", "claims processing AI", "document intelligence case study"]
        }
    },
    {
        id: "3",
        slug: "multi-agent-supply-chain",
        hero: {
            title: "Multi-Agent Supply Chain",
            subtitle: "Optimizing inventory and procurement with decentralized AI agents",
            tags: ["Supply Chain", "Multi-Agent Systems", "Procurement"],
            imageLabel: "PLACEHOLDER – Supply Chain Hero Image"
        },
        clientContext: {
            content: [
                "A global manufacturing conglomerate struggled with supply chain visibility and responsiveness.",
                "Disruptions in raw material availability often led to production halts and revenue loss.",
                "A centralized control tower approach was too slow to react to local market fluctuations."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Lack of real-time visibility into tier-2 and tier-3 suppliers.",
                "Slow reaction to supply shocks.",
                "Inefficient inventory levels (excess vs. stockouts).",
                "Complex procurement dependencies."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We deployed a decentralized network of AI agents representing different supply chain nodes (suppliers, warehouses, factories).",
                "These agents negotiate and coordinate autonomously to optimize inventory levels and procure materials dynamically."
            ],
            imageLabel: "PLACEHOLDER – Multi-Agent Architecture",
            features: [
                "Decentralized agent negotiation protocols",
                "Predictive demand forecasting",
                "Automated procurement execution",
                "Real-time risk monitoring"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Network Modeling",
                    description: "Mapped the entire supply chain ecosystem."
                },
                {
                    title: "Agent Design",
                    description: "Defined agent goals, constraints, and interaction rules."
                },
                {
                    title: "Simulation",
                    description: "Tested agent behaviors in a digital twin environment."
                },
                {
                    title: "Deployment",
                    description: "Rollout to live operations with human-in-the-loop oversight."
                }
            ]
        },
        results: {
            metrics: [
                { value: "25%", label: "Inventory cost reduction" },
                { value: "90%", label: "Decrease in stockouts" },
                { value: "3x", label: "Improvement in response time" }
            ]
        },
        whyMatters: {
            content: "Decentralized decision-making enables resilience. The supply chain can self-correct in real-time without waiting for top-down instructions."
        },
        seo: {
            title: "Multi-Agent Supply Chain Optimization Case Study - STACLI",
            description: "See how decentralized AI agents optimized inventory and procurement, reducing costs by 25%.",
            keywords: ["supply chain AI", "multi-agent systems", "procurement automation"]
        }
    },
    {
        id: "4",
        slug: "enterprise-knowledge-graph",
        hero: {
            title: "Enterprise Knowledge Graph",
            subtitle: "Unifying disparate data sources into a semantic intelligence engine",
            tags: ["Knowledge Management", "Data Engineering", "Enterprise AI"],
            imageLabel: "PLACEHOLDER – Knowledge Graph Hero Image"
        },
        clientContext: {
            content: [
                "A multinational pharmaceutical company possessed vast amounts of research data scattered across silos.",
                "Researchers struggled to find relevant past studies, leading to duplicated efforts and slower R&D cycles.",
                "The need was to connect data points—molecular structures, clinical trial results, and internal reports—into a searchable, intelligent graph."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Data fragmentation across legacy systems.",
                "Inconsistent data taxonomies and formats.",
                "Inability to query complex relationships.",
                "Slow time-to-insight for R&D teams."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We built an Enterprise Knowledge Graph that ingests, cleans, and links data from over 50 sources.",
                "A semantic search interface allows researchers to ask natural language questions and discover hidden connections."
            ],
            imageLabel: "PLACEHOLDER – Knowledge Graph Architecture",
            features: [
                "Automated entity resolution and linking",
                "Semantic search powered by LLMs",
                "Graph visualization tools",
                "Role-based access control"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Data Discovery",
                    description: "Audited data sources and defined the ontology."
                },
                {
                    title: "Pipeline Construction",
                    description: "Built ETL pipelines to populate the graph database."
                },
                {
                    title: "Application Development",
                    description: "Developed the search and visualization frontend."
                },
                {
                    title: "Adoption",
                    description: "Trained R&D teams on leveraging the new system."
                }
            ]
        },
        results: {
            metrics: [
                { value: "40%", label: "Accelerated R&D timelines" },
                { value: "$10M+", label: "Estimated savings from avoided duplicate research" },
                { value: "50+", label: "Data silos integrated" }
            ]
        },
        whyMatters: {
            content: "Turning data into knowledge is the ultimate competitive advantage. This system transforms raw information into actionable intelligence."
        },
        seo: {
            title: "Enterprise Knowledge Graph Case Study - STACLI",
            description: "How STACLI built a knowledge graph to unify pharmaceutical usage data, accelerating R&D by 40%.",
            keywords: ["enterprise knowledge graph", "semantic search", "data unification"]
        }
    }
];
