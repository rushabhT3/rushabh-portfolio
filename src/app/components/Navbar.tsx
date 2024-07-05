// src/app/components/Navbar.tsx
"use client";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Rushabh Trivedi</div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white px-3">
            About
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white px-3">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white px-3">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
