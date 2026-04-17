export default function ShippingReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading font-bold text-4xl mb-2" style={{ color: "var(--brand-dark)" }}>
        Shipping & Returns
      </h1>
      <p className="font-body text-sm mb-10 italic" style={{ color: "var(--brand-text-muted)" }}>
        Placeholder policy — content to be finalized before launch.
      </p>

      {/* Shipping table */}
      <section className="mb-12">
        <h2 className="font-heading font-semibold text-xl mb-5" style={{ color: "var(--brand-dark)" }}>
          Shipping Rates
        </h2>
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--brand-border)" }}>
          <table className="w-full text-sm font-body">
            <thead>
              <tr style={{ background: "var(--brand-primary)", color: "var(--brand-cream)" }}>
                <th className="text-left px-5 py-3 font-heading font-semibold">Method</th>
                <th className="text-left px-5 py-3 font-heading font-semibold">Estimated Time</th>
                <th className="text-left px-5 py-3 font-heading font-semibold">Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Standard Shipping", "5–7 business days", "$4.99"],
                ["Expedited Shipping", "2–3 business days", "$9.99"],
                ["Overnight Shipping", "Next business day", "$19.99"],
                ["Free Shipping", "5–7 business days", "Free on orders over $35"],
              ].map(([method, time, cost], i) => (
                <tr
                  key={method}
                  style={{ background: i % 2 === 0 ? "white" : "var(--brand-muted)" }}
                >
                  <td className="px-5 py-3.5" style={{ color: "var(--brand-text)" }}>{method}</td>
                  <td className="px-5 py-3.5" style={{ color: "var(--brand-text-muted)" }}>{time}</td>
                  <td className="px-5 py-3.5 font-medium" style={{ color: "var(--brand-primary)" }}>{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body text-xs mt-3 italic" style={{ color: "var(--brand-text-muted)" }}>
          Placeholder shipping table. Actual rates determined at checkout.
        </p>
      </section>

      {/* Return policy */}
      <section>
        <h2 className="font-heading font-semibold text-xl mb-5" style={{ color: "var(--brand-dark)" }}>
          Return Policy
        </h2>
        <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>
          <p>
            <strong>30-Day Return Window (Placeholder):</strong> We stand behind
            every product. If you are not satisfied with your purchase for any
            reason, you may return unopened items within 30 days of delivery for a
            full refund.
          </p>
          <p>
            <strong>Damaged or Defective Items (Placeholder):</strong> If your
            order arrives damaged or defective, please contact us within 7 days of
            delivery. We will arrange a replacement or refund at no additional cost.
          </p>
          <p>
            <strong>How to Initiate a Return (Placeholder):</strong> Email our
            support team at support@mrchiliboi.com with your order number and a
            brief description of the issue. We will respond within 24 hours with
            return instructions.
          </p>
          <p>
            <strong>Refund Processing (Placeholder):</strong> Refunds are processed
            within 5–7 business days after we receive the returned item. The amount
            will be credited back to your original payment method.
          </p>
        </div>
      </section>
    </div>
  );
}
