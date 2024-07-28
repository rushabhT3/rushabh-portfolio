// src/app/page.tsx
"use client";
import Link from "next/link";

export default function Home() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || '/default-resume-url';

  return (
    <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen max-w-screen-md space-y-4">
      <h1 className="text-2xl font-bold text-google-gray-800 text-center">
        Hello, I'm Rushabh Trivedi
      </h1>
      <p className="text-base leading-relaxed text-google-gray-600 text-center">
        Welcome to my portfolio website! Here, you'll find information about my
        skills, projects, and ways to get in touch with me.
      </p>
      <Link
        href="/about"
        className="inline-flex items-center px-3 py-1.5 text-gray font-bold rounded-full bg-google-blue-500 hover:bg-google-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue-500 dark:text-white hover:underline"
      >
        Discover more about me
      </Link>
      <Link
        href={resumeLink} // Your actual resume link
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security measures
        className="inline-flex items-center px-3 py-1.5 text-gray font-bold rounded-full bg-google-blue-500 hover:bg-google-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue-500 hover:underline"
      >
        View my resume
      </Link>
      <p className="text-base text-google-gray-600 text-center">
        Interested in collaborating or have a project in mind?
        <br />
        Feel free to reach out at{" "}
        <a
          href="mailto:rushabhtrivedi03@gmail.com"
          className="text-google-blue-500 underline hover:font-bold"
        >
          rushabhtrivedi03@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
