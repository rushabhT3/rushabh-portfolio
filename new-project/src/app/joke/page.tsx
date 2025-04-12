"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaughSquint, FaSyncAlt } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const Jokes: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);
  
  // Remove darkMode state - we'll use the site-wide theme instead

  useEffect(() => {
    let isMounted = true;
    
    // Fetch joke function
    const fetchJoke = async () => {
      try {
        if (isMounted) setLoading(true);
        const response = await axios.get<Joke>(
          "https://official-joke-api.appspot.com/random_joke"
        );
        if (response.status === 200 && isMounted) {
          setJoke(response.data);
        } else if (isMounted) {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        if (isMounted) {
          if (axios.isAxiosError(error)) {
            console.error("Error:", error.response?.data || error.message);
          } else {
            console.error("Unexpected error:", error);
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchJoke();

    return () => {
      isMounted = false;
    };
  }, []);

  const getNewJoke = async () => {
    setShowPunchline(false);
    setLoading(true);
    try {
      const response = await axios.get<Joke>(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (response.status === 200) {
        setJoke(response.data);
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // Remove the darkMode conditional class wrapper
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 min-h-screen transition-colors duration-200">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="jokes-container space-y-12 w-full"
        >
          <motion.div
            className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center cursor-default select-none text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            <FaLaughSquint className="text-5xl text-yellow-500 mr-4" />
            Here's a joke for you!
          </motion.div>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-indigo-500 dark:border-indigo-400"></div>
              </motion.div>
            ) : (
              <motion.div
                key="joke"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="joke-content text-center"
              >
                {joke && (
                  <>
                    <p className="text-2xl md:text-3xl leading-relaxed mb-6 text-gray-800 dark:text-white">
                      {joke.setup}
                    </p>
                    <AnimatePresence>
                      {showPunchline && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-2xl md:text-3xl leading-relaxed mt-6 font-bold text-indigo-600 dark:text-indigo-400"
                        >
                          {joke.punchline}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPunchline(!showPunchline)}
              className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-200 text-lg"
              disabled={loading}
            >
              <div className="flex items-center justify-center">
                {showPunchline ? "Hide" : "Show"} Punchline
                {showPunchline ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={getNewJoke}
              className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center transition-colors duration-200 text-lg"
              disabled={loading}
            >
              <FaSyncAlt className="mr-2" />
              New Joke
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Jokes;