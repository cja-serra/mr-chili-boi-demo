"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2 } from "lucide-react";

export default function ComingSoonPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You are on the wholesale waitlist! We will be in touch. 🌶️");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-lg text-center">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}
        >
          <Building2 className="w-10 h-10" style={{ color: "var(--brand-primary)" }} />
        </div>

        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-5"
          style={{ background: "var(--brand-accent)", color: "var(--brand-dark)" }}
        >
          Coming Soon
        </span>

        <h1 className="font-heading font-bold text-4xl mb-4" style={{ color: "var(--brand-dark)" }}>
          Wholesale &amp; Trade Program
        </h1>

        <p className="font-body text-base leading-relaxed mb-8" style={{ color: "var(--brand-text-muted)" }}>
          We are building a dedicated wholesale program for retailers, restaurants,
          and distributors. Join the waitlist and be first to know when it launches.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto mb-4">
          <Input
            type="email"
            placeholder="your@business.com"
            className="flex-1"
            style={{ borderColor: "var(--brand-border)" }}
          />
          <Button
            type="submit"
            className="font-heading font-semibold transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
          >
            Notify Me
          </Button>
        </form>

        <p className="font-body text-xs italic" style={{ color: "var(--brand-text-muted)" }}>
          Placeholder email signup. No real data is collected in this demo.
        </p>
      </div>
    </div>
  );
}
