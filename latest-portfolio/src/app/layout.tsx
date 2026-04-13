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
  title: "Rushabh Trivedi - Full Stack Developer | Python Django Next.js & Django | Hyderabad",
  description: "Hire Rushabh Trivedi: Full Stack Developer specializing in Next.js, React, TypeScript, Python (Django/FastAPI) & Node.js. 1+ years building scalable web apps, fintech APIs, microservices, AI/ML systems, and polished frontends. Expert in PostgreSQL, Redis, AWS, Docker, Tailwind CSS. Available for full-stack/backend roles.",
  keywords: [
    // Primary keywords
    "python backend developer", "full stack developer", "backend developer", "next.js developer", "react developer", "typescript developer", 
    "python developer", "django developer", "fastapi developer", "node.js developer",
    
    // Job titles
    "software development engineer", "backend engineer", "fullstack engineer", "python developer",
    "mern stack developer", "api developer", "microservices developer",
    
    // Technologies
    "django rest framework", "express.js developer", "postgresql developer", "redis developer",
    "aws backend developer", "docker developer", "celery python", "socket.io developer",
    "next.js", "react", "tailwind css", "typescript", "django rest framework", "express.js",
    "postgresql", "redis", "aws", "docker",
    
    // Specializations
    "fintech backend developer", "payment gateway developer", "ai ml developer", "scalable api developer", "responsive ui",
    "microservices architecture", "high throughput systems", "event-driven architecture",
    
    // Location-based
    "backend developer hyderabad india", "remote python developer", "indian backend engineer",
    "fullstack developer hyderabad india", "remote fullstack developer",
    
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
    siteName: "Rushabh Trivedi - Full Stack AI Developer Portfolio",
    title: "Rushabh Trivedi - Full Stack Developer (Next.js, Django, Node.js) | Hire for Fintech & AI Projects",
    description: "Full Stack Developer experienced in building end-to-end applications with Next.js/React frontends and Python (Django/FastAPI) & Node.js backends. Built 20+ microservices, fintech payment gateways, AI document systems. Expert in PostgreSQL, Redis, AWS. Open to backend/fullstack opportunities in Hyderabad & remote.",
    images: [
      {
        url: "https://cdn.inspireuplift.com/uploads/images/seller_products/1685470723_105.jpg",
        width: 1200,
        height: 630,
        alt: "Rushabh Trivedi - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushabh Trivedi - Full Stack Developer | Next.js, React, Django, Node.js",
    description: "Experienced Full Stack Developer: Next.js, React, TypeScript, Django, FastAPI, Node.js. Built production-grade web apps, APIs, and deployable systems.",
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
            "jobTitle": "Full Stack Developer | Python Backend & AI/ML Developer | MERN Stack Developer",
            "description": "Software Development Engineer specializing in Python (Django/FastAPI) & Node.js backends & Next.js/React frontends",
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
              "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
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