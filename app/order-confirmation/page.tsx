"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, Package, Truck } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "var(--brand-green)" }}
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1
          className="font-heading font-bold text-4xl mb-3"
          style={{ color: "var(--brand-dark)" }}
        >
          Order Confirmed!
        </h1>
        <p className="font-body text-base mb-8" style={{ color: "var(--brand-text-muted)" }}>
          Thank you for your order. We&apos;re preparing your chili nuts right now.
        </p>

        {/* Order details card */}
        <div
          className="rounded-2xl p-6 mb-8 text-left"
          style={{ border: "1px solid var(--brand-border)", background: "var(--brand-muted)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-body text-xs uppercase tracking-widest" style={{ color: "var(--brand-text-muted)" }}>
                Order Number
              </p>
              <p className="font-heading font-bold text-xl mt-0.5" style={{ color: "var(--brand-dark)" }}>
                #MCB-2026-0001
              </p>
            </div>
            <span
              className="px-3 py-1 rounded-full font-body text-xs font-semibold"
              style={{ background: "var(--brand-green)", color: "white" }}
            >
              Confirmed
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Package className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-primary)" }} />
              <div>
                <p className="font-body text-xs uppercase tracking-wide" style={{ color: "var(--brand-text-muted)" }}>
                  Status
                </p>
                <p className="font-body text-sm font-medium mt-0.5" style={{ color: "var(--brand-text)" }}>
                  Processing
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Truck className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-primary)" }} />
              <div>
                <p className="font-body text-xs uppercase tracking-wide" style={{ color: "var(--brand-text-muted)" }}>
                  Est. Delivery
                </p>
                <p className="font-body text-sm font-medium mt-0.5" style={{ color: "var(--brand-text)" }}>
                  5-7 Business Days
                </p>
              </div>
            </div>
          </div>
        </div>

        <p
          className="font-body text-xs mb-8 italic"
          style={{ color: "var(--brand-text-muted)" }}
        >
          This is a placeholder confirmation. No real order was placed.
        </p>

        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "font-heading font-bold text-base px-10 transition-all duration-200 hover:scale-105 active:scale-100"
          )}
          style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
        >
          Continue Shopping 🌶️
        </Link>
      </motion.div>
    </div>
  );
}
