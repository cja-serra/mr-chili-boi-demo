import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartSummaryProps {
  subtotal: number;
}

export function CartSummary({ subtotal }: CartSummaryProps) {
  return (
    <div
      className="rounded-xl p-6 sticky top-24"
      style={{ border: "1px solid var(--brand-border)", background: "white" }}
    >
      <h2 className="font-heading font-bold text-lg mb-5" style={{ color: "var(--brand-dark)" }}>
        Order Summary
      </h2>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between font-body text-sm">
          <span style={{ color: "var(--brand-text-muted)" }}>Subtotal</span>
          <span style={{ color: "var(--brand-text)" }}>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-body text-sm">
          <span style={{ color: "var(--brand-text-muted)" }}>Shipping</span>
          <span style={{ color: "var(--brand-text-muted)" }}>Calculated at checkout</span>
        </div>
        <div className="flex justify-between font-body text-sm">
          <span style={{ color: "var(--brand-text-muted)" }}>Tax</span>
          <span style={{ color: "var(--brand-text-muted)" }}>Calculated at checkout</span>
        </div>
      </div>

      <Separator style={{ background: "var(--brand-border)" }} />

      <div className="flex justify-between font-heading font-bold text-lg my-4">
        <span style={{ color: "var(--brand-dark)" }}>Estimated Total</span>
        <span style={{ color: "var(--brand-primary)" }}>${subtotal.toFixed(2)}</span>
      </div>

      <Link
        href="/checkout"
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full font-heading font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2"
        )}
        style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
      >
        <Lock className="w-4 h-4" />
        Proceed to Checkout
      </Link>

      <p className="font-body text-[10px] text-center mt-3" style={{ color: "var(--brand-text-muted)" }}>
        Placeholder. No real cart or payment yet.
      </p>
    </div>
  );
}
