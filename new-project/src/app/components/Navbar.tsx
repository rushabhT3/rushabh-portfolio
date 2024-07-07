"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState("white");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
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

  // Menu items data
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

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
        <div className="block md:hidden">
          <button onClick={handleMenuToggle} className="text-white text-3xl">
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <div className={`md:flex ${menuOpen ? "block" : "hidden"} md:block`}>
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

      {menuOpen && (
        <div className="md:hidden bg-gray-800 fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50">
          <button
            onClick={handleMenuToggle}
            className="text-white text-3xl absolute top-4 right-4"
          >
            <IoMdClose />
          </button>
          {/* <Link href="/" passHref>
            <span
              className="text-white text-2xl py-4 hover:underline"
              onClick={handleMenuToggle}
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              className="text-white text-2xl py-4 hover:underline"
              onClick={handleMenuToggle}
            >
              About
            </span>
          </Link>
          <Link href="/projects" passHref>
            <span
              className="text-white text-2xl py-4 hover:underline"
              onClick={handleMenuToggle}
            >
              Projects
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span
              className="text-white text-2xl py-4 hover:underline"
              onClick={handleMenuToggle}
            >
              Contact
            </span>
          </Link> */}
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href} passHref>
              <span
                className="text-white text-2xl py-4 hover:underline block"
                onClick={handleMenuToggle}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
