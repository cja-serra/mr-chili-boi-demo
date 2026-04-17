"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { categories } from "@/data/categories";
import { ChevronRight } from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[360px] p-0 flex flex-col"
        style={{ background: "var(--brand-cream)" }}
      >
        <SheetHeader className="px-6 py-5" style={{ borderBottom: "1px solid var(--brand-border)" }}>
          <SheetTitle className="font-heading text-xl font-bold" style={{ color: "var(--brand-primary)" }}>
            Mr. Chili Boi 🌶️
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Categories */}
          <div className="px-6 pb-2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-text-muted)" }}>
              Shop by Category
            </p>
          </div>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              onClick={onClose}
              className="flex items-center justify-between px-6 py-3 transition-colors hover:bg-brand-muted group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{cat.emoji}</span>
                <div>
                  <p className="font-body font-medium text-sm" style={{ color: "var(--brand-text)" }}>
                    {cat.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--brand-text-muted)" }}>
                    {cat.productCount} products
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-opacity" />
            </Link>
          ))}

          {/* Divider */}
          <div className="mx-6 my-4" style={{ borderTop: "1px solid var(--brand-border)" }} />

          {/* Other links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center px-6 py-3 font-body text-sm transition-colors hover:bg-brand-muted"
              style={{ color: "var(--brand-text)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className="px-6 py-4"
          style={{ borderTop: "1px solid var(--brand-border)" }}
        >
          <p className="text-xs text-center" style={{ color: "var(--brand-text-muted)" }}>
            It&#39;s All About Nuts 🌶️
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
