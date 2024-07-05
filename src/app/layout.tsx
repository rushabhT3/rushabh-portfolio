"use client";
import "./styles/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";

// Import spinner animation CSS from Tailwind
import "tailwindcss/tailwind.css";

const LazyHome = lazy(() => import("./page"));
const LazyAbout = lazy(() => import("./about/page"));
const LazyProjects = lazy(() => import("./projects/page"));
const LazyContact = lazy(() => import("./contact/page"));

const Spinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <div className="flex-grow">
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<LazyHome />} />
                <Route path="/about" element={<LazyAbout />} />
                <Route path="/projects" element={<LazyProjects />} />
                <Route path="/contact" element={<LazyContact />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </Router>
      </body>
    </html>
  );
}
