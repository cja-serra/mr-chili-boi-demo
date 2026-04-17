import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shadcn CSS variable mappings (required for @apply border-border etc.)
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(0 0% 98%)",
        },
        // Brand palette
        brand: {
          primary:      "var(--brand-primary)",
          "primary-dark": "var(--brand-primary-dark)",
          secondary:    "var(--brand-secondary)",
          accent:       "var(--brand-accent)",
          dark:         "var(--brand-dark)",
          cream:        "var(--brand-cream)",
          green:        "var(--brand-green)",
          muted:        "var(--brand-muted)",
          border:       "var(--brand-border)",
          text:         "var(--brand-text)",
          "text-muted": "var(--brand-text-muted)",
        },
      },
      fontFamily: {
        heading: ["var(--font-fredoka)", "sans-serif"],
        body:    ["var(--font-inter)",   "sans-serif"],
        sans:    ["var(--font-inter)",   "sans-serif"],
      },
      boxShadow: {
        card:         "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        nav:          "var(--shadow-nav)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
