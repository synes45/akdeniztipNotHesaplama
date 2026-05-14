import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akdeniz Tıp - Not Hesaplama",
  description: "Akdeniz Tıp Dönem 1 Öğrencileri İçin Not Hesaplama aracı.",
  keywords: ["Akdeniz Tıp", "Not Hesaplama", "Tıp Fakültesi", "Dönem 1", "Akdeniz Üniversitesi", "Kurul Notu Hesaplama", "Akdü", "Akdü tıp", "Akdü tıp not", "Akdü not"],
  authors: [{ name: "Efe Küçükoğlu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      
      {/* Google Analytics - Görseldeki ID: G-HNCBTTPVFC */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HNCBTTPVFC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HNCBTTPVFC');
        `}
      </Script>
    </html>
  );
}
