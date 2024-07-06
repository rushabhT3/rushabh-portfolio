"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState("white");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (hovered) {
      interval = setInterval(() => {
        setCurrentColor(getRandomColor());
      }, 500); // Change color every 500ms (adjust as needed)
    } else {
      clearInterval(interval);
      setCurrentColor("white"); // Reset to default color when not hovered
    }

    return () => clearInterval(interval);
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const dynamicStyle = {
    color: currentColor,
    transition: "color 0.3s ease",
    cursor: "pointer",
    display: "inline-block",
  };

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white text-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={dynamicStyle}
        >
          Rushabh Trivedi
        </div>
        <div>
          <Link href="/" passHref>
            <span className="text-gray-300 hover:text-white px-3">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-gray-300 hover:text-white px-3">About</span>
          </Link>
          <Link href="/projects" passHref>
            <span className="text-gray-300 hover:text-white px-3">
              Projects
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-gray-300 hover:text-white px-3">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
