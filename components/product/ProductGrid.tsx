"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { ProductSkeleton } from "./ProductSkeleton";
import type { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  columns?: 3 | 4;
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const gridClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  if (loading) {
    return (
      <div className={`grid ${gridClass} gap-5`}>
        {Array.from({ length: products.length || 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-4">🌶️</p>
        <p className="font-heading font-semibold text-lg" style={{ color: "var(--brand-text)" }}>
          No products found
        </p>
        <p className="font-body text-sm mt-2" style={{ color: "var(--brand-text-muted)" }}>
          Check back soon for new arrivals.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridClass} gap-5`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
