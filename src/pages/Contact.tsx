
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";
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
                            className="lg:col-span-7 space-y-6"
                        >
                            <h2 className="text-xl font-semibold text-foreground mb-6">Tell us what you'd like to build.</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Name*</label>
                                    <Input placeholder="Your full name" className="bg-card/50 border-input focus:border-primary/50" />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email*</label>
                                    <Input placeholder="your@email.com" type="email" className="bg-card/50 border-input focus:border-primary/50" />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Company / Startup Name / Individual</label>
                                    <Input placeholder="e.g. Stacli Inc." className="bg-card/50 border-input focus:border-primary/50" />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">What are you interested in?*</label>
                                    <Select>
                                        <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                            <SelectValue placeholder="Select options" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ai-agents">AI Agents</SelectItem>
                                            <SelectItem value="workflow-automation">Workflow Automation</SelectItem>
                                            <SelectItem value="data-orchestration">Data Orchestration</SelectItem>
                                            <SelectItem value="enterprise-integration">Enterprise Integration</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Choose a Service*</label>
                                    <Select>
                                        <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                            <SelectValue placeholder="Select options" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="consulting">Consulting & Strategy</SelectItem>
                                            <SelectItem value="implementation">Full Implementation</SelectItem>
                                            <SelectItem value="platform">Platform Access</SelectItem>
                                            <SelectItem value="partnership">Partnership</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Brief About Your Project*</label>
                                    <Textarea
                                        placeholder="Tell us about your idea..."
                                        className="bg-card/50 border-input focus:border-primary/50 min-h-[120px]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Budget Range</label>
                                        <Select>
                                            <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                                <SelectValue placeholder="Select Budget Range" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="lt-10k">&lt; $10k</SelectItem>
                                                <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                                                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                                                <SelectItem value="gt-100k">$100k+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground mb-1.5 block">How Soon Do You Want to Start?</label>
                                        <Select>
                                            <SelectTrigger className="bg-card/50 border-input focus:ring-primary/20">
                                                <SelectValue placeholder="Select Time Frame" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="immediately">Immediately</SelectItem>
                                                <SelectItem value="within-1-month">Within 1 month</SelectItem>
                                                <SelectItem value="1-3-months">1-3 months</SelectItem>
                                                <SelectItem value="exploring">Just exploring</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                                        Submit Inquiry
                                    </Button>
                                </div>
                            </div>
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

                                    {/* Placeholder phone if needed, otherwise optional or remove */}
                                    {/* <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Call us</p>
                      <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                        +91 1234567890
                      </a>
                    </div>
                  </div> */}

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
