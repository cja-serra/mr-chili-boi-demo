"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "var(--brand-cream)",
        borderBottom: "1px solid var(--brand-border)",
        boxShadow: "var(--shadow-nav)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Hamburger (mobile) + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-brand-muted"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" style={{ color: "var(--brand-dark)" }} />
          </button>

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/logo/download-1.jpg"
                alt="Mr. Chili Boi"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className="font-heading font-bold text-base leading-tight"
                style={{ color: "var(--brand-dark)" }}
              >
                Mr. Chili Boi
              </p>
              <p
                className="font-body text-[10px] leading-tight tracking-wide uppercase"
                style={{ color: "var(--brand-text-muted)" }}
              >
                It&#39;s All About Nuts
              </p>
            </div>
          </Link>
        </div>

        {/* Center: Category mega menu (desktop) */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          <button
            className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-body font-medium transition-all duration-200 hover:bg-brand-muted"
            style={{ color: megaOpen ? "var(--brand-primary)" : "var(--brand-text)" }}
            onMouseEnter={() => setMegaOpen(true)}
          >
            Shop
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          <Link
            href="/about"
            className="px-4 py-2 rounded-md text-sm font-body font-medium transition-colors hover:bg-brand-muted hover:text-brand-primary"
            style={{ color: "var(--brand-text)" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-sm font-body font-medium transition-colors hover:bg-brand-muted hover:text-brand-primary"
            style={{ color: "var(--brand-text)" }}
          >
            Contact
          </Link>
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-md transition-colors hover:bg-brand-muted"
            aria-label="Search (placeholder)"
            title="Search — coming soon"
          >
            <Search className="w-5 h-5" style={{ color: "var(--brand-dark)" }} />
          </button>
          <button
            className="p-2 rounded-md transition-colors hover:bg-brand-muted"
            aria-label="Account (placeholder)"
            title="Account — coming soon"
          >
            <User className="w-5 h-5" style={{ color: "var(--brand-dark)" }} />
          </button>
          <Link
            href="/cart"
            className="p-2 rounded-md transition-colors hover:bg-brand-muted relative"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" style={{ color: "var(--brand-dark)" }} />
            {/* Placeholder cart count badge */}
            <span
              className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
              style={{ background: "var(--brand-primary)", color: "var(--brand-cream)" }}
            >
              3
            </span>
          </Link>
        </div>
      </div>

      {/* Mega menu dropdown */}
      <div
        className="absolute left-0 right-0"
        onMouseEnter={() => setMegaOpen(true)}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <MegaMenu isOpen={megaOpen} onClose={() => setMegaOpen(false)} />
      </div>

      {/* Mobile drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
