export interface Product {
  slug: string;
  sku: string;
  name: string;
  category: string;        // matches Category.slug
  price: number;
  comparePrice?: number;   // original price if on sale
  shortDescription: string;
  fullDescription: string;
  specs: Record<string, string>;
  image: string;           // main image
  images: string[];        // thumbnail strip (3-4 images)
  inStock: boolean;
  featured: boolean;
  isNew?: boolean;
  badge?: string;          // e.g. "Best Seller", "New", "Limited"
}

const PH = (color: string, label: string, size = "800x800") =>
  `https://placehold.co/${size}/${color.replace("#", "")}/FFFDF0?text=${encodeURIComponent(label)}`;

export const products: Product[] = [
  // ── CATEGORY A (4 products) ─────────────────────────────────────────────
  {
    slug: "product-a1",
    sku: "MCB-A1-001",
    name: "Product A1",
    category: "category-a",
    price: 9.99,
    shortDescription:
      "The classic Mr. Chili Boi flavor that started it all. Bold heat, satisfying crunch, zero regrets.",
    fullDescription:
      "Product A1 is the signature item from our Category A lineup. Each batch is crafted with a proprietary chili blend that delivers a slow, building heat without overwhelming the palate. The roasting process locks in a deep, savory flavor that keeps you reaching for more. Available in our standard 4oz snack size — perfect for on-the-go snacking or sharing (if you're feeling generous).",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Medium",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-A1-001",
    },
    image: PH("E8581A", "Product A1"),
    images: [
      PH("E8581A", "Product A1 — Front"),
      PH("C94110", "Product A1 — Back"),
      PH("F5A623", "Product A1 — Detail"),
      PH("8B2500", "Product A1 — Open"),
    ],
    inStock: true,
    featured: true,
    badge: "Best Seller",
  },
  {
    slug: "product-a2",
    sku: "MCB-A2-001",
    name: "Product A2",
    category: "category-a",
    price: 11.99,
    shortDescription:
      "A slightly smoother chili profile with hints of garlic and paprika. Great for those new to the heat.",
    fullDescription:
      "Product A2 takes the Category A flavor profile and adds a garlic and paprika twist that mellows the initial heat into something incredibly snackable. These are the ones your friends will ask you to bring to every party. Made in small batches to ensure consistent quality, Product A2 uses only premium ingredients with no artificial flavors or colors.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Mild-Medium",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-A2-001",
    },
    image: PH("D4621C", "Product A2"),
    images: [
      PH("D4621C", "Product A2 — Front"),
      PH("E8581A", "Product A2 — Back"),
      PH("F5A623", "Product A2 — Detail"),
    ],
    inStock: true,
    featured: false,
  },
  {
    slug: "product-a3",
    sku: "MCB-A3-001",
    name: "Product A3",
    category: "category-a",
    price: 13.99,
    comparePrice: 16.99,
    shortDescription:
      "Our jumbo-size Category A classic. More crunch, more heat, more value.",
    fullDescription:
      "Everything you love about Product A1, now in a generous 8oz bag. Product A3 is the go-to choice for serious snackers who don't want to stop. The extra size also makes it ideal for sharing at gatherings — the chili heat is perfectly calibrated to keep people coming back for just one more handful.",
    specs: {
      "Net Weight": "8 oz (227g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "8",
      "Heat Level": "Medium",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-A3-001",
    },
    image: PH("C94110", "Product A3"),
    images: [
      PH("C94110", "Product A3 — Front"),
      PH("E8581A", "Product A3 — Side"),
      PH("8B2500", "Product A3 — Detail"),
    ],
    inStock: true,
    featured: false,
    badge: "Sale",
  },
  {
    slug: "product-a4",
    sku: "MCB-A4-001",
    name: "Product A4",
    category: "category-a",
    price: 7.99,
    shortDescription:
      "The mini snack pack — ideal for lunch boxes, travel, or satisfying a quick craving.",
    fullDescription:
      "Product A4 is our mini snack pack — 2oz of pure Mr. Chili Boi flavor in a pocket-friendly bag. Throw a few in your bag for the week and you'll never be caught craving without a solution. Same great recipe as A1, just in a convenient grab-and-go size.",
    specs: {
      "Net Weight": "2 oz (57g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "2",
      "Heat Level": "Medium",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-A4-001",
    },
    image: PH("F5A623", "Product A4"),
    images: [
      PH("F5A623", "Product A4 — Front"),
      PH("E8581A", "Product A4 — Back"),
    ],
    inStock: true,
    featured: false,
    isNew: true,
  },

  // ── CATEGORY B (4 products) ─────────────────────────────────────────────
  {
    slug: "product-b1",
    sku: "MCB-B1-001",
    name: "Product B1",
    category: "category-b",
    price: 12.99,
    shortDescription:
      "Extra heat, no compromise. This is where the serious chili fans live.",
    fullDescription:
      "Product B1 is not for the faint of heart. We dialed up our signature chili blend to deliver a sustained, intense heat that builds with every bite. Fans of spicy food will love the slow burn — it lingers without being painful. A serious snack for serious heat-seekers.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Hot",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-B1-001",
    },
    image: PH("CC0000", "Product B1"),
    images: [
      PH("CC0000", "Product B1 — Front"),
      PH("A50000", "Product B1 — Back"),
      PH("E8581A", "Product B1 — Detail"),
    ],
    inStock: true,
    featured: true,
    badge: "Hot 🔥",
  },
  {
    slug: "product-b2",
    sku: "MCB-B2-001",
    name: "Product B2",
    category: "category-b",
    price: 14.99,
    shortDescription:
      "Habanero-inspired heat with a citrus undertone. Complex, fiery, addictive.",
    fullDescription:
      "Product B2 draws inspiration from habanero pepper profiles — intensely hot but with a fruity citrus note that makes the heat almost enjoyable. Almost. This is one of our most talked-about products and a favorite among chili enthusiasts who want more complexity from their heat.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Very Hot",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-B2-001",
    },
    image: PH("A50000", "Product B2"),
    images: [
      PH("A50000", "Product B2 — Front"),
      PH("CC0000", "Product B2 — Side"),
      PH("F5A623", "Product B2 — Detail"),
    ],
    inStock: true,
    featured: false,
  },
  {
    slug: "product-b3",
    sku: "MCB-B3-001",
    name: "Product B3",
    category: "category-b",
    price: 16.99,
    shortDescription:
      "The ghost pepper challenge — our hottest regular product. You've been warned.",
    fullDescription:
      "Product B3 is made with ghost pepper-inspired flavoring and is our hottest standard product. If you can handle it, the reward is incredible — a deep, rich chili flavor beneath the intense heat. Not recommended for sensitive palates. Do not eat in meetings.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "0.5 oz (14g)",
      "Servings Per Bag": "8",
      "Heat Level": "Extreme",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-B3-001",
    },
    image: PH("7A0000", "Product B3"),
    images: [
      PH("7A0000", "Product B3 — Front"),
      PH("CC0000", "Product B3 — Warning"),
    ],
    inStock: false, // OUT OF STOCK DEMO
    featured: false,
    badge: "Extreme Heat",
  },
  {
    slug: "product-b4",
    sku: "MCB-B4-001",
    name: "Product B4",
    category: "category-b",
    price: 10.99,
    shortDescription:
      "Chili lime — the crowd-pleaser of the hot category. Heat meets citrus in perfect balance.",
    fullDescription:
      "Product B4 uses a chili lime blend that's become one of our most requested flavors. The lime cuts through the heat to create a refreshing, addictive snack experience. Great pairing with a cold drink on a warm afternoon.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Medium-Hot",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-B4-001",
    },
    image: PH("CC4400", "Product B4"),
    images: [
      PH("CC4400", "Product B4 — Front"),
      PH("CC0000", "Product B4 — Side"),
      PH("2D6A2D", "Product B4 — Detail"),
    ],
    inStock: true,
    featured: true,
    isNew: true,
  },

  // ── CATEGORY C (3 products) ─────────────────────────────────────────────
  {
    slug: "product-c1",
    sku: "MCB-C1-001",
    name: "Product C1",
    category: "category-c",
    price: 13.99,
    shortDescription:
      "Slow-smoked chili flavor that coats every nut with deep, rich warmth.",
    fullDescription:
      "Product C1 is our flagship smoky product. The slow-smoke process infuses a deep, wood-fire flavor into every nut before the chili seasoning is applied. The result is a layered snacking experience that starts smoky, builds warm, and finishes with a gentle heat that lingers pleasantly.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Mild",
      "Smoke Level": "Medium",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-C1-001",
    },
    image: PH("8B2500", "Product C1"),
    images: [
      PH("8B2500", "Product C1 — Front"),
      PH("6B1A00", "Product C1 — Back"),
      PH("E8581A", "Product C1 — Detail"),
    ],
    inStock: true,
    featured: false,
  },
  {
    slug: "product-c2",
    sku: "MCB-C2-001",
    name: "Product C2",
    category: "category-c",
    price: 15.99,
    shortDescription:
      "Chipotle-inspired smokiness with a medium chili kick. Rich, warm, deeply satisfying.",
    fullDescription:
      "Product C2 draws from the chipotle flavor tradition — smoky, rich, and with a medium heat that's warm rather than sharp. This product has a sophisticated flavor profile that appeals to snack lovers who want more than just 'hot.' Great with a craft beer or enjoyed slowly on its own.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Medium",
      "Smoke Level": "High",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-C2-001",
    },
    image: PH("6B1A00", "Product C2"),
    images: [
      PH("6B1A00", "Product C2 — Front"),
      PH("8B2500", "Product C2 — Back"),
    ],
    inStock: true,
    featured: false,
  },
  {
    slug: "product-c3",
    sku: "MCB-C3-001",
    name: "Product C3",
    category: "category-c",
    price: 11.99,
    shortDescription:
      "Smoked sea salt and chili — minimal ingredients, maximum impact.",
    fullDescription:
      "Product C3 is built on the principle that great ingredients need little else. Smoked sea salt and our house chili blend on a quality nut — that's it. The result is a clean, bold snack that lets the quality of the base ingredient shine through while delivering satisfying heat.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Mild",
      "Smoke Level": "Low-Medium",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-C3-001",
    },
    image: PH("5A1500", "Product C3"),
    images: [
      PH("5A1500", "Product C3 — Front"),
      PH("8B2500", "Product C3 — Side"),
    ],
    inStock: true,
    featured: false,
  },

  // ── CATEGORY D (3 products) ─────────────────────────────────────────────
  {
    slug: "product-d1",
    sku: "MCB-D1-001",
    name: "Product D1",
    category: "category-d",
    price: 11.99,
    shortDescription:
      "Honey and chili — the classic sweet-heat combination done right.",
    fullDescription:
      "Product D1 pairs real honey sweetness with our signature chili heat to create a perfect flavor balance. The sweetness hits first, then the heat builds slowly into a satisfying finish. This is consistently our most popular flavor with first-time Mr. Chili Boi customers.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Mild-Medium",
      "Sweetness Level": "Medium",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts, Honey",
      "Shelf Life": "10 months from production",
      "SKU": "MCB-D1-001",
    },
    image: PH("C47A00", "Product D1"),
    images: [
      PH("C47A00", "Product D1 — Front"),
      PH("E8581A", "Product D1 — Back"),
      PH("F5A623", "Product D1 — Detail"),
    ],
    inStock: true,
    featured: true,
    badge: "Fan Favorite",
  },
  {
    slug: "product-d2",
    sku: "MCB-D2-001",
    name: "Product D2",
    category: "category-d",
    price: 13.99,
    shortDescription:
      "Brown sugar and cayenne — a southern BBQ-inspired sweet-heat experience.",
    fullDescription:
      "Product D2 takes inspiration from southern BBQ traditions. Brown sugar caramelizes during roasting to create a crunchy, sweet coating that's then hit with cayenne for a sharp heat. The contrast between the sweet crunch and the spicy finish is genuinely addictive.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Medium",
      "Sweetness Level": "High",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "10 months from production",
      "SKU": "MCB-D2-001",
    },
    image: PH("A86500", "Product D2"),
    images: [
      PH("A86500", "Product D2 — Front"),
      PH("C47A00", "Product D2 — Back"),
    ],
    inStock: true,
    featured: false,
  },
  {
    slug: "product-d3",
    sku: "MCB-D3-001",
    name: "Product D3",
    category: "category-d",
    price: 14.99,
    shortDescription:
      "Mango chili — tropical sweetness with a spicy kick. Vacation in a bag.",
    fullDescription:
      "Product D3 brings a tropical twist to the Mr. Chili Boi lineup. Mango-inspired sweetness gives way to a medium chili heat for a flavor combination that feels almost refreshing. Close your eyes and you're somewhere warm. Open them and you're still here, but at least you have great snacks.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Medium",
      "Sweetness Level": "High",
      "Primary Ingredient": "Placeholder Nut",
      "Allergens": "Tree Nuts",
      "Shelf Life": "10 months from production",
      "SKU": "MCB-D3-001",
    },
    image: PH("E8A000", "Product D3"),
    images: [
      PH("E8A000", "Product D3 — Front"),
      PH("C47A00", "Product D3 — Back"),
    ],
    inStock: false, // OUT OF STOCK DEMO
    featured: false,
    isNew: true,
  },

  // ── CATEGORY E (3 products) ─────────────────────────────────────────────
  {
    slug: "product-e1",
    sku: "MCB-E1-001",
    name: "Product E1",
    category: "category-e",
    price: 24.99,
    comparePrice: 29.99,
    shortDescription:
      "The classic variety pack — one of each from Category A. Perfect for sharing.",
    fullDescription:
      "Product E1 is our party-friendly variety pack featuring four 4oz bags from Category A. Great for trying different flavors, stocking the office snack drawer, or bringing to any gathering. Everything people expect from Mr. Chili Boi, in one box.",
    specs: {
      "Contents": "4 × 4 oz bags",
      "Total Net Weight": "16 oz (454g)",
      "Includes": "A1, A2, A3 Snack, A4 Mini",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-E1-001",
    },
    image: PH("2D6A2D", "Product E1"),
    images: [
      PH("2D6A2D", "Product E1 — Box"),
      PH("3A8A3A", "Product E1 — Contents"),
      PH("E8581A", "Product E1 — Detail"),
    ],
    inStock: true,
    featured: false,
    badge: "Sale",
  },
  {
    slug: "product-e2",
    sku: "MCB-E2-001",
    name: "Product E2",
    category: "category-e",
    price: 34.99,
    shortDescription:
      "The ultimate sampler — two bags each from all 6 categories. Best intro to Mr. Chili Boi.",
    fullDescription:
      "Product E2 is the ultimate Mr. Chili Boi experience. This mega sampler includes two bags from each of our six categories — a total of 12 bags spanning every flavor profile we make. Perfect as a gift, an intro sampler, or for households with different heat preferences.",
    specs: {
      "Contents": "12 × assorted bags",
      "Total Net Weight": "~32 oz (907g)",
      "Includes": "2 bags × 6 categories",
      "Allergens": "Tree Nuts, Honey",
      "Shelf Life": "Varies by product",
      "SKU": "MCB-E2-001",
    },
    image: PH("1A5A1A", "Product E2"),
    images: [
      PH("1A5A1A", "Product E2 — Box"),
      PH("2D6A2D", "Product E2 — Contents"),
    ],
    inStock: true,
    featured: false,
    badge: "Best Value",
  },
  {
    slug: "product-e3",
    sku: "MCB-E3-001",
    name: "Product E3",
    category: "category-e",
    price: 19.99,
    shortDescription:
      "Heat-lovers bundle — four bags from Category B for the spice obsessed.",
    fullDescription:
      "Product E3 is curated for the heat lovers. Four full-size bags from Category B including our habanero and ghost pepper varieties. If someone in your life judges snacks by their Scoville rating, this is the gift for them.",
    specs: {
      "Contents": "4 × 4 oz bags",
      "Total Net Weight": "16 oz (454g)",
      "Includes": "B1, B2, B4, + Bonus Bag",
      "Heat Level": "Hot to Extreme",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-E3-001",
    },
    image: PH("3A8A00", "Product E3"),
    images: [
      PH("3A8A00", "Product E3 — Box"),
      PH("CC0000", "Product E3 — Contents"),
    ],
    inStock: true,
    featured: false,
  },

  // ── CATEGORY F (3 products — Limited Edition) ──────────────────────────
  {
    slug: "product-f1",
    sku: "MCB-F1-001",
    name: "Product F1",
    category: "category-f",
    price: 18.99,
    shortDescription:
      "Seasonal limited edition. Bold new flavor, small batch, first come first served.",
    fullDescription:
      "Product F1 is our current limited-edition seasonal release. Made in a small single batch with a flavor profile we'll only produce this season. If you've been waiting for something new from Mr. Chili Boi, this is it. When it's gone, it's gone — we don't make second runs on limited editions.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "Medium",
      "Batch Size": "Limited",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-F1-001",
    },
    image: PH("4A1A8B", "Product F1"),
    images: [
      PH("4A1A8B", "Product F1 — Front"),
      PH("6A2AAB", "Product F1 — Back"),
      PH("E8581A", "Product F1 — Detail"),
    ],
    inStock: true,
    featured: false,
    badge: "Limited",
  },
  {
    slug: "product-f2",
    sku: "MCB-F2-001",
    name: "Product F2",
    category: "category-f",
    price: 21.99,
    shortDescription:
      "Holiday limited run — gift box ready, premium packaging, collector flavor.",
    fullDescription:
      "Product F2 is our holiday limited-edition release, presented in special collector packaging. The flavor is a unique combination only available during the holiday season. Makes an excellent gift — the packaging is premium enough to give as-is, no wrapping required.",
    specs: {
      "Net Weight": "6 oz (170g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "6",
      "Heat Level": "Mild-Medium",
      "Packaging": "Collector Edition Gift Box",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-F2-001",
    },
    image: PH("3A1070", "Product F2"),
    images: [
      PH("3A1070", "Product F2 — Gift Box"),
      PH("4A1A8B", "Product F2 — Open"),
    ],
    inStock: true,
    featured: false,
    badge: "Gift Ready",
    isNew: true,
  },
  {
    slug: "product-f3",
    sku: "MCB-F3-001",
    name: "Product F3",
    category: "category-f",
    price: 15.99,
    shortDescription:
      "Collaboration flavor — made with a partner brand. Unique, unrepeatable.",
    fullDescription:
      "Product F3 is a collaboration product made with a partner brand (placeholder — details to be revealed). The flavor was co-developed over several months and represents something genuinely new. If you enjoy following what's happening in the snack world, you'll want this one in your collection.",
    specs: {
      "Net Weight": "4 oz (113g)",
      "Serving Size": "1 oz (28g)",
      "Servings Per Bag": "4",
      "Heat Level": "TBD",
      "Collaboration": "Partner Brand (TBD)",
      "Allergens": "Tree Nuts",
      "Shelf Life": "12 months from production",
      "SKU": "MCB-F3-001",
    },
    image: PH("2A0A60", "Product F3"),
    images: [
      PH("2A0A60", "Product F3 — Front"),
      PH("4A1A8B", "Product F3 — Collab"),
    ],
    inStock: true,
    featured: false,
    badge: "Collab",
  },
];

// ── HELPERS ─────────────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
