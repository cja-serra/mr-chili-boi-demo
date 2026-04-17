"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, CreditCard } from "lucide-react";

export function CheckoutForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/order-confirmation");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact */}
      <div>
        <h3 className="font-heading font-semibold text-base mb-3" style={{ color: "var(--brand-dark)" }}>
          Contact Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
              First Name
            </label>
            <Input placeholder="Jane" style={{ borderColor: "var(--brand-border)" }} />
          </div>
          <div>
            <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
              Last Name
            </label>
            <Input placeholder="Doe" style={{ borderColor: "var(--brand-border)" }} />
          </div>
        </div>
        <div className="mt-3">
          <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
            Email Address
          </label>
          <Input type="email" placeholder="jane@example.com" style={{ borderColor: "var(--brand-border)" }} />
        </div>
      </div>

      {/* Shipping */}
      <div>
        <h3 className="font-heading font-semibold text-base mb-3" style={{ color: "var(--brand-dark)" }}>
          Shipping Address
        </h3>
        <div className="space-y-3">
          <div>
            <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
              Street Address
            </label>
            <Input placeholder="123 Main Street" style={{ borderColor: "var(--brand-border)" }} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                City
              </label>
              <Input placeholder="Los Angeles" style={{ borderColor: "var(--brand-border)" }} />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                State / ZIP
              </label>
              <Input placeholder="CA 90001" style={{ borderColor: "var(--brand-border)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div>
        <h3 className="font-heading font-semibold text-base mb-3 flex items-center gap-2" style={{ color: "var(--brand-dark)" }}>
          <CreditCard className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
          Payment Details
        </h3>
        <div
          className="p-4 rounded-xl text-center mb-3"
          style={{ background: "var(--brand-muted)", border: "1px dashed var(--brand-border)" }}
        >
          <p className="font-body text-xs" style={{ color: "var(--brand-text-muted)" }}>
            Stripe payment form would appear here.
          </p>
          <p className="font-body text-[10px] mt-1" style={{ color: "var(--brand-text-muted)" }}>
            Stripe integration is a roadmap item — placeholder only.
          </p>
        </div>
        <div className="space-y-3">
          <div>
            <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
              Card Number
            </label>
            <Input placeholder="1234 5678 9012 3456" style={{ borderColor: "var(--brand-border)" }} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                Expiry
              </label>
              <Input placeholder="MM / YY" style={{ borderColor: "var(--brand-border)" }} />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wide block mb-1.5" style={{ color: "var(--brand-text-muted)" }}>
                CVC
              </label>
              <Input placeholder="123" style={{ borderColor: "var(--brand-border)" }} />
            </div>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full font-heading font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-100"
        style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
      >
        <Lock className="w-4 h-4 mr-2" />
        Place Order (Placeholder)
      </Button>

      <p className="font-body text-[10px] text-center" style={{ color: "var(--brand-text-muted)" }}>
        No real payment is processed. This is a demo build only.
      </p>
    </form>
  );
}
