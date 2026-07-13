import type { Metadata, Viewport } from "next";
import "./globals.css";
import { seo, business } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${business.name} ${business.nameAccent}`,
  },
  description: seo.description,
  keywords: [
    "műszempilla építés",
    "gyantázás",
    "arckezelés",
    "smink",
    "kozmetika",
    "Abda",
    "Győr",
    business.name,
  ],
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: `${business.name} ${business.nameAccent}`,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#fbf7f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream font-body text-ink">
        {children}
      </body>
    </html>
  );
}
