// src/app/components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaLaugh,
  FaEnvelope,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let interval: any;
    if (hovered) {
      interval = setInterval(() => {
        setCurrentColor(getRandomColor());
      }, 500);
    } else {
      clearInterval(interval);
      setCurrentColor("#ffffff");
    }
    return () => clearInterval(interval);
  }, [hovered]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const menuItems = [
    { text: "Home", href: "/", icon: FaHome },
    { text: "About", href: "/about", icon: FaUser },
    { text: "Projects", href: "/projects", icon: FaProjectDiagram },
    { text: "Bored?", href: "/joke", icon: FaLaugh },
    { text: "Contact", href: "/contact", icon: FaEnvelope },
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900 shadow-lg dark:bg-gray-800" : "bg-gray-800 dark:bg-gray-900"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ color: currentColor }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Rushabh Trivedi
          </motion.div>
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link key={item.text} href={item.href} passHref>
                <motion.span
                  className="text-white hover:text-gray-300 flex items-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="mr-2" />
                  {item.text}
                </motion.span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              className="text-white text-2xl"
              onClick={handleMenuToggle}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 dark:bg-gray-800 z-40 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href} passHref>
              <motion.span
                className="text-white text-2xl py-4 flex items-center cursor-pointer"
                onClick={handleMenuToggle}
                whileHover={{ scale: 1.1, x: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="mr-4" />
                {item.text}
              </motion.span>
            </Link>
          ))}
        </motion.div>
      )}
      <div className="pt-14">{/* Increase padding for content below navbar */}</div>
    </>
  );
};

export default Navbar;