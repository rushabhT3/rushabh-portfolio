// src/app/components/Footer.tsx
"use client";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-400">
        © {new Date().getFullYear()} Rushabh Trivedi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
