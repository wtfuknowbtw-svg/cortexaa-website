import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import Section from "../components/Section";
import ThreeBackground from "../components/ThreeBackground";

export default function Hero() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918999605327?text=Hi%20I%20want%20WhatsApp%20automation%20for%20my%20business",
      "_blank"
    );
  };

  const scrollToDemo = () => {
    const el = document.getElementById("live-demo");
    if (!el) {
      console.warn("Live demo section not found");
      return;
    }
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Section fullWidth className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background - Absolute positioning handled inside the component */}
      <ThreeBackground />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-gray-300 hover:border-brand-primary/50 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
            </span>
            <span>Intelligent WhatsApp Automation</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Automate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary animate-pulse-slow">
              Entire Workflow
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-400 leading-relaxed">
            Replace manual busywork with intelligent AI agents. Cortexaa connects WhatsApp, custom APIs, and n8n to build self-driving business processes.
          </p>

          {/* Value Props */}
          <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
              <span>24/7 AI Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
              <span>No Code Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
              <span>Enterprise Security</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              className="h-14 px-8 text-lg bg-brand-primary hover:bg-brand-primary/90 shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] border-none"
              icon={ArrowRight}
              onClick={openWhatsApp}
            >
              Start Automation
            </Button>

            <Button
              variant="secondary"
              className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 hover:text-white hover:border-brand-secondary/50"
              icon={Play}
              onClick={scrollToDemo}
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: SPACER FOR 3D SPHERE */}
        {/* The 3D background occupies this visual space visually, 
            but we keep the grid column to ensure the left text doesn't stretch full width */}
        <div className="hidden lg:block h-[500px]"></div>
      </div>
    </Section>
  );
}

