import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ef6c00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "S.R PRINTRAADES | Printing with Precision. Creating with Purpose.",
  description:
    "Established in 2011 with 25+ years of printing excellence in Tirupur. Specializing in offset commercial printing, garment woven & printed labels, hang tags, 3D rubber patches, silicon printing, tissue paper, and luxury packaging boxes.",
  keywords: [
    "SR Printers",
    "SR Printraades",
    "Tirupur garment printing",
    "offset printing Tirupur",
    "woven labels manufacturer",
    "printed labels garment",
    "rubber patches apparel",
    "silicon printing textiles",
    "hang tags printing",
    "garment packaging boxes",
    "Cosmic Printers",
    "U. Sathyasankar",
  ],
  authors: [{ name: "S.R PRINTRAADES" }],
  openGraph: {
    title: "S.R PRINTRAADES - Precision Printing & Garment Branding Hub",
    description:
      "Tirupur's trusted printing partner for 25+ years. Offset printing, garment labels, tags, rubber patches, silicon printing & packaging.",
    siteName: "S.R PRINTRAADES",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#ef6c00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
