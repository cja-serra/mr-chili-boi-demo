"use client";

import Link from "next/link";
import { categories } from "@/data/categories";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 shadow-nav"
      style={{ background: "var(--brand-cream)", borderBottom: "2px solid var(--brand-primary)" }}
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              onClick={onClose}
              className="group flex items-start gap-3 p-4 rounded-lg transition-all duration-200 hover:bg-brand-muted"
            >
              <span className="text-2xl mt-0.5">{cat.emoji}</span>
              <div>
                <p
                  className="font-heading font-semibold text-base group-hover:text-brand-primary transition-colors"
                  style={{ color: "var(--brand-text)" }}
                >
                  {cat.name}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--brand-text-muted)" }}>
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div
          className="mt-6 pt-4 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--brand-border)" }}
        >
          <p className="text-sm font-body" style={{ color: "var(--brand-text-muted)" }}>
            Browse all {categories.reduce((sum, c) => sum + c.productCount, 0)} products
          </p>
          <Link
            href="/categories/category-a"
            onClick={onClose}
            className="text-sm font-semibold transition-colors hover:text-brand-primary"
            style={{ color: "var(--brand-primary)" }}
          >
            Shop all →
          </Link>
        </div>
      </div>
    </div>
  );
}
