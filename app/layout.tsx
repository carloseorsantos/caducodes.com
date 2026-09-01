import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caducodes.com"),
  title: "Carlos Santos (@caducodes) — Software Engineer & macOS Developer",
  description:
    "Portfolio of Carlos Santos (@caducodes). Native macOS utilities (OpenCleaner, Win+V) in Swift 6 & Mach Kernel APIs, and full-stack enterprise systems at CI&T (Next.js, TypeScript, Spring Boot).",
  keywords: [
    "Carlos Santos",
    "caducodes",
    "carloseorsantos",
    "OpenCleaner for Mac",
    "Win+V for Mac",
    "macOS Developer",
    "Swift 6",
    "SwiftUI",
    "Mach Kernel",
    "Full-Stack Engineer",
    "Next.js",
    "TypeScript",
    "CI&T",
  ],
  authors: [{ name: "Carlos Santos", url: "https://caducodes.com" }],
  creator: "Carlos Santos (@caducodes)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caducodes.com",
    title: "Carlos Santos (@caducodes) — Software Engineer & macOS Developer",
    description:
      "Native macOS utilities in Swift 6 & Mach Kernel APIs, plus scalable full-stack web systems.",
    siteName: "caducodes.com",
    images: [
      {
        url: "https://github.com/carloseorsantos.png",
        width: 800,
        height: 800,
        alt: "Carlos Santos (@caducodes)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Santos (@caducodes) — Software Engineer & macOS Developer",
    description:
      "Native macOS utilities in Swift 6 & Mach Kernel APIs, plus scalable full-stack web systems.",
    images: ["https://github.com/carloseorsantos.png"],
    creator: "@caducodes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-[#f5f5f7] antialiased min-h-screen font-sans selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
