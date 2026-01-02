import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Industries", href: "#target-audience" },
        { name: "Demo", href: "#live-demo" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-dark/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
                        <div className="w-8 h-8 rounded-lg bg-whatsapp flex items-center justify-center text-white">
                            <MessageCircle className="w-5 h-5 fill-current" />
                        </div>
                        <span>Cortexaa</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:shadow-[0_4px_20px_-5px_rgba(37,211,102,0.5)]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button href="#contact" variant="primary" className="!px-5 !py-2 !text-sm">
                            Book a Call
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-400 hover:text-white"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-[72px] z-40 bg-dark-100/95 backdrop-blur-xl border-t border-white/5 md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-whatsapp py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4">
                                <Button href="#contact" variant="primary" className="w-full justify-center">
                                    Book a Call
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
