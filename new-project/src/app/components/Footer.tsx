// src/app/components/Footer.tsx
"use client";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 p-4 transition-colors duration-200">
      <div className="container mx-auto text-center text-gray-400 dark:text-gray-300">
        © {new Date().getFullYear()} Rushabh Trivedi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;