export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading font-bold text-4xl mb-2" style={{ color: "var(--brand-dark)" }}>
        Privacy Policy
      </h1>
      <p className="font-body text-sm mb-10 italic" style={{ color: "var(--brand-text-muted)" }}>
        Placeholder policy — review with legal counsel before launch.
      </p>

      {[
        {
          title: "Information We Collect",
          body: "Placeholder text. We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you place an order. We also collect usage data and cookies to improve our services.",
        },
        {
          title: "How We Use Your Information",
          body: "Placeholder text. We use the information we collect to process orders, send order confirmations, provide customer support, and improve our website. We do not sell your personal information to third parties.",
        },
        {
          title: "Cookies",
          body: "Placeholder text. We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.",
        },
        {
          title: "Data Security",
          body: "Placeholder text. We implement industry-standard security measures to protect your personal information. Payment data is encrypted using SSL technology and processed securely through our payment provider.",
        },
        {
          title: "Third-Party Services",
          body: "Placeholder text. We may use third-party services for payment processing, shipping, and analytics. These services have their own privacy policies and we encourage you to review them.",
        },
        {
          title: "Your Rights",
          body: "Placeholder text. You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at privacy@mrchiliboi.com (placeholder).",
        },
        {
          title: "Changes to This Policy",
          body: "Placeholder text. We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.",
        },
      ].map(({ title, body }) => (
        <section key={title} className="mb-8">
          <h2 className="font-heading font-semibold text-lg mb-3" style={{ color: "var(--brand-dark)" }}>
            {title}
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>
            {body}
          </p>
        </section>
      ))}
    </div>
  );
}
