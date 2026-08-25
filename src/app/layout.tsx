import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Naresh — Full-Stack Developer & Software Engineer",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Naresh — Full-Stack Developer",
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: "Naresh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naresh — Full-Stack Developer",
    description: siteConfig.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#050508] text-zinc-100 selection:bg-violet-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
