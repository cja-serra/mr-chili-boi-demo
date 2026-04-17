"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Flame } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--brand-accent) 0%, var(--brand-primary) 55%, var(--brand-secondary) 100%)",
        minHeight: "560px",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
        style={{ background: "var(--brand-secondary)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15"
        style={{ background: "var(--brand-accent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(255,253,240,0.2)", color: "var(--brand-cream)" }}
            >
              <Flame className="w-3.5 h-3.5" />
              New flavors now available
            </span>

            <h1
              className="font-heading font-bold leading-tight mb-4"
              style={{
                color: "var(--brand-cream)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              It&#39;s All About
              <br />
              <span style={{ color: "var(--brand-dark)" }}>Nuts. 🌶️</span>
            </h1>

            <p
              className="font-body text-lg mb-8 max-w-md mx-auto md:mx-0"
              style={{ color: "rgba(255,253,240,0.85)" }}
            >
              Bold, fiery, and impossible to put down. Mr. Chili Boi brings you
              premium chili-flavored nuts packed with heat, crunch, and serious
              flavor.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/categories/category-a"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "font-heading font-semibold text-base px-8 transition-all duration-200 hover:scale-105 active:scale-100 flex items-center gap-2"
                )}
                style={{ background: "var(--brand-dark)", color: "var(--brand-cream)", border: "none" }}
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "font-heading font-semibold text-base px-8 transition-all duration-200 hover:scale-105 active:scale-100"
                )}
                style={{
                  background: "rgba(255,253,240,0.15)",
                  border: "2px solid rgba(255,253,240,0.6)",
                  color: "var(--brand-cream)",
                }}
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero image placeholder */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center shadow-2xl"
            style={{
              background: "rgba(255,253,240,0.15)",
              border: "3px solid rgba(255,253,240,0.3)",
            }}
          >
            <span style={{ fontSize: "6rem", lineHeight: 1 }}>🌶️</span>
            <p
              className="font-heading font-bold text-lg mt-3"
              style={{ color: "var(--brand-cream)" }}
            >
              Mr. Chili Boi
            </p>
            <p
              className="font-body text-xs mt-1 opacity-70"
              style={{ color: "var(--brand-cream)" }}
            >
              Drop logo here
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "48px" }}
        >
          <path
            d="M0 48 C360 0 1080 48 1440 0 L1440 48 L0 48 Z"
            fill="var(--brand-cream)"
          />
        </svg>
      </div>
    </section>
  );
}
