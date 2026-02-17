import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✅ Font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mazaharul.site";

// ── Viewport ──
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
    { media: "(prefers-color-scheme: light)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

// ── Metadata ──
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Mazaharul Islam — Full Stack Developer | Next.js, React, Node.js Expert from Bangladesh",
    template: "%s — Mazaharul Islam | Full Stack Developer",
  },

  description:
    "Hi, I'm Mazaharul Islam — a Full Stack Developer from Jashore, Bangladesh. I specialize in building high-performance web applications with Next.js, React, TypeScript, Node.js, Prisma & PostgreSQL. Explore my projects like MazaPay, MazaAir, and more.",

  keywords: [
    // ── Name Variations ──
    "Mazaharul Islam",
    "Mazaharul Islam developer",
    "Mazaharul Islam portfolio",
    "Mazaharul Islam Jashore",
    "devmazaharul",

    // ── Role Keywords ──
    "Full Stack Developer",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Developer Bangladesh",
    "React Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "Freelance Developer Bangladesh",

    // ── Tech Stack ──
    "Next.js developer",
    "React.js developer",
    "Node.js developer",
    "TypeScript developer",
    "Prisma ORM",
    "PostgreSQL developer",
    "MongoDB developer",
    "Express.js developer",
    "Tailwind CSS developer",
    "REST API developer",

    // ── Services ──
    "SaaS development",
    "eCommerce development",
    "dashboard development",
    "admin panel development",
    "custom web application",
    "responsive web design",
    "API development",

    // ── Project Names (Branded) ──
    "MazaPay",
    "MazaAir",
    "mazaharul.site",

    // ── Location ──
    "developer Jashore",
    "developer Khulna",
    "developer Bangladesh",
    "remote developer",
    "hire developer Bangladesh",
  ],

  // ── Authors ──
  authors: [
    { name: "Mazaharul Islam", url: siteUrl },
    { name: "devmazaharul", url: "https://github.com/devmazaharul" },
  ],
  creator: "Mazaharul Islam",
  publisher: "Mazaharul Islam",

  // ── Category ──
  category: "Technology",

  // ── Canonical & Alternates ──
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "bn-BD": siteUrl,
    },
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    url: siteUrl,
    title: "Mazaharul Islam — Full Stack Developer from Bangladesh",
    description:
      "Building scalable, high-performance web apps with Next.js, React, Node.js, Prisma & PostgreSQL. Check out my projects, skills, and experience.",
    siteName: "Mazaharul Islam — Portfolio",
    images: [
      {
        url: "/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Mazaharul Islam — Full Stack Developer Portfolio",
        type: "image/png",
      },
      {
        url: "/oseo.jpg",
        width: 600,
        height: 600,
        alt: "Mazaharul Islam — Developer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter ──
  twitter: {
    card: "summary_large_image",
    title: "Mazaharul Islam — Full Stack Developer",
    description:
      "Next.js, React, Node.js expert from Bangladesh. Explore my projects & skills.",
    images: [
      {
        url: "/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Mazaharul Islam Portfolio",
      },
    ],
    creator: "@devmazaharul",
    site: "@devmazaharul",
  },

  // ── Icons ──


  // ── Manifest (PWA support) ──
  manifest: "/manifest.json",

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ──
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "your-google-verification-code",
    // yandex: "your-yandex-code",
    // yahoo: "your-yahoo-code",
  },

  // ── Other ──
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ── JSON-LD: Person Schema ──
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Mazaharul Islam",
  givenName: "Mazaharul",
  familyName: "Islam",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, Prisma & PostgreSQL",
  jobTitle: "Full Stack Developer",
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "REST API",
    "Docker",
    "AWS",
    "Git",
    "GitHub",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Self-Employed",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Rupdia Smrity College",
    },
    {
      "@type": "EducationalOrganization",
      name: "Rupdia High School",
    },
  ],
  sameAs: [
    "https://github.com/devmazaharul",
    "https://www.linkedin.com/in/mazaharul-islam-0948a333a",
    "https://www.facebook.com/themazaharul",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jashore",
    addressRegion: "Khulna Division",
    addressCountry: "BD",
  },
  nationality: {
    "@type": "Country",
    name: "Bangladesh",
  },
};

// ── JSON-LD: Website Schema ──
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Mazaharul Islam — Portfolio",
  description: "Portfolio of Mazaharul Islam, Full Stack Developer from Bangladesh",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
  inLanguage: ["en-US", "bn-BD"],
};

// ── JSON-LD: Professional Service ──
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: "Mazaharul Islam — Web Development Services",
  description:
    "Full Stack Web Development services including Next.js apps, RESTful APIs, SaaS dashboards, and eCommerce platforms.",
  url: siteUrl,
  provider: {
    "@id": `${siteUrl}/#person`,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 23.1634,
      longitude: 89.2095,
    },
    geoRadius: "50000",
  },
  serviceType: [
    "Web Development",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "SaaS Development",
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
    },
  },
};

// ── JSON-LD: BreadcrumbList ──
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `${siteUrl}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Skills",
      item: `${siteUrl}/#skills`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: `${siteUrl}/#contact`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        {/* ── Preconnect for performance ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── DNS Prefetch ── */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* ── Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              websiteSchema,
              serviceSchema,
              breadcrumbSchema,
            ]),
          }}
        />

        {/* ── Geo Meta Tags ── */}
        <meta name="geo.region" content="BD-D" />
        <meta name="geo.placename" content="Jashore" />
        <meta name="geo.position" content="23.1634;89.2095" />
        <meta name="ICBM" content="23.1634, 89.2095" />

        {/* ── Additional SEO Meta ── */}
        <meta name="subject" content="Full Stack Web Development Portfolio" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white`}
      >
        {/* ── Skip to content (Accessibility) ── */}
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-cyan-500 px-4 py-2
                     text-sm font-semibold text-slate-900 transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>

        <main id="main-content">{children}</main>

        {/* ── Noscript fallback ── */}
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#94a3b8" }}>
            <h1>Mazaharul Islam — Full Stack Developer</h1>
            <p>
              Please enable JavaScript to view this portfolio.
              Contact: mazaharul@example.com
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}