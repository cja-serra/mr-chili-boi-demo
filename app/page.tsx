import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustBar } from "@/components/home/TrustBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <TrustBar />
      <FeaturedProducts />

      {/* Newsletter strip */}
      <section style={{ background: "var(--brand-dark)" }} className="py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-3xl mb-3">🌶️</p>
          <h2
            className="font-heading font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "var(--brand-cream)" }}
          >
            Get the Heat First
          </h2>
          <p
            className="font-body text-sm mb-6"
            style={{ color: "rgba(255,253,240,0.65)" }}
          >
            New flavors, exclusive drops, and early access straight to your inbox.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-lg font-body text-sm outline-none"
              style={{
                background: "rgba(255,253,240,0.1)",
                border: "1px solid rgba(255,253,240,0.2)",
                color: "var(--brand-cream)",
              }}
            />
            <button
              className="px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-100"
              style={{ background: "var(--brand-primary)", color: "var(--brand-cream)" }}
            >
              Subscribe
            </button>
          </div>
          <p
            className="font-body text-xs mt-3"
            style={{ color: "rgba(255,253,240,0.35)" }}
          >
            Placeholder. Email signup not yet active.
          </p>
        </div>
      </section>
    </>
  );
}
