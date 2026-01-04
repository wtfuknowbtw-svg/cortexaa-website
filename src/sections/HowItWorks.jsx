import { motion } from "framer-motion";
import { Search, Hammer, Rocket, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";

const steps = [
    {
        icon: Search,
        title: "Step 1 – Understand",
        desc: "We study how you currently handle messages, appointments, and data.",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        icon: Hammer,
        title: "Step 2 – Build",
        desc: "We design WhatsApp flows, AI replies, and backend logic using n8n and APIs.",
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        icon: Rocket,
        title: "Step 3 – Launch",
        desc: "Automation goes live. You save time from day one. No disruption.",
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    }
];

export default function HowItWorks() {
    return (
        <Section id="how-it-works">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    How It <span className="text-gradient">Works</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    We keep it simple. No complex onboarding.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
                {/* Connection Line (Desktop only) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Card className="h-full flex flex-col items-center text-center hover:border-white/20 bg-dark-100">
                            <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-inner`}>
                                <step.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.desc}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
