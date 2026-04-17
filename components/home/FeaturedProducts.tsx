import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2
            className="font-heading font-bold text-3xl md:text-4xl"
            style={{ color: "var(--brand-dark)" }}
          >
            Featured Products
          </h2>
          <p
            className="font-body text-sm mt-2"
            style={{ color: "var(--brand-text-muted)" }}
          >
            Our most-loved flavors, hand-picked for you.
          </p>
        </div>
        <Link
          href="/categories/category-a"
          className="hidden sm:flex items-center gap-1.5 font-body font-semibold text-sm transition-colors hover:text-brand-primary-dark"
          style={{ color: "var(--brand-primary)" }}
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Link
          href="/categories/category-a"
          className="inline-flex items-center gap-1.5 font-body font-semibold text-sm"
          style={{ color: "var(--brand-primary)" }}
        >
          View all products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
