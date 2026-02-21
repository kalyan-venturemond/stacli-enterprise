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
            imageLabel: "case-studies/casestudy1.png"
        },
        clientContext: {
            content: [
                "A fast-growing logistics and supply chain enterprise operating across 8 regional hubs was managing over 4,500 daily shipments across B2B and last-mile networks.",
                "The company relied heavily on manual dispatch coordination, fragmented communication between carriers, and siloed TMS (Transportation Management System) data.",
                "As shipment volume increased, operational inefficiencies began impacting SLA performance, cost control, and scalability.",
                "The leadership team needed a system that could automate dispatch decision-making while integrating seamlessly with their existing ERP and TMS platforms."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Manual coordination across dispatch teams led to inconsistent carrier allocation and routing inefficiencies.",
                "SLA breaches increased due to slow response times during peak hours and unexpected disruptions.",
                "Inability to dynamically reroute shipments in response to traffic, weather, or carrier capacity constraints.",
                "Human-dependent workflows created bottlenecks during seasonal demand spikes."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We developed a multi-agent AI coordination system designed to autonomously manage dispatch workflows across hubs.",
                "The architecture integrated directly with the client's ERP, TMS, and real-time GPS tracking systems, enabling sub-second routing and carrier decisions.",
                "The system was built on an event-driven architecture to ensure high availability and scalable coordination across all operating regions."
            ],
            imageLabel: "case-studies/casestudy1-architecture.png",
            features: [
                "AI Dispatch Agents for predictive route and carrier optimization",
                "Real-time data pipelines for shipment tracking and SLA monitoring",
                "Automated carrier negotiation and digital booking workflows",
                "Self-healing exception management for delay, reroute, and escalation handling"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Assessment",
                    description: "Mapped existing TMS workflows, carrier APIs, and dispatch escalation patterns to identify integration gaps and latency bottlenecks."
                },
                {
                    title: "Architecture Design",
                    description: "Designed a scalable multi-agent event-driven system capable of handling peak shipment volumes with dynamic rerouting intelligence."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Phased rollout across two regional hubs first, integrating ERP, TMS, GPS telemetry, and carrier systems to ensure minimal disruption."
                },
                {
                    title: "Optimization & Scaling",
                    description: "Fine-tuned agent behavior using historical shipment data and scaled the deployment across all hubs with continuous SLA monitoring."
                }
            ]
        },
        results: {
            metrics: [
                { value: "35%", label: "Reduction in manual dispatch effort" },
                { value: "2x", label: "Faster shipment coordination cycles" },
                { value: "40%", label: "Reduction in operational waste from routing inefficiencies" }
            ]
        },
        whyMatters: {
            content: "This transformation enabled the client to scale shipment volumes without proportionally increasing dispatch headcount. By shifting from reactive coordination to autonomous orchestration, the organization improved SLA performance, reduced cost leakage, and strengthened its competitive positioning in a margin-sensitive logistics industry."
        },
        seo: {
            title: "Autonomous Logistics Coordination Case Study - STACLI",
            description: "How STACLI's multi-agent AI system eliminated manual dispatch inefficiencies and improved SLA performance for a fast-growing logistics enterprise.",
            keywords: ["AI automation case study logistics", "autonomous logistics", "supply chain AI", "intelligent dispatch"]
        }
    },
    {
        id: "2",
        slug: "intelligent-clinical-workflow-automation",
        hero: {
            title: "Intelligent Clinical Workflow Automation",
            subtitle: "Transforming diagnostic operations with AI-driven orchestration",
            tags: ["Healthcare", "Diagnostics", "Workflow Automation"],
            imageLabel: "case-studies/casestudy2.png"
        },
        clientContext: {
            content: [
                "A multi-location diagnostics and specialty healthcare provider operating across 25 centers was handling over 18,000 patient interactions per month, including lab testing, imaging diagnostics, and specialist consultations.",
                "The organization relied on fragmented hospital management systems (HMS), manual patient data entry, and compliance-heavy reporting workflows.",
                "As patient volumes increased, operational inefficiencies began affecting turnaround times, compliance accuracy, and administrative overhead.",
                "The leadership team required a scalable AI-driven system to automate clinical workflows, reduce manual coordination, and ensure regulatory compliance without increasing headcount."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Manual patient data handling across registration, diagnostics, and reporting systems led to errors and duplication.",
                "Compliance reporting processes were time-consuming and prone to delays.",
                "Diagnostic result processing lacked real-time visibility, increasing turnaround times for physicians and patients.",
                "Administrative staff were overloaded with coordination tasks across labs, imaging centers, and specialists."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We developed an AI-powered clinical workflow orchestration system designed to unify patient data flows and automate operational coordination across diagnostic centers.",
                "The system integrated seamlessly with existing HMS, LIS (Laboratory Information Systems), and radiology platforms, enabling real-time data synchronization and intelligent task routing.",
                "The architecture was built with secure, HIPAA-aligned data handling principles and high-availability infrastructure to ensure reliability across locations."
            ],
            imageLabel: "case-studies/casestudy2-architecture.png",
            features: [
                "AI workflow agents for patient intake, scheduling, and diagnostic coordination",
                "Automated compliance reporting and documentation validation",
                "Real-time data pipelines across HMS, LIS, and imaging systems",
                "Intelligent alerts for abnormal results and SLA breaches"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Assessment",
                    description: "Analyzed existing hospital management workflows, compliance frameworks, and diagnostic data flows to identify bottlenecks and integration points."
                },
                {
                    title: "Architecture Design",
                    description: "Designed a secure, event-driven multi-agent system to automate patient lifecycle workflows and compliance processes."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Rolled out the solution in phases across high-volume centers, integrating laboratory systems, radiology software, and central reporting dashboards."
                },
                {
                    title: "Optimization & Scaling",
                    description: "Fine-tuned diagnostic routing logic and compliance validation models using historical patient data and scaled across all operating centers."
                }
            ]
        },
        results: {
            metrics: [
                { value: "30–40%", label: "Reduction in administrative overhead" },
                { value: "1.5x", label: "Faster diagnostic turnaround times" },
                { value: "35%", label: "Improvement in compliance reporting efficiency" }
            ]
        },
        whyMatters: {
            content: "By transitioning from fragmented manual coordination to AI-driven orchestration, the organization significantly improved patient experience and clinical efficiency. The transformation enabled scalable growth across centers without increasing administrative staffing, while maintaining high compliance standards in a heavily regulated healthcare environment."
        },
        seo: {
            title: "Intelligent Clinical Workflow Automation Case Study - STACLI",
            description: "Transforming diagnostic operations with AI-driven orchestration across 25 healthcare centers.",
            keywords: ["healthcare AI automation", "clinical workflow", "diagnostics AI", "stacli case study"]
        }
    },
    {
        id: "3",
        slug: "predictive-production-orchestration",
        hero: {
            title: "Predictive Production & Operations Orchestration",
            subtitle: "Driving manufacturing efficiency with AI-powered automation",
            tags: ["Manufacturing", "Predictive Maintenance", "Operations"],
            imageLabel: "case-studies/casestudy3.png"
        },
        clientContext: {
            content: [
                "A mid-to-large scale manufacturing enterprise operating across 3 production facilities was producing over 120,000 units per month across multiple SKUs.",
                "The organization relied on traditional ERP-driven planning with manual production scheduling, reactive maintenance handling, and siloed shop-floor reporting systems.",
                "As order volumes increased and product lines diversified, inefficiencies in scheduling, machine downtime, and quality control began affecting delivery timelines and margin performance.",
                "The leadership team needed a scalable system to optimize production planning, reduce downtime, and improve operational visibility across facilities."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Production scheduling gaps due to manual coordination between planning teams and shop-floor supervisors.",
                "Unplanned machine downtime caused by reactive maintenance workflows.",
                "Quality control delays resulting from fragmented reporting systems.",
                "Lack of real-time visibility into production bottlenecks and capacity utilization."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We built an AI-driven production orchestration system designed to unify planning, maintenance, and shop-floor execution under a single intelligent workflow layer.",
                "The system integrated directly with the client's ERP, MES (Manufacturing Execution System), and IoT-enabled machine telemetry streams to enable predictive and autonomous decision-making.",
                "The architecture was designed as an event-driven system capable of adapting production schedules in real time based on demand shifts, machine availability, and material constraints."
            ],
            imageLabel: "case-studies/casestudy3-architecture.png",
            features: [
                "AI agents for dynamic production scheduling optimization",
                "Predictive maintenance models using machine telemetry data",
                "Real-time shop-floor data pipelines and bottleneck detection",
                "Automated quality control reporting and escalation workflows"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Assessment",
                    description: "Mapped ERP, MES, and machine telemetry systems to identify data silos, downtime patterns, and production inefficiencies."
                },
                {
                    title: "Architecture Design",
                    description: "Designed a scalable, multi-agent orchestration layer capable of dynamically adjusting schedules and maintenance triggers."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Phased rollout across one facility first, integrating IoT data streams and ERP planning modules before scaling to additional plants."
                },
                {
                    title: "Optimization & Scaling",
                    description: "Trained predictive models using historical downtime and production data, continuously refining scheduling intelligence across facilities."
                }
            ]
        },
        results: {
            metrics: [
                { value: "35%", label: "Reduction in unplanned downtime" },
                { value: "1.8x", label: "Faster production cycles" },
                { value: "30%", label: "Improvement in schedule adherence and resource utilization" }
            ]
        },
        whyMatters: {
            content: "By shifting from reactive production management to predictive and autonomous orchestration, the organization significantly improved operational efficiency and cost control. The transformation enabled the manufacturer to scale output without proportional increases in operational overhead, strengthening competitiveness in a margin-sensitive industry."
        },
        seo: {
            title: "Predictive Production & Operations Orchestration Case Study - STACLI",
            description: "Driving manufacturing efficiency with AI-powered automation across 3 production facilities.",
            keywords: ["manufacturing AI", "predictive maintenance", "production orchestration", "stacli case study"]
        }
    },
    {
        id: "4",
        slug: "intelligent-risk-compliance",
        hero: {
            title: "Intelligent Risk & Compliance Automation",
            subtitle: "Modernizing financial operations with AI-driven decision systems",
            tags: ["Financial Services", "Risk Management", "Compliance"],
            imageLabel: "case-studies/casestudy4.png"
        },
        clientContext: {
            content: [
                "A regional financial services institution operating across lending, payments, and wealth products was processing over 60,000 monthly transactions and onboarding 8,000+ new customers per quarter.",
                "The organization relied on manual compliance checks, fragmented risk assessment workflows, and siloed reporting systems across departments.",
                "As regulatory scrutiny increased and transaction volumes grew, operational bottlenecks began impacting customer onboarding speed, fraud monitoring accuracy, and compliance reporting timelines.",
                "Leadership required a secure, scalable system to automate risk evaluation and compliance workflows without compromising regulatory standards."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Manual KYC and compliance verification created onboarding delays.",
                "Risk assessment workflows lacked real-time data integration across systems.",
                "Regulatory reporting processes were time-intensive and audit-sensitive.",
                "Fraud detection and anomaly monitoring were reactive rather than predictive."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We built an AI-driven risk and compliance orchestration platform designed to unify customer onboarding, transaction monitoring, and regulatory reporting under a single intelligent workflow layer.",
                "The system integrated seamlessly with the institution's core banking platform, CRM, and third-party verification services, enabling real-time decision-making and automated escalation.",
                "The architecture was built with secure, encrypted data pipelines and high-availability infrastructure to ensure reliability and audit-readiness."
            ],
            imageLabel: "case-studies/casestudy4-architecture.png",
            features: [
                "AI-driven risk scoring models for dynamic credit and transaction assessment",
                "Automated KYC verification workflows with document validation",
                "Real-time transaction monitoring and anomaly detection agents",
                "Compliance reporting automation aligned with regulatory frameworks"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Assessment",
                    description: "Evaluated existing core banking systems, KYC workflows, and compliance reporting processes to identify latency and risk exposure points."
                },
                {
                    title: "Architecture Design",
                    description: "Designed a secure, event-driven orchestration layer integrating risk models with transaction and customer data streams."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Phased rollout beginning with digital onboarding workflows, followed by transaction monitoring and compliance reporting modules."
                },
                {
                    title: "Optimization & Scaling",
                    description: "Refined risk scoring models using historical transaction and fraud data, scaling the system across all business units."
                }
            ]
        },
        results: {
            metrics: [
                { value: "30%", label: "Reduction in compliance operational costs" },
                { value: "2x", label: "Faster customer onboarding cycles" },
                { value: "40%", label: "Improvement in anomaly detection accuracy" }
            ]
        },
        whyMatters: {
            content: "By transitioning from manual compliance workflows to intelligent risk orchestration, the institution significantly improved operational efficiency while strengthening regulatory resilience. The transformation enabled scalable growth in transaction volume and customer acquisition without proportionally increasing compliance headcount — a critical advantage in a highly regulated financial environment."
        },
        seo: {
            title: "Intelligent Risk & Compliance Automation Case Study - STACLI",
            description: "Modernizing financial operations with AI-driven decision systems for a regional financial services institution.",
            keywords: ["fintech AI", "risk compliance automation", "KYC automation", "stacli case study"]
        }
    },
    {
        id: "5",
        slug: "intelligent-learning-orchestration",
        hero: {
            title: "Intelligent Learning Orchestration Platform",
            subtitle: "Scaling content delivery and learner engagement with AI automation",
            tags: ["EdTech", "Learning Systems", "Engagement Automation"],
            imageLabel: "case-studies/casestudy5.png"
        },
        clientContext: {
            content: [
                "A rapidly growing EdTech platform offering cohort-based programs and self-paced courses was serving over 45,000 active learners across multiple domains.",
                "The organization relied on manual content publishing workflows, fragmented LMS integrations, and disconnected student engagement tracking systems.",
                "As enrollments increased, operational inefficiencies began impacting learner onboarding speed, content personalization, and completion rates.",
                "The leadership team required a scalable system to automate content workflows, unify learner data, and optimize engagement across programs."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Manual content management across LMS, CRM, and marketing systems created delays and inconsistencies.",
                "Disconnected learning platforms resulted in limited visibility into learner progress and engagement.",
                "Student onboarding processes were time-consuming and resource-intensive.",
                "Drop-off rates increased due to lack of personalized engagement triggers."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We built an AI-powered learning orchestration system designed to unify content delivery, learner analytics, and engagement automation into a single intelligent framework.",
                "The system integrated with the platform’s LMS, CRM, payment systems, and marketing tools to enable real-time learner lifecycle tracking.",
                "The architecture was built on an event-driven system capable of adapting learning pathways based on individual student behavior and performance signals."
            ],
            imageLabel: "case-studies/casestudy5-architecture.png",
            features: [
                "AI content orchestration agents for automated publishing and updates",
                "Real-time learner analytics pipelines across LMS and CRM",
                "Personalized engagement triggers and nudging workflows",
                "Automated onboarding sequences and performance tracking dashboards"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Assessment",
                    description: "Mapped LMS workflows, CRM pipelines, and learner journey touchpoints to identify content and engagement gaps."
                },
                {
                    title: "Architecture Design",
                    description: "Designed a scalable orchestration layer connecting content systems with behavioral analytics and engagement automation."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Phased rollout starting with onboarding automation, followed by real-time analytics dashboards and engagement agents."
                },
                {
                    title: "Optimization & Scaling",
                    description: "Trained engagement models using historical completion and dropout data to refine personalized nudging logic."
                }
            ]
        },
        results: {
            metrics: [
                { value: "30%", label: "Improvement in content delivery efficiency" },
                { value: "1.5x", label: "Faster learner onboarding" },
                { value: "25–35%", label: "Increase in course completion rates" }
            ]
        },
        whyMatters: {
            content: "By shifting from fragmented content management to AI-driven learning orchestration, the platform significantly improved operational efficiency and learner outcomes. The transformation enabled scalable program expansion without proportionally increasing academic operations teams — strengthening retention, engagement, and revenue predictability."
        },
        seo: {
            title: "Intelligent Learning Orchestration Platform Case Study - STACLI",
            description: "Scaling content delivery and learner engagement with AI automation",
            keywords: ["edtech ai", "automation", "stacli case study", "learning orchestration"]
        }
    },
    {
        id: "6",
        slug: "autonomous-service-operations",
        hero: {
            title: "Autonomous Service Operations Platform",
            subtitle: "Streamlining client delivery and revenue workflows with AI orchestration",
            tags: ["Service Businesses", "Operations", "Revenue Workflows"],
            imageLabel: "case-studies/casestudy6.png"
        },
        clientContext: {
            content: [
                "A fast-growing professional services firm operating across consulting, managed services, and project-based engagements was managing over 300 active clients simultaneously.",
                "The organization relied on manual coordination between sales, onboarding, operations, and billing teams. CRM data, project management tools, and invoicing systems operated in silos.",
                "As client volume increased, inefficiencies began affecting onboarding timelines, resource allocation, and revenue visibility.",
                "Leadership required a unified system to automate client lifecycle workflows and improve operational efficiency without expanding headcount."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Manual client onboarding and documentation created delays and inconsistencies.",
                "Disconnected CRM, project management, and billing systems limited revenue visibility.",
                "Resource allocation decisions were reactive rather than data-driven.",
                "High operational overhead during peak engagement cycles."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We built an AI-powered service operations orchestration platform designed to unify client acquisition, delivery, and revenue workflows.",
                "The system integrated CRM, project management tools, accounting software, and internal communication systems to enable real-time operational visibility.",
                "The architecture was event-driven, enabling seamless coordination between sales, operations, and finance functions."
            ],
            imageLabel: "case-studies/casestudy6-architecture.png",
            features: [
                "AI workflow agents for automated client onboarding and documentation validation",
                "Real-time revenue and resource allocation dashboards",
                "Intelligent task routing across delivery teams",
                "Automated billing triggers and revenue reconciliation pipelines"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Assessment",
                    description: "Mapped client lifecycle workflows across CRM, project management, and finance systems to identify friction points."
                },
                {
                    title: "Architecture Design",
                    description: "Designed a unified orchestration layer connecting sales pipelines with operational delivery and billing automation."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Phased rollout starting with onboarding automation, followed by resource intelligence dashboards and billing triggers."
                },
                {
                    title: "Optimization & Scaling",
                    description: "Refined allocation models using historical project data to improve utilization forecasting and revenue predictability."
                }
            ]
        },
        results: {
            metrics: [
                { value: "40%", label: "Reduction in manual operational coordination" },
                { value: "1.7x", label: "Faster client onboarding cycles" },
                { value: "30%", label: "Improvement in revenue visibility and billing accuracy" }
            ]
        },
        whyMatters: {
            content: "By transitioning from fragmented manual workflows to AI-driven service orchestration, the organization significantly improved operational scalability and profitability. The transformation enabled the firm to increase client capacity without proportionally expanding administrative teams — improving margins while maintaining service quality."
        },
        seo: {
            title: "Autonomous Service Operations Platform Case Study - STACLI",
            description: "Streamlining client delivery and revenue workflows with AI orchestration",
            keywords: ["service automation ai", "automation", "stacli case study", "service operations"]
        }
    },
    {
        id: "7",
        slug: "ai-native-infrastructure",
        hero: {
            title: "AI-Native Infrastructure for High-Growth Startups",
            subtitle: "Building scalable operating systems for product-led companies",
            tags: ["Tech Startups", "Infrastructure", "Scale"],
            imageLabel: "case-studies/casestudy7.png"
        },
        clientContext: {
            content: [
                "A venture-backed SaaS startup operating in the B2B space was scaling rapidly from early traction to growth stage, serving over 15,000 active users across multiple enterprise clients.",
                "The founding team had built an MVP that achieved product-market fit, but backend architecture, data pipelines, and automation workflows were not designed for scale.",
                "As user growth accelerated, infrastructure limitations began affecting performance reliability, customer onboarding speed, and operational efficiency.",
                "The founders required a robust AI-native system capable of supporting rapid scale while maintaining product agility."
            ]
        },
        challenge: {
            title: "The Challenge",
            points: [
                "Monolithic backend architecture limiting scalability and deployment velocity.",
                "Manual operational workflows across onboarding, support, and reporting.",
                "Fragmented analytics systems preventing real-time product intelligence.",
                "Increasing infrastructure costs due to inefficient resource allocation."
            ]
        },
        solution: {
            title: "The Solution We Engineered",
            description: [
                "We designed and deployed a scalable AI-native infrastructure layer built around modular architecture and event-driven workflows.",
                "The system unified product analytics, operational automation, and infrastructure orchestration into a single intelligent framework.",
                "The architecture was cloud-native, resilient, and built to handle exponential growth without compromising performance."
            ],
            imageLabel: "case-studies/casestudy7-architecture.png",
            features: [
                "Microservices-based backend restructuring for scale readiness",
                "AI-driven onboarding and support automation agents",
                "Real-time product analytics and behavioral intelligence pipelines",
                "Infrastructure optimization and automated deployment workflows"
            ]
        },
        implementation: {
            steps: [
                {
                    title: "Infrastructure Audit",
                    description: "Conducted a deep assessment of backend architecture, DevOps pipelines, and operational workflows to identify scale risks."
                },
                {
                    title: "Architecture Redesign",
                    description: "Transitioned from monolithic systems to modular, event-driven services with AI automation layers."
                },
                {
                    title: "Engineering & Deployment",
                    description: "Phased rollout to avoid downtime, migrating critical services while implementing automated CI/CD pipelines."
                },
                {
                    title: "Performance Optimization",
                    description: "Fine-tuned infrastructure allocation, database performance, and automation logic to support enterprise-level reliability."
                }
            ]
        },
        results: {
            metrics: [
                { value: "3x", label: "Improvement in system scalability capacity" },
                { value: "50%", label: "Reduction in operational overhead" },
                { value: "2x", label: "Faster feature deployment cycles" }
            ]
        },
        whyMatters: {
            content: "By transforming its MVP infrastructure into an AI-native operating system, the startup positioned itself for sustainable growth and enterprise reliability. The transition enabled rapid user acquisition without system instability, improved investor confidence, and created a scalable foundation for future product expansion."
        },
        seo: {
            title: "AI-Native Infrastructure for High-Growth Startups Case Study - STACLI",
            description: "Building scalable operating systems for product-led companies",
            keywords: ["startup infrastructure ai", "automation", "stacli case study", "ai native scale"]
        }
    }
];
