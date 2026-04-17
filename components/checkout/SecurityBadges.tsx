export function SecurityBadges() {
  const badges = [
    { icon: "🔒", label: "SSL Encrypted" },
    { icon: "💳", label: "Stripe Ready" },
    { icon: "✅", label: "Verified Checkout" },
    { icon: "🛡️", label: "Buyer Protected" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-2 px-4 py-2 rounded-lg"
          style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}
        >
          <span className="text-base">{b.icon}</span>
          <span className="font-body text-xs font-medium" style={{ color: "var(--brand-text-muted)" }}>
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
