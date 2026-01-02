import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Bot, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Section from "../components/Section";

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

  const yOffset = -80; // header offset if any
  const y =
    el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
<Button
  type="button"   // 👈 ADD THIS
  className="h-14 px-8 text-lg"
  icon={ArrowRight}
  onClick={scrollToDemo}
>
  View WhatsApp Demo
</Button>


  return (
    <Section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-whatsapp/20 rounded-full blur-[140px] -z-10 opacity-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[140px] -z-10 opacity-30" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
  Live WhatsApp Automation Demo
</h2>

<p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
  See how appointments, replies, and follow-ups are handled automatically
  on WhatsApp — without manual work.
</p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp/10 border border-whatsapp/20 text-whatsapp text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-whatsapp" />
            </span>
            WhatsApp Automation • Live Demo
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            We automate{" "}
            <span className="text-gradient">WhatsApp & workflows</span>{" "}
            for businesses
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            Reduce calls, save staff time, and never miss a lead using
            WhatsApp automation, AI replies, and custom workflows.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              className="h-14 px-8 text-lg"
              icon={ArrowRight}
              onClick={scrollToDemo}
            >
              View WhatsApp Demo
            </Button>

            <Button
              variant="secondary"
              className="h-14 px-8 text-lg"
              icon={MessageCircle}
              onClick={openWhatsApp}
            >
              Talk to Us on WhatsApp
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-gray-500">
            Trusted workflows • No spam • No lock-in
          </p>
        </motion.div>

        {/* RIGHT: DEMO VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Floating icons */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 bg-dark-200 p-4 rounded-2xl border border-white/10 shadow-xl"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-5 -left-5 z-20 bg-whatsapp p-4 rounded-2xl shadow-xl shadow-whatsapp/20"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>
<span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
  Demo Simulation
</span>

          {/* Chat Card */}
          <div className="relative z-10 bg-dark-100 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Header */}
            <div className="bg-whatsapp/10 border-b border-white/5 p-4 flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center text-white">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Cortexaa Automation</h3>
                <p className="text-xs text-whatsapp">● Online</p>
              </div>
            </div>

            {/* Chat body */}
            <div className="p-6 space-y-4 h-[380px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-5" />

              <div className="flex justify-start">
                <div className="bg-dark-300 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                  Hi, I’d like to book a skin consultation for tomorrow.
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-whatsapp text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg shadow-whatsapp/10">
                 Sure! Please select the service you’re interested in:
1️⃣ Skin Consultation  
2️⃣ Hair Treatment

                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-dark-300 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                  Skin treatment
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-whatsapp text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg shadow-whatsapp/10">
                  Appointment booked. You’ll receive a reminder on WhatsApp.
                </div>
              </div>

              {/* Demo overlay */}
              <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-dark-100 border border-whatsapp/30 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
                  <div className="w-8 h-8 border-2 border-whatsapp border-t-transparent rounded-full animate-spin" />
                  <span className="text-whatsapp font-medium">
                    Saved to Google Sheets • Reminder scheduled • Staff notified
 & reminders scheduled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
