"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingCart, Star, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react";

// Fake reviews
const fakeReviews = [
  {
    name: "Maria T.",
    rating: 5,
    date: "March 2026",
    title: "Absolutely addictive",
    body: "I bought one bag to try and ended up ordering three more the next day. The heat is perfect and the crunch is amazing. My new favorite snack.",
  },
  {
    name: "James K.",
    rating: 5,
    date: "February 2026",
    title: "Best chili nuts I've ever had",
    body: "I've tried a lot of chili nut brands and these are on another level. The flavor is layered and the heat sneaks up on you in the best way. Highly recommend.",
  },
  {
    name: "Priya S.",
    rating: 4,
    date: "February 2026",
    title: "Great flavor, could be slightly hotter",
    body: "Really tasty and high quality. I love the chili flavor profile. I would personally enjoy a bit more heat, but I know not everyone wants that. Will buy again regardless.",
  },
];

interface Props {
  params: { slug: string };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);

  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleAddToCart = () => {
    toast.success(`${qty}x ${product.name} added to cart! 🌶️`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 mb-8 font-body text-sm" style={{ color: "var(--brand-text-muted)" }}>
        <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        {category && (
          <>
            <Link href={`/categories/${category.slug}`} className="hover:text-brand-primary transition-colors">
              {category.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        )}
        <span style={{ color: "var(--brand-text)" }}>{product.name}</span>
      </nav>

      {/* Main product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left: Images */}
        <div>
          {/* Main image */}
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-square rounded-2xl overflow-hidden mb-4"
            style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}
          >
            <Image
              src={product.images[activeImage] ?? product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {!product.inStock && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "rgba(26,26,26,0.5)" }}
              >
                <Badge
                  className="text-sm px-4 py-1.5 font-heading font-bold"
                  style={{ background: "var(--brand-dark)", color: "var(--brand-cream)" }}
                >
                  Out of Stock
                </Badge>
              </div>
            )}
          </motion.div>

          {/* Thumbnail strip */}
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 hover:scale-105"
                style={{
                  border: activeImage === i
                    ? "2px solid var(--brand-primary)"
                    : "2px solid var(--brand-border)",
                  background: "var(--brand-muted)",
                }}
              >
                <Image
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.badge && product.inStock && (
              <Badge style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}>
                {product.badge}
              </Badge>
            )}
            {product.isNew && (
              <Badge style={{ background: "var(--brand-green)", color: "white", border: "none" }}>
                New Arrival
              </Badge>
            )}
            {!product.inStock && (
              <Badge style={{ background: "var(--brand-dark)", color: "var(--brand-cream)" }}>
                Out of Stock
              </Badge>
            )}
          </div>

          {/* SKU */}
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: "var(--brand-text-muted)" }}>
            SKU: {product.sku}
          </p>

          <h1
            className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-tight"
            style={{ color: "var(--brand-dark)" }}
          >
            {product.name}
          </h1>

          {/* Star rating placeholder */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4"
                  fill={s <= 4 ? "var(--brand-accent)" : "none"}
                  stroke={s <= 4 ? "var(--brand-accent)" : "var(--brand-border)"}
                />
              ))}
            </div>
            <span className="font-body text-sm" style={{ color: "var(--brand-text-muted)" }}>
              4.0 (placeholder — 24 reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span
              className="font-heading font-bold text-4xl"
              style={{ color: "var(--brand-primary)" }}
            >
              ${product.price.toFixed(2)}
            </span>
            {product.comparePrice && (
              <span className="font-body text-lg line-through" style={{ color: "var(--brand-text-muted)" }}>
                ${product.comparePrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="font-body text-base leading-relaxed mb-6" style={{ color: "var(--brand-text)" }}>
            {product.shortDescription}
          </p>

          <Separator className="mb-6" style={{ background: "var(--brand-border)" }} />

          {/* Qty + Add to Cart */}
          {product.inStock ? (
            <div className="flex items-center gap-4 mb-6">
              {/* Quantity stepper */}
              <div
                className="flex items-center rounded-lg overflow-hidden"
                style={{ border: "1px solid var(--brand-border)" }}
              >
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center transition-colors hover:bg-brand-muted"
                  style={{ color: "var(--brand-text)" }}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span
                  className="w-12 h-10 flex items-center justify-center font-heading font-bold text-base"
                  style={{ color: "var(--brand-dark)", borderLeft: "1px solid var(--brand-border)", borderRight: "1px solid var(--brand-border)" }}
                >
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center transition-colors hover:bg-brand-muted"
                  style={{ color: "var(--brand-text)" }}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 font-heading font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-100"
                style={{ background: "var(--brand-primary)", color: "var(--brand-cream)", border: "none" }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          ) : (
            <Button
              disabled
              size="lg"
              className="w-full font-heading font-bold text-base mb-6"
              style={{ background: "var(--brand-muted)", color: "var(--brand-text-muted)", border: "1px solid var(--brand-border)" }}
            >
              Out of Stock
            </Button>
          )}

          {/* Trust strip */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <Truck className="w-4 h-4" />, text: "Fast Shipping" },
              { icon: <RotateCcw className="w-4 h-4" />, text: "Free Returns" },
              { icon: <Shield className="w-4 h-4" />, text: "Secure Checkout" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg text-center"
                style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}
              >
                <span style={{ color: "var(--brand-primary)" }}>{icon}</span>
                <span className="font-body text-[10px] font-medium" style={{ color: "var(--brand-text)" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs: Description | Specs | Reviews */}
      <Tabs defaultValue="description">
        <TabsList
          className="w-full justify-start rounded-none p-0 h-auto mb-8"
          style={{ borderBottom: "1px solid var(--brand-border)", background: "transparent" }}
        >
          {["description", "specs", "reviews"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="rounded-none px-6 py-3 font-heading font-semibold text-sm capitalize data-[state=active]:shadow-none transition-colors"
              style={{
                color: "var(--brand-text-muted)",
                borderBottom: "2px solid transparent",
              }}
            >
              {tab === "reviews" ? `Reviews (${fakeReviews.length})` : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Description tab */}
        <TabsContent value="description">
          <div className="max-w-2xl">
            <p className="font-body text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>
              {product.fullDescription}
            </p>
          </div>
        </TabsContent>

        {/* Specs tab */}
        <TabsContent value="specs">
          <div className="max-w-lg">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specs).map(([key, val], i) => (
                  <tr
                    key={key}
                    style={{ background: i % 2 === 0 ? "var(--brand-muted)" : "white" }}
                  >
                    <td className="py-3 px-4 font-body font-semibold text-sm w-44" style={{ color: "var(--brand-text)" }}>
                      {key}
                    </td>
                    <td className="py-3 px-4 font-body text-sm" style={{ color: "var(--brand-text-muted)" }}>
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Reviews tab */}
        <TabsContent value="reviews">
          <div className="max-w-2xl space-y-6">
            <p className="font-body text-xs italic" style={{ color: "var(--brand-text-muted)" }}>
              Placeholder reviews for demo purposes.
            </p>
            {fakeReviews.map((review) => (
              <div
                key={review.name}
                className="p-5 rounded-xl"
                style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-heading font-semibold text-base" style={{ color: "var(--brand-dark)" }}>
                      {review.title}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-3.5 h-3.5"
                          fill={s <= review.rating ? "var(--brand-accent)" : "none"}
                          stroke={s <= review.rating ? "var(--brand-accent)" : "var(--brand-border)"}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-sm font-medium" style={{ color: "var(--brand-text)" }}>
                      {review.name}
                    </p>
                    <p className="font-body text-xs" style={{ color: "var(--brand-text-muted)" }}>
                      {review.date}
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>
                  {review.body}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Related products */}
      <RelatedProducts products={related} />
    </div>
  );
}
