import { Check, Zap } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

const plans = [
    {
        name: "Starter",
        price: "₹5,000",
        desc: "Good for small clinics & shops.",
        features: ["WhatsApp Automation", "Appointment booking flow", "Google Sheet integration", "Basic Support"],
        highlight: false
    },
    {
        name: "Growth",
        price: "₹10,000",
        desc: "For businesses scaling up.",
        features: ["AI Auto-replies", "Follow-ups & Reminders", "Advanced Logic & Conditions", "CRM Sync"],
        highlight: true
    },
    {
        name: "Custom",
        price: "Custom",
        desc: "For complex needs.",
        features: ["Custom API Integrations", "Dashboards", "Complex Workflows", "Dedicated Account Manager"],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <Section id="pricing">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Pricing <span className="text-gradient">(Simple & Transparent)</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    No monthly lock-in. No hidden costs.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        className={`flex flex-col ${plan.highlight ? 'border-whatsapp/50 bg-whatsapp/5 ring-1 ring-whatsapp/20' : 'bg-dark-100'}`}
                        hover={true}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 right-0 bg-whatsapp text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2">{plan.price}</div>
                            <p className="text-gray-400 text-sm">{plan.desc}</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className="w-5 h-5 text-whatsapp flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant={plan.highlight ? 'primary' : 'secondary'}
                            className="w-full justify-center"
                        >
                            Get Started
                        </Button>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-8 text-gray-500 text-sm">
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-whatsapp" /> No Monthly Lock-in</span>
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-whatsapp" /> Free Automation Audit</span>
                </div>
            </div>
        </Section>
    );
}
