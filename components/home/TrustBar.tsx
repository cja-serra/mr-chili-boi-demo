const trustItems = [
  { icon: "🔒", title: "Secure Checkout", desc: "SSL encrypted payments" },
  { icon: "↩️", title: "Free Returns", desc: "30-day hassle-free returns" },
  { icon: "🚚", title: "Fast Shipping", desc: "Ships within 1-2 business days" },
  { icon: "💬", title: "24/7 Support", desc: "We're always here to help" },
];

export function TrustBar() {
  return (
    <section style={{ background: "var(--brand-muted)", borderTop: "1px solid var(--brand-border)", borderBottom: "1px solid var(--brand-border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "var(--brand-primary)", color: "var(--brand-cream)" }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-heading font-semibold text-sm" style={{ color: "var(--brand-dark)" }}>
                  {item.title}
                </p>
                <p className="font-body text-xs mt-0.5" style={{ color: "var(--brand-text-muted)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
