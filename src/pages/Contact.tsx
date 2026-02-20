import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const INTEREST_OPTIONS: Record<string, string[]> = {
    "AI Strategy & Implementation": [
        "Automation roadmap",
        "Workflow redesign",
        "Operational transformation planning"
    ],
    "AI Agents & Autonomous Workflows": [
        "Customer & partner AI agents",
        "Exception handling automation",
        "Event-triggered actions",
        "Intelligent alerts"
    ],
    "Data Engineering & Orchestration": [
        "Real-time data pipelines",
        "ERP / CRM integration",
        "API-first architecture",
        "Event-driven systems"
    ],
    "Infrastructure & Platform Engineering": [
        "Cloud-native systems",
        "Secure deployments",
        "High-availability backend",
        "Performance optimization"
    ]
};

const baseTiers = [
    { min: 0, max: 2000 },
    { min: 2000, max: 10000 },
    { min: 10000, max: 50000 },
    { min: 50000, max: null }
];

const Contact = () => {
    // Form States
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        interest: [] as string[],
        service: [] as string[],
        otherServiceDescription: "",
        projectBrief: "",
        budget: "",
        timeline: ""
    });

    // UI States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    // Geo State
    const [geoConfig, setGeoConfig] = useState({
        currency: 'USD',
        rate: 1
    });

    useEffect(() => {
        const fetchGeo = async () => {
            try {
                const res = await fetch('/api/geo?t=' + Date.now());
                if (res.ok) {
                    const data = await res.json();
                    setGeoConfig({
                        currency: data.currency || 'USD',
                        rate: data.rate || 1
                    });
                }
            } catch (e) {
                console.error('Geo fetch failed', e);
            }
        };
        fetchGeo();
    }, []);

    const formatMoney = (usdAmount: number) => {
        let val = usdAmount * geoConfig.rate;

        if (val > 100000) val = Math.round(val / 10000) * 10000;
        else if (val > 1000) val = Math.round(val / 1000) * 1000;

        try {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: geoConfig.currency,
                maximumFractionDigits: 0,
            }).format(val);
        } catch (e) {
            return String(val);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleArrayItem = (field: 'interest' | 'service', item: string) => {
        setFormData(prev => {
            const currentArray = prev[field] as string[];
            const isSelected = currentArray.includes(item);

            const newArray = isSelected
                ? currentArray.filter(i => i !== item)
                : [...currentArray, item];

            // If an interest is removed, remove any services that are no longer valid
            let finalServices = prev.service;
            if (field === 'interest') {
                const validServices = [...new Set(newArray.flatMap(i => INTEREST_OPTIONS[i] || [])), "Other"];
                finalServices = finalServices.filter(s => validServices.includes(s));
            } else {
                finalServices = newArray;
            }

            return {
                ...prev,
                [field]: newArray,
                ...(field === 'interest' ? { service: finalServices } : {})
            };
        });
    };

    const handleSubmit = async () => {
        const isOtherService = formData.service.includes("Other");

        // Basic Validation
        if (!formData.name || !formData.email || formData.interest.length === 0 || formData.service.length === 0 || (isOtherService && !formData.otherServiceDescription) || !formData.projectBrief) {
            setSubmitStatus('error');
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const payload = {
                ...formData,
                interest: formData.interest.join(", "),
                service: formData.service.map(s => s === "Other" ? `Other: ${formData.otherServiceDescription}` : s).join(", "),
                projectBrief: formData.projectBrief
            };

            const response = await fetch("http://localhost:3002/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                // Optional: Clear form
                // setFormData({ name: "", email: "", company: "", interest: "", service: "", projectBrief: "", budget: "", timeline: "" });
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.message || "Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus('error');
            setErrorMessage("Network error. Please make sure the backend server is running.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-background min-h-screen flex flex-col">
            <Navbar />

            <section className="flex-grow pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Let's Build Something <span className="text-primary">Extraordinary</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Whether you're looking to deploy autonomous AI agents or orchestrate complex enterprise workflows, Stacli is ready to partner with you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        {/* Left Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-7 space-y-6 relative"
                        >
                            <h2 className="text-xl font-semibold text-foreground mb-6">Tell us what you'd like to build.</h2>

                            <AnimatePresence mode="wait">
                                {submitStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-primary/10 border border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4"
                                    >
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Inquiry Received</h3>
                                        <p className="text-muted-foreground max-w-md">
                                            Thank you, {formData.name}. Our engineering team is reviewing your project brief and will be in touch shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" exit={{ opacity: 0 }} className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Name*</label>
                                            <Input
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                                className="bg-card/50 border-input focus:border-primary/50"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email*</label>
                                            <Input
                                                placeholder="your@email.com"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleChange('email', e.target.value)}
                                                className="bg-card/50 border-input focus:border-primary/50"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Company / Startup Name / Individual</label>
                                            <Input
                                                placeholder="e.g. Stacli Inc."
                                                value={formData.company}
                                                onChange={(e) => handleChange('company', e.target.value)}
                                                className="bg-card/50 border-input focus:border-primary/50"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">What are you interested in?*</label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full justify-between bg-card/50 border-input font-normal hover:bg-card/50 h-10 px-3 py-2 text-left">
                                                        <span className="truncate">
                                                            {formData.interest.length > 0 ? formData.interest.join(", ") : <span className="text-muted-foreground">Select options</span>}
                                                        </span>
                                                        <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[--radix-popover-trigger-width] p-3" align="start">
                                                    <div className="space-y-3">
                                                        {Object.keys(INTEREST_OPTIONS).map(interest => (
                                                            <div key={interest} className="flex items-start space-x-3 cursor-pointer" onClick={() => toggleArrayItem("interest", interest)}>
                                                                <Checkbox id={`interest-${interest}`} checked={formData.interest.includes(interest)} className="mt-0.5" />
                                                                <label className="text-sm font-medium leading-tight cursor-pointer pointer-events-none">{interest}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Choose a Service*</label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" disabled={formData.interest.length === 0} className="w-full justify-between bg-card/50 border-input font-normal hover:bg-card/50 h-10 px-3 py-2 text-left disabled:opacity-50">
                                                        <span className="truncate">
                                                            {formData.service.length > 0 ? formData.service.join(", ") : <span className="text-muted-foreground">{formData.interest.length > 0 ? "Select services" : "Select an interest first"}</span>}
                                                        </span>
                                                        <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[--radix-popover-trigger-width] p-3 max-h-[300px] overflow-y-auto" align="start">
                                                    <div className="space-y-3">
                                                        {[...new Set(formData.interest.flatMap(i => INTEREST_OPTIONS[i] || [])), "Other"].map(service => (
                                                            <div key={service} className="flex items-start space-x-3 cursor-pointer" onClick={() => toggleArrayItem("service", service)}>
                                                                <Checkbox id={`service-${service}`} checked={formData.service.includes(service)} className="mt-0.5" />
                                                                <label className="text-sm font-medium leading-tight cursor-pointer pointer-events-none">{service}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <AnimatePresence>
                                            {formData.service.includes("Other") && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-2 pb-1">
                                                        <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Please specify the service*</label>
                                                        <Input
                                                            placeholder="Describe the service you are looking for..."
                                                            value={formData.otherServiceDescription}
                                                            onChange={(e) => handleChange('otherServiceDescription', e.target.value)}
                                                            className="bg-card/50 border-input focus:border-primary/50"
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Brief About Your Project*</label>
                                            <Textarea
                                                placeholder="Tell us about your idea..."
                                                value={formData.projectBrief}
                                                onChange={(e) => handleChange('projectBrief', e.target.value)}
                                                className="bg-card/50 border-input focus:border-primary/50 min-h-[120px]"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Budget Range</label>
                                                <Select value={formData.budget} onValueChange={(val) => handleChange('budget', val)}>
                                                    <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                                        <SelectValue placeholder="Select Budget Range" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {baseTiers.map((tier, index) => {
                                                            let label = "";
                                                            if (tier.min === 0) {
                                                                label = `Under ${formatMoney(tier.max!)}`;
                                                            } else if (tier.max === null) {
                                                                label = `${formatMoney(tier.min)}+`;
                                                            } else {
                                                                label = `${formatMoney(tier.min)} – ${formatMoney(tier.max)}`;
                                                            }
                                                            return (
                                                                <SelectItem key={index} value={label}>
                                                                    {label}
                                                                </SelectItem>
                                                            );
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">How Soon Do You Want to Start?</label>
                                                <Select value={formData.timeline} onValueChange={(val) => handleChange('timeline', val)}>
                                                    <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                                        <SelectValue placeholder="Select Time Frame" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Immediately">Immediately</SelectItem>
                                                        <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                                                        <SelectItem value="1-3 months">1-3 months</SelectItem>
                                                        <SelectItem value="Just exploring">Just exploring</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        {submitStatus === 'error' && (
                                            <div className="text-red-400 text-sm mt-2 p-3 bg-red-400/10 rounded-md border border-red-400/20">
                                                {errorMessage}
                                            </div>
                                        )}

                                        <div className="pt-4">
                                            <Button
                                                size="lg"
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                                            >
                                                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Right Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="lg:col-span-5 space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-8">Get in touch</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Email us</p>
                                            <a href="mailto:hello@stacli.com" className="text-foreground hover:text-primary transition-colors font-medium">
                                                hello@stacli.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Visit us</p>
                                            <p className="text-foreground/90 leading-relaxed">
                                                4th Floor, Bizness Square,<br />
                                                Hitec City, Hyderabad – 500084
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Linkedin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Follow us</p>
                                            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                                                LinkedIn / Stacli
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Contact;
