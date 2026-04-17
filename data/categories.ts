export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroColor: string;       // background hex for category banner
  heroTextColor: string;   // text color over the banner
  image: string;           // placehold.co image URL
  emoji: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    slug: "category-a",
    name: "Category A",
    tagline: "Bold & Classic",
    description:
      "The original line — bold, familiar, and impossible to put down. Perfect for snacking any time of day.",
    heroColor: "#E8581A",
    heroTextColor: "#FFFDF0",
    image: "https://placehold.co/800x400/E8581A/FFFDF0?text=Category+A",
    emoji: "🌶️",
    productCount: 4,
  },
  {
    slug: "category-b",
    name: "Category B",
    tagline: "Extra Heat",
    description:
      "For those who like it hot. This collection cranks up the Scoville scale without sacrificing flavor.",
    heroColor: "#CC0000",
    heroTextColor: "#FFFDF0",
    image: "https://placehold.co/800x400/CC0000/FFFDF0?text=Category+B",
    emoji: "🔥",
    productCount: 4,
  },
  {
    slug: "category-c",
    name: "Category C",
    tagline: "Smoky & Rich",
    description:
      "Slow-smoked flavor profiles that complement the chili heat. A sophisticated snack for any occasion.",
    heroColor: "#8B2500",
    heroTextColor: "#FFFDF0",
    image: "https://placehold.co/800x400/8B2500/FFFDF0?text=Category+C",
    emoji: "💨",
    productCount: 3,
  },
  {
    slug: "category-d",
    name: "Category D",
    tagline: "Sweet & Spicy",
    description:
      "The best of both worlds. A touch of sweetness meets the signature Mr. Chili Boi heat.",
    heroColor: "#C47A00",
    heroTextColor: "#FFFDF0",
    image: "https://placehold.co/800x400/C47A00/FFFDF0?text=Category+D",
    emoji: "🍯",
    productCount: 3,
  },
  {
    slug: "category-e",
    name: "Category E",
    tagline: "Party Packs",
    description:
      "Bigger bags, better value. Stock up for game nights, gatherings, or just an epic solo snack session.",
    heroColor: "#2D6A2D",
    heroTextColor: "#FFFDF0",
    image: "https://placehold.co/800x400/2D6A2D/FFFDF0?text=Category+E",
    emoji: "🎉",
    productCount: 3,
  },
  {
    slug: "category-f",
    name: "Category F",
    tagline: "Limited Editions",
    description:
      "Seasonal and limited-run flavors. Once they're gone, they're gone — grab them while you can.",
    heroColor: "#4A1A8B",
    heroTextColor: "#FFFDF0",
    image: "https://placehold.co/800x400/4A1A8B/FFFDF0?text=Category+F",
    emoji: "⭐",
    productCount: 3,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
