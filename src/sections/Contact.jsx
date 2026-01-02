import {
  Mail,
  MessageCircle,
  ArrowRight,
  User,
  MessageSquare,
  MapPin,
} from "lucide-react";
import Section from "../components/Section";
import Button from "../components/Button";
import { useState } from "react";
import Card from "../components/Card";

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbz0J0VzANdgGXfLmf9E72nktTA_U9S_JsJVNWU93toKlZedqJkQNwsqZ52JX6OtkBdzxw/exec";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      firstName: e.target.firstName.value.trim(),
      lastName: e.target.lastName.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
      source: "Cortexaa Website",
    };

    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) =>
        formData.append(key, value)
      );

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Webhook failed");

      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Failed to send form. Please try again or contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="pb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT INFO */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Automate <br />
            Your <span className="text-gradient">Workflow</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Tell us about your business. We’ll design the automation.
          </p>

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

        {/* FORM */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">
            Get a Free Automation Audit
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full bg-dark-200/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white"
                />
              </div>

              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full bg-dark-200/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white"
                />
              </div>
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-dark-200/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white"
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="w-full bg-dark-200/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full justify-center"
            >
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
