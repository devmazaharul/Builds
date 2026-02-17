import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Base URL সেট করা খুব জরুরি (আপনার ডোমেইন বসাবেন)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mazaharul.site"; 

export const viewport: Viewport = {
  themeColor: "#111827", // মোবাইলের এড্রেস বার কালার (Dark mode match)
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // 2. Metadata Base (ইমেজ লোড হওয়ার জন্য জরুরি)
  metadataBase: new URL(siteUrl),

  // 3. Title Template (প্রতি পেজে ডায়নামিক টাইটেল দেখাবে)
  title: {
    default: "Mazaharul Islam | Full Stack Web Developer",
    template: "%s | Mazaharul Islam",
  },
  
  // 4. Description (Google Search-এ এটাই দেখাবে)
  description: "Portfolio of Mazaharul Islam, a Full Stack Developer from Jashore, Bangladesh. Specializing in Next.js, React, Node.js, and Scalable Web Architectures.",
  
  // 5. Keywords (সার্চ র‍্যাঙ্কিংয়ের জন্য)
  keywords: [
    "Mazaharul Islam",
    "Full Stack Developer",
    "Web Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "Node.js Expert",
    "Software Engineer Jashore",
    "Portfolio Website",
    "MazaPay",
    "MazaAir"
  ],

  // 6. Authors & Creator
  authors: [{ name: "Mazaharul Islam", url: siteUrl }],
  creator: "Mazaharul Islam",
  publisher: "Mazaharul Islam",

  // 7. Open Graph / Facebook & LinkedIn Preview
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Mazaharul Islam - Full Stack Developer",
    description: "Building scalable web applications with Next.js & Cloud Technologies. Check out my projects and skills.",
    siteName: "Mazaharul Islam Portfolio",
    images: [
      {
        url: "/og-image.png", // public ফোল্ডারে এই নামে ছবি রাখতে হবে
        width: 1200,
        height: 630,
        alt: "Mazaharul Islam Portfolio Preview",
      },
    ],
  },

  // 8. Twitter Card Preview
  twitter: {
    card: "summary_large_image",
    title: "Mazaharul Islam | Full Stack Developer",
    description: "Check out my portfolio and projects built with Next.js and Node.js.",
    images: ["/og-image.png"],
    creator: "@devmazaharul", // যদি টুইটার থাকে
  },

  // 9. Icons (Favicon)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // 10. Robots (Google ইনডেক্স করবে কিনা)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 11. JSON-LD Schema (Google যাতে আপনাকে 'Person' হিসেবে চিনে)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mazaharul Islam",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
  sameAs: [
    "https://www.linkedin.com/in/mazaharul-islam-0948a333a",
    "https://github.com/devmazaharul",
    "https://www.facebook.com/themazaharul",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jashore",
    addressRegion: "Khulna",
    addressCountry: "Bangladesh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Script Injecting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}