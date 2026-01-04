import { motion } from "framer-motion";
import { MessageSquare, Bot, Database, Repeat, Zap } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";

const features = [
    {
        icon: MessageSquare,
        text: "WhatsApp appointment booking & inquiries"
    },
    {
        icon: Bot,
        text: "AI auto-replies for FAQs, pricing & availability"
    },
    {
        icon: Database,
        text: "Google Sheets / CRM updates in real time"
    },
    {
        icon: Repeat,
        text: "Follow-ups, reminders & status updates"
    },
    {
        icon: Zap,
        text: "Custom API integrations (payments, dashboards)"
    }
];

export default function About() {
    return (
        <Section id="about">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        What Cortexaa Does <br />
                        <span className="text-gradient">(Simple & Real)</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Cortexaa helps businesses automate daily operations that usually waste time and staff effort.
                        <br /><br />
                        We build systems that work silently in the background — so you can focus on customers.
                        No complex apps. No learning curve. Just automation that works.
                    </p>

                    <div className="space-y-4">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <span className="text-gray-200 font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-purple-500/20 blur-[100px] -z-10" />
                    <Card className="p-8 border-white/10 bg-dark/50 backdrop-blur-xl">
                        <h3 className="text-xl font-bold mb-6">Why Businesses Choose Cortexaa</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1"><span className="text-2xl">🚀</span></div>
                                <div>
                                    <h4 className="font-bold text-white">Faster response to customers</h4>
                                    <p className="text-sm text-gray-400">Instant replies, 24/7 avalability.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><span className="text-2xl">⏱</span></div>
                                <div>
                                    <h4 className="font-bold text-white">Saves 2–4 hours daily</h4>
                                    <p className="text-sm text-gray-400">Free up staff for high-value tasks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><span className="text-2xl">📉</span></div>
                                <div>
                                    <h4 className="font-bold text-white">Reduces repetitive calls</h4>
                                    <p className="text-sm text-gray-400">Let AI handle the routine questions.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><span className="text-2xl">🤝</span></div>
                                <div>
                                    <h4 className="font-bold text-white">No "AI Hype"</h4>
                                    <p className="text-sm text-gray-400">We build systems that actually work.</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    );
}
