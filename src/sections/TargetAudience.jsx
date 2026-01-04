import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Wrench, ShoppingBag, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

const audiences = [
    {
        id: "clinics",
        icon: Stethoscope,
        title: "Clinics & Healthcare",
        subtitle: "For Dermatologists, Dentists & Hair Clinics",
        desc: "Automate your patient journey from inquiry to post-treatment care. Reduce no-shows and increase retention.",
        benefits: [
            "Automated Appointment Booking",
            "Pre-consultation Instructions",
            "Post-treatment Follow-ups",
            "Review Collection on Autopilot"
        ],
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "service",
        icon: Wrench,
        title: "Service Businesses",
        subtitle: "Plumbers, AC Repair & Technicians",
        desc: "Stop missing leads while you are on the job. Let our AI handle inquiries and schedule jobs for you.",
        benefits: [
            "24/7 Lead Qualification",
            "Instant Price Estimates",
            "Location-based Dealer Assignment",
            "Automated Job Reminders"
        ],
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        title: "E-Commerce Brands",
        subtitle: "D2C Brands & Online Stores",
        desc: "Recover abandoned carts and drive repeat purchases with personalized WhatsApp marketing.",
        benefits: [
            "Abandoned Cart Recovery (60%+ Open Rate)",
            "Order Confirmation & Tracking",
            "New Drop Alerts",
            "Customer Support AI Bot"
        ],
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "coaches",
        icon: GraduationCap,
        title: "Coaches & Consultants",
        subtitle: "Course Creators & Mentors",
        desc: "Scale your coaching business by automating student onboarding and webinar registrations.",
        benefits: [
            "Webinar Sign-up Automation",
            "Course Material Delivery",
            "Student Community Engagement",
            "Upsell Automation"
        ],
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
    }
];

export default function TargetAudience() {
    const [activeTab, setActiveTab] = useState(audiences[0]);

    return (
        <Section id="target-audience" className="relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -z-10" />

            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Who This Is <span className="text-gradient">Built For</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    We have tailored automation workflows for specific industries.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {audiences.map((audience) => (
                        <button
                            key={audience.id}
                            onClick={() => setActiveTab(audience)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab.id === audience.id
                                ? "bg-brand-primary/10 border-brand-primary text-white shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]"
                                : "bg-dark-100 border-white/5 text-gray-400 hover:bg-dark-200 hover:border-white/10"
                                }`}
                        >
                            <audience.icon className={`w-4 h-4 ${activeTab.id === audience.id ? "text-brand-primary" : ""}`} />
                            {audience.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                        {/* Text Content */}
                        <div className="order-2 lg:order-1 space-y-8">
                            <div>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${activeTab.bg} ${activeTab.color}`}>
                                    <activeTab.icon className="w-4 h-4" />
                                    {activeTab.title}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    {activeTab.subtitle}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {activeTab.desc}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {activeTab.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Button href="#contact" variant="primary" icon={ArrowRight}>
                                    Get {activeTab.title} Solution
                                </Button>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="order-1 lg:order-2">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="absolute inset-0 bg-dark/20 z-10" /> {/* Slight dark tint */}

                                <img
                                    src={activeTab.image}
                                    alt={activeTab.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Floating UI Element Mockup */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute bottom-6 left-6 right-6 bg-dark-100/90 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 shadow-xl"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center">
                                            <activeTab.icon className="w-4 h-4 text-brand-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">New Lead Detected</div>
                                            <div className="text-xs text-gray-400">Just now • WhatsApp</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-300">
                                        Possible value: <span className="text-brand-secondary font-bold">High</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Section>
    );
}

