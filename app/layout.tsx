import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { baseMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"]
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"]
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
