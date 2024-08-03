"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const contactDetails = [
  {
    label: "Email",
    value: "rushabhtrivedi03@gmail.com",
    link: "mailto:rushabhtrivedi03@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 83800 48166",
    link: "tel:+918380048166",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "trivedirushabh",
    link: "https://www.linkedin.com/in/trivedirushabh/",
    icon: Linkedin,
  },
];

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <div className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          >
            Contact Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl mb-8"
          >
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Feel free to connect with me through the following contact
              details:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Details
            </h2>
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.link}
                  className="flex items-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                >
                  <detail.icon className="mr-3 h-6 w-6" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {detail.label}
                    </p>
                    <p>{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
