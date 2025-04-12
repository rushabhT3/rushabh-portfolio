// src/app/layout.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArrowButton from "./components/ArrowButton";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rushabh Trivedi - Full-Stack Developer",
  description:
    "A seasoned full-stack developer with experience across diverse projects, specializing in databases, programming languages, and cloud tools to drive scalable web development. Explore my skills, technologies, and professional profiles.",
  openGraph: {
    title: "Rushabh Trivedi - Full-Stack Developer",
    description:
      "A seasoned full-stack developer with experience across diverse projects, specializing in databases, programming languages, and cloud tools to drive scalable web development. Explore my skills, technologies, and professional profiles.",
    siteName: "Rushabh Trivedi Portfolio",
    locale: "en_US",
    type: "profile",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
  </div>
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </main>
          <Footer />
          <ArrowButton />
        </ThemeProvider>
      </body>
    </html>
  );
}