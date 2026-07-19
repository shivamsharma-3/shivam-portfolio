import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivam-portfolio0.vercel.app"),
  title: "Shivam Sharma — SaaS Product Builder",
  description: "2025 AI & DS grad from India. I build SaaS products using AI tools. 3 products shipped solo in 6 months. Looking for freelance MVP work or a founding product role.",
  authors: [{ name: "Shivam Sharma" }],
  creator: "Shivam Sharma",
  openGraph: {
    title: "Shivam Sharma — SaaS Product Builder",
    description: "I build SaaS products using AI tools. 3 products shipped solo in 6 months. Looking for freelance MVP work or a founding product role.",
    type: "website",
    url: "https://shivam-portfolio0.vercel.app",
    siteName: "Shivam Sharma — SaaS Builder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Sharma — SaaS Product Builder",
    description: "I build SaaS products using AI tools. 3 products shipped solo. Looking for paid work.",
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased grain`}
        style={{ backgroundColor: '#141210', color: '#fafafa' }}
      >
        <div className="ambient-bg" />
        <div className="relative z-10">{children}</div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
