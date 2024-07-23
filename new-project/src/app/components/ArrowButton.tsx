// src/app/components/ArrowButton.tsx
"use client";

import { useEffect, useState } from "react";

const ArrowButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > window.innerHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-blue-600 text-white shadow-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7-7-7 7M12 4v16"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
