export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading font-bold text-4xl mb-2" style={{ color: "var(--brand-dark)" }}>
        Terms &amp; Conditions
      </h1>
      <p className="font-body text-sm mb-10 italic" style={{ color: "var(--brand-text-muted)" }}>
        Placeholder terms — review with legal counsel before launch.
      </p>

      {[
        {
          title: "Acceptance of Terms",
          body: "Placeholder text. By accessing and using the Mr. Chili Boi website and purchasing our products, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.",
        },
        {
          title: "Products and Orders",
          body: "Placeholder text. All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time. Prices are subject to change without notice. We reserve the right to refuse or cancel any order.",
        },
        {
          title: "Payment",
          body: "Placeholder text. We accept major credit cards and other payment methods as indicated at checkout. All payments are processed securely. By submitting payment, you represent that you are authorized to use the payment method provided.",
        },
        {
          title: "Shipping and Delivery",
          body: "Placeholder text. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by carrier issues, weather, or other circumstances beyond our control. Risk of loss transfers to you upon delivery.",
        },
        {
          title: "Intellectual Property",
          body: "Placeholder text. All content on this website, including text, graphics, logos, and images, is the property of Mr. Chili Boi and protected by applicable intellectual property laws. You may not reproduce or distribute our content without written permission.",
        },
        {
          title: "Limitation of Liability",
          body: "Placeholder text. To the fullest extent permitted by law, Mr. Chili Boi shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products.",
        },
        {
          title: "Governing Law",
          body: "Placeholder text. These Terms shall be governed by and construed in accordance with applicable state and federal laws. Any disputes shall be resolved through binding arbitration.",
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
