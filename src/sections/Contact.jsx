import { Mail, MessageCircle, ArrowRight, User, MessageSquare } from "lucide-react";
import Section from "../components/Section";
import Button from "../components/Button";
import { useState } from "react";
import Card from "../components/Card";

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbz0J0VzANdgGXfLmf9E72nktTA_U9S_JsJVNWU93toKlZedqJkQNwsqZ52JX6OtkBdzxw/exec";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  console.log("🚀 CONTACT FORM FORM DATA — FINAL BUILD");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

<<<<<<< Updated upstream
    const payload = {
      firstName: e.target.firstName.value.trim(),
      lastName: e.target.lastName.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
      source: "Cortexaa Website",
    };

    try {
      const formData = new FormData();
      formData.append("firstName", payload.firstName);
      formData.append("lastName", payload.lastName);
      formData.append("email", payload.email);
      formData.append("message", payload.message);
      formData.append("source", payload.source);

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });
=======
                    <div className="space-y-6 mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center text-whatsapp">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">WhatsApp Us</h4>
                                <p className="text-gray-400">+91 89996 05327</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center text-blue-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Email Us</h4>
                                <p className="text-gray-400">cortexaa.co@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center text-purple-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Headquarters</h4>
                                <p className="text-gray-400">Maharashtra, India</p>
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> Stashed changes

      if (!res.ok) throw new Error("Webhook failed");

      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Failed to send form. Please try again or contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  }; // ✅ THIS WAS MISSING

  return (
    <Section id="contact" className="pb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Automate <br />
            Your <span className="text-gradient">Workflow</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Tell us about your business. We’ll design the automation.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MessageCircle className="text-whatsapp" />
              <span className="text-gray-400">+91 89996 05327</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <span className="text-gray-400">cortexaa.co@gmail.com</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">
            Get a Free Automation Audit
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-whatsapp transition-colors" />
                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full bg-dark-200/50 backdrop-blur-sm border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-whatsapp/50 focus:ring-1 focus:ring-whatsapp/50 transition-all"
                />
              </div>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-whatsapp transition-colors" />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full bg-dark-200/50 backdrop-blur-sm border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-whatsapp/50 focus:ring-1 focus:ring-whatsapp/50 transition-all"
                />
              </div>
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-whatsapp transition-colors" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-dark-200/50 backdrop-blur-sm border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-whatsapp/50 focus:ring-1 focus:ring-whatsapp/50 transition-all"
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-whatsapp transition-colors" />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={4}
                className="w-full bg-dark-200/50 backdrop-blur-sm border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-whatsapp/50 focus:ring-1 focus:ring-whatsapp/50 transition-all resize-none"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full justify-center shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/40">
              {loading ? "Sending..." : "Send Request"}
              {!loading && <ArrowRight />}
            </Button>
          </form>

          {submitted && (
            <p className="text-green-400 text-center mt-4">
              ✅ Sent successfully!
            </p>
          )}
        </Card>
      </div>
    </Section>
  );
}
