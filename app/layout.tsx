import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mr. Chili Boi — It's All About Nuts",
  description:
    "Bold, fiery, and unforgettable. Mr. Chili Boi brings you premium chili-flavored nuts packed with heat and flavor.",
  openGraph: {
    title: "Mr. Chili Boi — It's All About Nuts",
    description: "Premium chili-flavored nuts. Shop bold flavors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(fredoka.variable, inter.variable, "scroll-smooth")}
    >
      <body className="font-body antialiased bg-brand-cream text-brand-text min-h-screen flex flex-col">
        <PreviewBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--brand-dark)",
              color: "var(--brand-cream)",
              border: "1px solid var(--brand-primary)",
            },
          }}
        />
      </body>
    </html>
  );
}
