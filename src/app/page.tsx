// src/app/page.tsx
"use client";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen max-w-screen-md space-y-4">
      <h1 className="text-2xl font-bold text-google-gray-800">
        Hello, I'm Rushabh Trivedi
      </h1>
      <p className="text-base leading-relaxed text-google-gray-600 text-center">
        Welcome to my portfolio website. Here you can learn more about my
        skills, projects, and how to contact me.
      </p>
      <Link
        to="/about"
        className="inline-flex items-center px-3 py-1.5 text-black font-bold rounded-full bg-google-blue-500 hover:bg-google-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue-500"
      >
        Learn more about me
      </Link>
      <p className="text-base text-google-gray-600 text-center">
        Interested in working together or have a project in mind?
        <br />
        Contact me at{" "}
        <a
          href="mailto:rushabhtrivedi03@gmail.com"
          className="text-google-blue-500 underline"
        >
          rushabhtrivedi03@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
