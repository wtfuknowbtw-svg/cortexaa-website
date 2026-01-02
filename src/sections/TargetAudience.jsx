import { motion } from "framer-motion";
import { Stethoscope, Wrench, ShoppingBag, GraduationCap } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";

const audiences = [
    {
        icon: Stethoscope,
        title: "Clinics",
        desc: "Skin, Hair & Dental. Automate bookings & follow-ups.",
        color: "from-blue-400 to-cyan-400",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: Wrench,
        title: "Service Business",
        desc: "Plumbers, AC Repair, Tech Support. Qualify leads 24/7.",
        color: "from-orange-400 to-red-400",
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce",
        desc: "Small & medium brands. Abandoned cart recovery.",
        color: "from-purple-400 to-pink-400",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: GraduationCap,
        title: "Coaches",
        desc: "Consultants & Educators. Sell courses on autopilot.",
        color: "from-emerald-400 to-green-400",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
    }
];

export default function TargetAudience() {
    return (
        <Section id="target-audience">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Who This Is <span className="text-gradient">Built For</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    If your business runs on calls + WhatsApp — this is for you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {audiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="p-0 overflow-hidden h-64 group">
                            <div className="absolute inset-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
                            </div>

                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-lg`}>
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-300">{item.desc}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
