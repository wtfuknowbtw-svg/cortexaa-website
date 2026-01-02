import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import HowItWorks from './sections/HowItWorks';
import TargetAudience from './sections/TargetAudience';
import LiveDemo from './sections/LiveDemo';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';

function App() {

  // ✅ PUT CONSOLE.LOG HERE
  console.log(
    "Backend URL:",
    import.meta.env.VITE_BACKEND_URL
  );

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-whatsapp/30 selection:text-whatsapp-dark">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-whatsapp/10 via-dark to-dark pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <HowItWorks />
        <TargetAudience />
        <LiveDemo />
        <Pricing />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-white/40 text-sm border-t border-white/5 bg-dark/50 backdrop-blur-lg">
        <p className="mb-2">Cortexaa — AI Automation • WhatsApp Workflows • Custom APIs</p>
        <p className="text-xs text-white/20">Built using n8n, WhatsApp, AI models & backend integrations</p>
      </footer>
    </div>
  );
}

export default App;
