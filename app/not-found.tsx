import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-16 text-center">
      <div className="max-w-md">
        <p style={{ fontSize: "6rem", lineHeight: 1 }}>🌶️</p>
        <h1
          className="font-heading font-bold text-5xl mt-6 mb-3"
          style={{ color: "var(--brand-dark)" }}
        >
          Too Hot to Find
        </h1>
        <p className="font-body text-base mb-8" style={{ color: "var(--brand-text-muted)" }}>
          This page does not exist or may have been moved. The heat is real,
          but this URL is not.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "font-heading font-bold text-base px-8 transition-all duration-200 hover:scale-105 active:scale-100"
          )}
          style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
