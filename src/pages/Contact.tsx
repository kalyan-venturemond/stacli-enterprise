import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Contact = () => {
    // Form States
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        interest: "",
        service: "",
        projectBrief: "",
        budget: "",
        timeline: ""
    });

    // UI States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        // Basic Validation
        if (!formData.name || !formData.email || !formData.interest || !formData.service || !formData.projectBrief) {
            setSubmitStatus('error');
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch("http://localhost:3002/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
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
                                            <Select value={formData.interest} onValueChange={(val) => handleChange('interest', val)}>
                                                <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                                    <SelectValue placeholder="Select options" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="AI Agents">AI Agents</SelectItem>
                                                    <SelectItem value="Workflow Automation">Workflow Automation</SelectItem>
                                                    <SelectItem value="Data Orchestration">Data Orchestration</SelectItem>
                                                    <SelectItem value="Enterprise Integration">Enterprise Integration</SelectItem>
                                                    <SelectItem value="Other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Choose a Service*</label>
                                            <Select value={formData.service} onValueChange={(val) => handleChange('service', val)}>
                                                <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                                    <SelectValue placeholder="Select options" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Consulting & Strategy">Consulting & Strategy</SelectItem>
                                                    <SelectItem value="Full Implementation">Full Implementation</SelectItem>
                                                    <SelectItem value="Platform Access">Platform Access</SelectItem>
                                                    <SelectItem value="Partnership">Partnership</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

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
                                                        <SelectItem value="< $10k">&lt; $10k</SelectItem>
                                                        <SelectItem value="$10k - $50k">$10k - $50k</SelectItem>
                                                        <SelectItem value="$50k - $100k">$50k - $100k</SelectItem>
                                                        <SelectItem value="$100k+">$100k+</SelectItem>
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
