import { SecurityBadges } from "@/components/checkout/SecurityBadges";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { Separator } from "@/components/ui/separator";

const orderItems = [
  { name: "Product A1", qty: 2, price: 9.99 },
  { name: "Product D1", qty: 1, price: 11.99 },
  { name: "Product B4", qty: 1, price: 10.99 },
];
const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);

export default function CheckoutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="font-heading font-bold text-3xl mb-2" style={{ color: "var(--brand-dark)" }}>
          Checkout
        </h1>
        <SecurityBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3">
          <div
            className="rounded-xl p-6"
            style={{ border: "1px solid var(--brand-border)", background: "white" }}
          >
            <CheckoutForm />
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-2">
          <div
            className="rounded-xl p-5 sticky top-24"
            style={{ border: "1px solid var(--brand-border)", background: "var(--brand-muted)" }}
          >
            <h3 className="font-heading font-bold text-base mb-4" style={{ color: "var(--brand-dark)" }}>
              Order Summary
            </h3>
            <div className="space-y-2.5 mb-4">
              {orderItems.map((item) => (
                <div key={item.name} className="flex justify-between font-body text-sm">
                  <span style={{ color: "var(--brand-text)" }}>
                    {item.name} × {item.qty}
                  </span>
                  <span style={{ color: "var(--brand-text)" }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <Separator style={{ background: "var(--brand-border)" }} />
            <div className="flex justify-between font-heading font-bold text-base mt-4">
              <span style={{ color: "var(--brand-dark)" }}>Total</span>
              <span style={{ color: "var(--brand-primary)" }}>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
