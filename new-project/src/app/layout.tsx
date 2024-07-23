import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArrowButton from "./components/ArrowButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rushabh Trivedi - Full-Stack Developer",
  description:
    "A seasoned full-stack developer with experience across diverse projects, specializing in databases, programming languages, and cloud tools to drive scalable web development. Explore my skills, technologies, and professional profiles.",
  openGraph: {
    title: "Rushabh Trivedi - Full-Stack Developer",
    description:
      "A seasoned full-stack developer with experience across diverse projects, specializing in databases, programming languages, and cloud tools to drive scalable web development. Explore my skills, technologies, and professional profiles.",
    // url: "https://your-website-url.com/about-me",
    siteName: "Rushabh Trivedi Portfolio",
    // images: [
    //   {
    //     url: "https://your-website-url.com/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Rushabh Trivedi - Full-Stack Developer",
    //   },
    // ],
    locale: "en_US",
    type: "profile",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-grow flex flex-col">
          <Navbar />
          <main>
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </main>
        </div>
        <Footer />
        {/* Arrow Button */}
        <ArrowButton />
      </body>
    </html>
  );
}
