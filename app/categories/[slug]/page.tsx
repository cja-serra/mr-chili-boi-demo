import { notFound } from "next/navigation";
import { getCategoryBySlug, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Mr. Chili Boi`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  const products = getProductsByCategory(params.slug);

  return (
    <div>
      {/* Category hero banner */}
      <div
        className="w-full py-14 px-6 text-center relative overflow-hidden"
        style={{ background: cat.heroColor }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, white 0%, transparent 60%)",
          }}
        />
        <p className="text-5xl mb-3 relative z-10">{cat.emoji}</p>
        <h1
          className="font-heading font-bold text-3xl md:text-5xl mb-3 relative z-10"
          style={{ color: cat.heroTextColor }}
        >
          {cat.name}
        </h1>
        <p
          className="font-body text-base max-w-md mx-auto relative z-10"
          style={{ color: `${cat.heroTextColor}cc` }}
        >
          {cat.description}
        </p>
        <p
          className="font-body text-sm mt-3 relative z-10 font-semibold"
          style={{ color: `${cat.heroTextColor}99` }}
        >
          {products.length} products
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-7">
          {/* Filter toggle (placeholder) */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors hover:bg-brand-muted"
            style={{ border: "1px solid var(--brand-border)", color: "var(--brand-text)" }}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sort (placeholder) */}
          <div className="relative">
            <select
              className="appearance-none px-4 py-2 pr-8 rounded-lg font-body text-sm font-medium cursor-pointer transition-colors hover:bg-brand-muted outline-none"
              style={{ border: "1px solid var(--brand-border)", color: "var(--brand-text)", background: "white" }}
              defaultValue="featured"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: "var(--brand-text-muted)" }}
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar (placeholder UI) */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div
              className="rounded-xl p-5 sticky top-24"
              style={{ border: "1px solid var(--brand-border)", background: "white" }}
            >
              <p className="font-heading font-semibold text-sm mb-4" style={{ color: "var(--brand-dark)" }}>
                Filter by
              </p>

              {/* Heat Level */}
              <div className="mb-5">
                <p className="font-body text-xs uppercase tracking-widest mb-2.5" style={{ color: "var(--brand-text-muted)" }}>
                  Heat Level
                </p>
                {["Mild", "Medium", "Hot", "Extreme"].map((level) => (
                  <label key={level} className="flex items-center gap-2.5 py-1 cursor-pointer group">
                    <input type="checkbox" className="rounded" style={{ accentColor: "var(--brand-primary)" }} />
                    <span className="font-body text-sm group-hover:text-brand-primary transition-colors" style={{ color: "var(--brand-text)" }}>
                      {level}
                    </span>
                  </label>
                ))}
              </div>

              <Separator style={{ background: "var(--brand-border)" }} />

              {/* Size */}
              <div className="my-5">
                <p className="font-body text-xs uppercase tracking-widest mb-2.5" style={{ color: "var(--brand-text-muted)" }}>
                  Size
                </p>
                {["2 oz", "4 oz", "8 oz", "Variety Pack"].map((size) => (
                  <label key={size} className="flex items-center gap-2.5 py-1 cursor-pointer group">
                    <input type="checkbox" className="rounded" style={{ accentColor: "var(--brand-primary)" }} />
                    <span className="font-body text-sm group-hover:text-brand-primary transition-colors" style={{ color: "var(--brand-text)" }}>
                      {size}
                    </span>
                  </label>
                ))}
              </div>

              <Separator style={{ background: "var(--brand-border)" }} />

              {/* Price range */}
              <div className="mt-5">
                <p className="font-body text-xs uppercase tracking-widest mb-2.5" style={{ color: "var(--brand-text-muted)" }}>
                  Price Range
                </p>
                {["Under $10", "$10 to $15", "$15 to $25", "Over $25"].map((range) => (
                  <label key={range} className="flex items-center gap-2.5 py-1 cursor-pointer group">
                    <input type="checkbox" className="rounded" style={{ accentColor: "var(--brand-primary)" }} />
                    <span className="font-body text-sm group-hover:text-brand-primary transition-colors" style={{ color: "var(--brand-text)" }}>
                      {range}
                    </span>
                  </label>
                ))}
              </div>

              <p
                className="mt-4 text-[10px] text-center font-body italic"
                style={{ color: "var(--brand-text-muted)" }}
              >
                Filters are placeholder UI — no logic yet.
              </p>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <ProductGrid products={products} columns={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
