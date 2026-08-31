import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// NOTE: this sandbox has no access to fonts.googleapis.com, so we fall back
// to CSS variables pointed at system stacks. On deploy (Vercel or any host
// with normal internet access), swap this back to next/font/google with
// Fraunces (display) + Inter (body) — see globals.css for where the
// --font-fraunces / --font-inter variables are consumed.

export const metadata: Metadata = {
  title: "Cetrofarm — Ekosistem Pangan dari Ladang Semarang",
  description:
    "Cetrofarm membangun ekosistem pangan berkelanjutan bersama petani binaan di Semarang — terbuka untuk kemitraan dan investasi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
