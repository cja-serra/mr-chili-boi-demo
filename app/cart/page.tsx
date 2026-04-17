import Link from "next/link";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";

import { ShoppingCart, ArrowLeft } from "lucide-react";

// Placeholder cart items
const placeholderItems = [
  {
    slug: "product-a1",
    name: "Product A1",
    sku: "MCB-A1-001",
    price: 9.99,
    image: "https://placehold.co/400x400/E8581A/FFFDF0?text=Product+A1",
    qty: 2,
  },
  {
    slug: "product-d1",
    name: "Product D1",
    sku: "MCB-D1-001",
    price: 11.99,
    image: "https://placehold.co/400x400/C47A00/FFFDF0?text=Product+D1",
    qty: 1,
  },
  {
    slug: "product-b4",
    name: "Product B4",
    sku: "MCB-B4-001",
    price: 10.99,
    image: "https://placehold.co/400x400/CC4400/FFFDF0?text=Product+B4",
    qty: 1,
  },
];

const subtotal = placeholderItems.reduce((sum, i) => sum + i.price * i.qty, 0);

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* "Payment coming soon" banner */}
      <div
        className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-body mb-8 flex items-center justify-center gap-2"
        style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)", color: "var(--brand-text-muted)" }}
      >
        <span>🚧</span>
        Payment is a roadmap item. This cart is for demo purposes only.
      </div>

      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading font-bold text-3xl" style={{ color: "var(--brand-dark)" }}>
          Your Cart
        </h1>
        <Link
          href="/categories/category-a"
          className="flex items-center gap-1.5 font-body text-sm transition-colors hover:text-brand-primary"
          style={{ color: "var(--brand-text-muted)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--brand-border)", background: "white" }}
          >
            <div
              className="px-5 py-4 flex items-center gap-2"
              style={{ borderBottom: "1px solid var(--brand-border)", background: "var(--brand-muted)" }}
            >
              <ShoppingCart className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
              <span className="font-heading font-semibold text-sm" style={{ color: "var(--brand-dark)" }}>
                {placeholderItems.length} items
              </span>
            </div>
            <div className="px-5">
              {placeholderItems.map((item) => (
                <CartItem key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
