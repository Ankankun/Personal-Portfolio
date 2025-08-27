import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  metadataBase: new URL("https://ankankun.me"),
  title: {
    default: "Ankan Das – Portfolio & Projects",
    template: "%s | Ankan Das",
  },
  description:
    "Aspiring full‑stack developer building clean, accessible web interfaces, Python tooling, and learning logs. Explore projects, experience, and ways to get in touch.",
  keywords: [
    "Ankan Das",
    "Web Developer",
    "Full Stack",
    "Portfolio",
    "JavaScript",
    "Python",
    "Frontend",
  ],
  authors: [{ name: "Ankan Das" }],
  creator: "Ankan Das",
  openGraph: {
    type: "website",
    url: "https://ankankun.me",
    siteName: "Ankan Portfolio",
    title: "Ankan Das – Portfolio & Projects",
    description: "Browse projects, learning log, and contact details.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of Ankan Das portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankan Das – Portfolio & Projects",
    description: "Projects, learning log, and contact.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ankankun.me",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport = {
  themeColor: "#ef6c4d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
