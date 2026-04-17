import Link from "next/link";
import { categories } from "@/data/categories";

const shopLinks = categories.map((c) => ({
  href: `/categories/${c.slug}`,
  label: `${c.emoji} ${c.name}`,
}));

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/coming-soon", label: "Wholesale" },
];

const supportLinks = [
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--brand-dark)",
        color: "var(--brand-cream)",
        borderTop: "3px solid var(--brand-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ background: "var(--brand-primary)" }}
              >
                🌶️
              </div>
              <div>
                <p className="font-heading font-bold text-base" style={{ color: "var(--brand-cream)" }}>
                  Mr. Chili Boi
                </p>
                <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--brand-text-muted)" }}>
                  It&#39;s All About Nuts
                </p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,253,240,0.6)" }}>
              Bold, fiery, and unforgettable. Premium chili-flavored nuts for
              people who like things with a kick.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--brand-accent)" }}>
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors hover:text-brand-accent"
                    style={{ color: "rgba(255,253,240,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--brand-accent)" }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors hover:text-brand-accent"
                    style={{ color: "rgba(255,253,240,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--brand-accent)" }}>
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors hover:text-brand-accent"
                    style={{ color: "rgba(255,253,240,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Trust icons */}
            <div className="mt-6 flex gap-3">
              {["🔒", "↩️", "🚚", "💬"].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-md flex items-center justify-center text-sm"
                  style={{ background: "rgba(255,253,240,0.08)" }}
                  title={["Secure Checkout", "Free Returns", "Fast Shipping", "24/7 Support"][i]}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,253,240,0.1)" }}
        >
          <p className="font-body text-xs" style={{ color: "rgba(255,253,240,0.4)" }}>
            © 2026 Mr. Chili Boi. All rights reserved. Placeholder content — demo build.
          </p>
          <p className="font-body text-xs" style={{ color: "rgba(255,253,240,0.4)" }}>
            Built by{" "}
            <a
              href="https://serrachat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-accent underline underline-offset-2"
            >
              Serra Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
