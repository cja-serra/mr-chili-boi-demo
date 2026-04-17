"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to cart! 🌶️`);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div
        className="card-lift rounded-xl overflow-hidden h-full flex flex-col"
        style={{
          background: "white",
          border: "1px solid var(--brand-border)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-brand-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            unoptimized
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {!product.inStock && (
              <Badge
                className="text-[10px] font-semibold"
                style={{ background: "var(--brand-dark)", color: "var(--brand-cream)" }}
              >
                Out of Stock
              </Badge>
            )}
            {product.badge && product.inStock && (
              <Badge
                className="text-[10px] font-semibold"
                style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
              >
                {product.badge}
              </Badge>
            )}
            {product.isNew && product.inStock && (
              <Badge
                className="text-[10px] font-semibold"
                style={{ background: "var(--brand-green)", color: "white", border: "none" }}
              >
                New
              </Badge>
            )}
          </div>

          {/* Compare price label */}
          {product.comparePrice && product.inStock && (
            <div
              className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold"
              style={{ background: "var(--brand-secondary)", color: "white" }}
            >
              SALE
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <p
            className="font-body text-[11px] uppercase tracking-widest mb-1"
            style={{ color: "var(--brand-text-muted)" }}
          >
            {product.sku}
          </p>
          <h3
            className="font-heading font-semibold text-base leading-tight mb-1.5 group-hover:text-brand-primary transition-colors flex-1"
            style={{ color: "var(--brand-dark)" }}
          >
            {product.name}
          </h3>
          <p
            className="font-body text-xs leading-relaxed mb-3"
            style={{ color: "var(--brand-text-muted)" }}
          >
            {product.shortDescription.slice(0, 80)}
            {product.shortDescription.length > 80 ? "..." : ""}
          </p>

          {/* Price row */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="font-heading font-bold text-lg"
              style={{ color: "var(--brand-primary)" }}
            >
              ${product.price.toFixed(2)}
            </span>
            {product.comparePrice && (
              <span
                className="font-body text-sm line-through"
                style={{ color: "var(--brand-text-muted)" }}
              >
                ${product.comparePrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            size="sm"
            className="w-full font-heading font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-100"
            style={
              product.inStock
                ? { background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }
                : { background: "var(--brand-muted)", color: "var(--brand-text-muted)", border: "1px solid var(--brand-border)", cursor: "not-allowed" }
            }
          >
            {product.inStock ? (
              <>
                <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                Add to Cart
              </>
            ) : (
              "Out of Stock"
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
}
