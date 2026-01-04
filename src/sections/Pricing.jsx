import { Check, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Pricing() {
    return (
        <Section id="pricing">
            <div className="max-w-4xl mx-auto">
                <Card className="text-center p-12 md:p-16 relative overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Custom <span className="text-gradient">Pricing</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white font-medium mb-8 max-w-2xl mx-auto">
                        Pricing depends on your workflow, integrations, and scale.
                    </p>

                    <div className="space-y-4 text-gray-400 text-lg mb-10">
                        <p>We analyze your use-case first, then suggest the best solution.</p>
                        <p>Get a tailored quote that fits your business needs.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="#contact" variant="primary" icon={ArrowRight}>
                            Get a Tailored Quote
                        </Button>
                        <Button href="#how-it-works" variant="secondary">
                            How We Work
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-brand-secondary" /> No Hidden Fees
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-brand-secondary" /> Free Initial Consultation
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-brand-secondary" /> Scalable Infrastructure
                        </span>
                    </div>
                </Card>
            </div>
        </Section>
    );
}

