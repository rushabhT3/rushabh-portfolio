// src/app/components/ThemeToggle.tsx
"use client";

import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getCurrentThemeIcon = () => {
    const option = themeOptions.find(option => option.value === theme);
    const Icon = option?.icon || Sun;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDropdown}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {getCurrentThemeIcon()}
      </motion.button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value as any);
                  setIsOpen(false);
                }}
                className={`${
                  theme === option.value 
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" 
                    : "text-gray-700 dark:text-gray-300"
                } group flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700`}
                role="menuitem"
              >
                <option.icon className="mr-3 h-5 w-5" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;