"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2
          className="font-heading font-bold text-3xl md:text-4xl mb-3"
          style={{ color: "var(--brand-dark)" }}
        >
          Shop by Category
        </h2>
        <p className="font-body text-base max-w-lg mx-auto" style={{ color: "var(--brand-text-muted)" }}>
          Six distinct flavor profiles — from mild and classic to extreme heat and
          limited editions. Find your level.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Link href={`/categories/${cat.slug}`} className="group block">
              <div
                className="relative overflow-hidden rounded-xl aspect-[4/3] flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ background: cat.heroColor }}
              >
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: "var(--brand-dark)" }}
                />

                <span className="text-5xl mb-3 relative z-10" style={{ lineHeight: 1 }}>
                  {cat.emoji}
                </span>

                <div className="relative z-10 text-center px-4">
                  <p
                    className="font-heading font-bold text-lg leading-tight"
                    style={{ color: cat.heroTextColor }}
                  >
                    {cat.name}
                  </p>
                  <p
                    className="font-body text-xs mt-1 opacity-80"
                    style={{ color: cat.heroTextColor }}
                  >
                    {cat.tagline}
                  </p>
                </div>

                {/* Product count chip */}
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{
                    background: "rgba(255,253,240,0.25)",
                    color: cat.heroTextColor,
                  }}
                >
                  {cat.productCount} items
                </div>

                {/* Arrow on hover */}
                <div
                  className="absolute bottom-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                  style={{ background: "rgba(255,253,240,0.3)" }}
                >
                  <span style={{ color: cat.heroTextColor, fontSize: "0.75rem" }}>→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
