"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

export interface CartItemData {
  slug: string;
  name: string;
  sku: string;
  price: number;
  image: string;
  qty: number;
}

interface CartItemProps {
  item: CartItemData;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <div
      className="flex gap-4 py-5"
      style={{ borderBottom: "1px solid var(--brand-border)" }}
    >
      {/* Image */}
      <div
        className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"
        style={{ background: "var(--brand-muted)" }}
      >
        <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-body text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "var(--brand-text-muted)" }}>
          {item.sku}
        </p>
        <p className="font-heading font-semibold text-base" style={{ color: "var(--brand-dark)" }}>
          {item.name}
        </p>
        <p className="font-heading font-bold text-base mt-1" style={{ color: "var(--brand-primary)" }}>
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Qty + Remove */}
      <div className="flex flex-col items-end gap-3">
        <button
          className="p-1.5 rounded transition-colors hover:bg-brand-muted"
          title="Remove item (placeholder)"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" style={{ color: "var(--brand-text-muted)" }} />
        </button>
        <div
          className="flex items-center rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--brand-border)" }}
        >
          <button className="w-7 h-7 flex items-center justify-center transition-colors hover:bg-brand-muted">
            <Minus className="w-3 h-3" style={{ color: "var(--brand-text)" }} />
          </button>
          <span
            className="w-8 h-7 flex items-center justify-center font-body text-sm font-semibold"
            style={{ color: "var(--brand-dark)", borderLeft: "1px solid var(--brand-border)", borderRight: "1px solid var(--brand-border)" }}
          >
            {item.qty}
          </span>
          <button className="w-7 h-7 flex items-center justify-center transition-colors hover:bg-brand-muted">
            <Plus className="w-3 h-3" style={{ color: "var(--brand-text)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
