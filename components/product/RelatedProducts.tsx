import { ProductCard } from "./ProductCard";
import type { Product } from "@/data/products";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) return null;

  return (
    <section className="mt-16 pt-12" style={{ borderTop: "1px solid var(--brand-border)" }}>
      <h2
        className="font-heading font-bold text-2xl mb-8"
        style={{ color: "var(--brand-dark)" }}
      >
        You Might Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
