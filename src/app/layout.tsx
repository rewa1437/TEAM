import type { Metadata } from "next";
import { Geist, Geist_Mono, Sarabun } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import { LanguageProvider } from "@/components/ui/language-switcher";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CPK",
  description: "Our team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sarabun.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F7F4]">
          {/* Film-grain noise overlay — fixed, GPU-safe, never scrolls */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[60]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '160px 160px',
              opacity: 0.025,
            }}
          />
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </body>
    </html>
  );
}
