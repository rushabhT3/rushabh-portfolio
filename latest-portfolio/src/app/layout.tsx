import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushabh Trivedi - Python Django Developer | Node.js Backend Engineer | Hyderabad",
  description: "Hire Rushabh Trivedi: Expert Python Django/FastAPI & Node.js Backend Developer in Hyderabad. 1+ years building scalable fintech APIs, microservices, AI/ML systems. Specialized in PostgreSQL, Redis, AWS, Docker. Available for backend/fullstack roles.",
  keywords: [
    // Primary keywords
    "python backend developer", "django developer", "fastapi developer", "node.js backend engineer",
    "backend developer hyderabad", "fullstack developer india", "python django developer hire",
    
    // Job titles
    "software development engineer", "backend engineer", "fullstack engineer", "python developer",
    "mern stack developer", "api developer", "microservices developer",
    
    // Technologies
    "django rest framework", "express.js developer", "postgresql developer", "redis developer",
    "aws backend developer", "docker developer", "celery python", "socket.io developer",
    
    // Specializations
    "fintech backend developer", "payment gateway developer", "ai ml developer", "scalable api developer",
    "microservices architecture", "high throughput systems", "event-driven architecture",
    
    // Location-based
    "backend developer hyderabad india", "remote python developer", "indian backend engineer",
    
    // Experience level
    "mid-level backend developer", "experienced python developer", "production-ready developer",
    
    // Company experience
    "fintech developer", "saas backend developer", "startup backend engineer"
  ],
  authors: [{ name: "Rushabh Trivedi" }],
  creator: "Rushabh Trivedi",
  publisher: "Rushabh Trivedi",
  alternates: {
    canonical: "https://rushabh-portfolio-iz62.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "https://cdn.inspireuplift.com/uploads/images/seller_products/1685470723_105.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rushabh-portfolio-iz62.vercel.app/",
    siteName: "Rushabh Trivedi - Backend Developer Portfolio",
    title: "Rushabh Trivedi - Python Django & Node.js Backend Developer | Hire for Fintech & AI Projects",
    description: "Senior Backend Engineer specializing in Python (Django/FastAPI) & Node.js. Built 20+ microservices, fintech payment gateways, AI document systems. Expert in PostgreSQL, Redis, AWS. Open to backend/fullstack opportunities in Hyderabad & remote.",
    images: [
      {
        url: "https://cdn.inspireuplift.com/uploads/images/seller_products/1685470723_105.jpg",
        width: 1200,
        height: 630,
        alt: "Rushabh Trivedi - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushabh Trivedi - Python Django & Node.js Backend Developer",
    description: "Experienced Backend Engineer | Django, FastAPI, Node.js | Built fintech microservices & AI systems | Available for hire",
    creator: "@rushabhT3",
    images: ["https://cdn.inspireuplift.com/uploads/images/seller_products/1685470723_105.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
  },
  category: "technology",
  other: {
    "linkedin:profile": "https://www.linkedin.com/in/trivedirushabh/",
    "github:profile": "https://github.com/rushabhT3/",
    "portfolio:url": "https://rushabh-portfolio-iz62.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rushabh Trivedi",
            "jobTitle": "Python Backend & AI/ML Developer | MERN Developer",
            "description": "Software Development Engineer specializing in Python Django/FastAPI and Node.js backend development",
            "url": "https://rushabh-portfolio-iz62.vercel.app/",
            "email": "rushabhtrivedi03@gmail.com",
            "telephone": "+918380048166",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/in/trivedirushabh/",
              "https://github.com/rushabhT3/",
              "https://leetcode.com/u/rushabhtrivedi03/",
              "https://www.hackerrank.com/rushabhtrivedi03"
            ],
            "knowsAbout": [
              "Python", "Django", "FastAPI", "Node.js", "Express.js", "PostgreSQL", 
              "Redis", "AWS", "Docker", "Microservices", "REST APIs", "AI/ML"
            ],
            "worksFor": [
              {
                "@type": "Organization",
                "name": "Coinearth Technologies"
              },
              {
                "@type": "Organization",
                "name": "Polynomial AI"
              }
            ]
          })
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}