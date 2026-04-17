"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you soon. 🌶️");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="font-heading font-bold text-4xl mb-3" style={{ color: "var(--brand-dark)" }}>
          Get in Touch
        </h1>
        <p className="font-body text-base" style={{ color: "var(--brand-text-muted)" }}>
          Questions, feedback, wholesale inquiries? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                  Your Name
                </label>
                <Input placeholder="Jane Doe" style={{ borderColor: "var(--brand-border)" }} />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                  Email Address
                </label>
                <Input type="email" placeholder="jane@example.com" style={{ borderColor: "var(--brand-border)" }} />
              </div>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                Subject
              </label>
              <Input placeholder="What can we help you with?" style={{ borderColor: "var(--brand-border)" }} />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us what you need..."
                className="w-full px-3 py-2.5 rounded-lg font-body text-sm resize-none outline-none transition-colors"
                style={{
                  border: "1px solid var(--brand-border)",
                  color: "var(--brand-text)",
                  background: "white",
                }}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="font-heading font-semibold text-base w-full sm:w-auto px-10 transition-all duration-200 hover:scale-[1.02] active:scale-100"
              style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact info sidebar */}
        <div className="space-y-5">
          {[
            {
              icon: <Mail className="w-5 h-5" />,
              title: "Email Support",
              value: "support@mrchiliboi.com",
              note: "Placeholder email address",
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: "Business Hours",
              value: "Mon–Fri, 9am–5pm PST",
              note: "Placeholder hours",
            },
            {
              icon: <MessageCircle className="w-5 h-5" />,
              title: "Response Time",
              value: "Within 24 hours",
              note: "Placeholder SLA",
            },
          ].map(({ icon, title, value, note }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-xl"
              style={{ border: "1px solid var(--brand-border)", background: "var(--brand-muted)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--brand-primary)", color: "var(--brand-cream)" }}
              >
                {icon}
              </div>
              <div>
                <p className="font-heading font-semibold text-sm" style={{ color: "var(--brand-dark)" }}>
                  {title}
                </p>
                <p className="font-body text-sm mt-0.5" style={{ color: "var(--brand-text)" }}>
                  {value}
                </p>
                <p className="font-body text-[10px] mt-0.5 italic" style={{ color: "var(--brand-text-muted)" }}>
                  {note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
