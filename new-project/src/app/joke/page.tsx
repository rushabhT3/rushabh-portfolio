"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const fetchJoke = async (
  setJoke: React.Dispatch<React.SetStateAction<Joke | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
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

const Jokes: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    fetchJoke(
      (newJoke) => {
        if (isMounted) setJoke(newJoke);
      },
      (newLoading) => {
        if (isMounted) setLoading(newLoading);
      }
    );

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="jokes-container flex flex-col items-center justify-center py-16 px-8 sm:px-16 md:px-32 lg:px-64">
      <h1 className="text-4xl font-bold text-center mb-8">
        Here's joke for you 🤗
      </h1>

      {loading ? (
        // spinner 
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-400"></div>
        </div>
      ) : (
        <div className="joke-content text-center">
          {joke && (
            <>
              <p className="text-lg leading-relaxed">{joke.setup}</p>
              <p className="text-lg leading-relaxed mt-4">{joke.punchline}</p>
            </>
          )}
        </div>
      )}

      <button
        onClick={() => fetchJoke(setJoke, setLoading)}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Get Another Joke
      </button>
    </div>
  );
};

export default Jokes;
