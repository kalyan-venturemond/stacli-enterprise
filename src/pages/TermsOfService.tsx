
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
    return (
        <main className="bg-background min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
                        <p className="text-muted-foreground mb-12 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
                            <p className="lead text-xl text-foreground mb-8">
                                Welcome to Stacli. By accessing or using our website, platform, and services, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">1. Access to Services</h2>
                            <p className="mb-4">
                                Stacli grants you a limited, non-exclusive, non-transferable right to access and use our intelligent infrastructure platform and automation services solely for your internal business operations, subject to the terms of your specific Service Agreement and these Terms.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">2. User Responsibilities</h2>
                            <p className="mb-4">You are responsible for:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Maintaining the confidentiality of your account credentials.</li>
                                <li>All activities that occur under your account.</li>
                                <li>Ensuring your data inputs comply with applicable laws and regulations.</li>
                                <li>Using the Services only for lawful purposes and not attempting to reverse engineer or disrupt the platform.</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">3. Intellectual Property</h2>
                            <p className="mb-4">
                                <strong>Our IP:</strong> Stacli retains all rights, title, and interest in and to the Services, including all related intellectual property rights (software, algorithms, designs, and documentation).
                            </p>
                            <p className="mb-6">
                                <strong>Your IP:</strong> You retain all ownership rights to your data and any specific workflows or configurations you create on the platform. You grant Stacli a license to use such data solely to provide and improve the Services for you.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">4. Confidentiality</h2>
                            <p className="mb-6">
                                Each party agrees to protect the confidentiality of the other party's proprietary information with the same degree of care that it uses to protect its own confidential information, but in no event less than reasonable care.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">5. Service Availability & SLAs</h2>
                            <p className="mb-6">
                                We strive to maintain high availability of our services. Specific Service Level Agreements (SLAs) regarding uptime guarantees and support response times are detailed in your Enterprise Service Agreement.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">6. Limitation of Liability</h2>
                            <p className="mb-6">
                                To the maximum extent permitted by law, Stacli shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or in connection with these Terms or the use of the Services.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">7. Termination</h2>
                            <p className="mb-6">
                                We may suspend or terminate your access to the Services immediately if you breach these Terms. You may terminate your account by contacting support, subject to the terms of any active Service Agreement.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">8. Governing Law</h2>
                            <p className="mb-6">
                                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Stacli is headquartered, without regard to its conflict of law provisions.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">9. Contact Information</h2>
                            <p className="mb-6">
                                For legal inquiries regarding these Terms, please contact:
                            </p>
                            <div className="bg-card/50 p-6 rounded-lg border border-border">
                                <p className="font-semibold text-foreground">Stacli Legal Department</p>
                                <p className="mt-2">Email: <a href="mailto:legal@stacli.com" className="text-primary hover:underline">legal@stacli.com</a></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default TermsOfService;
