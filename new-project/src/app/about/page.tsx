"use client";

const aboutMe = {
  intro:
    "I am a software engineer from Amravati, Maharashtra, India. My expertise lies in full stack development with a focus on both frontend and backend technologies.",
  skills: {
    "Skills and Technologies": {
      "Programming Languages": "Python, JavaScript, TypeScript, Go",
      Backend: "Node.js, Express.js, Django",
      Frontend: "ReactJS, NextJS, Redux",
      "Database & Tools":
        "SQL, MongoDB, AWS, Redis, Nginx, Jenkins, React Router",
    },
    "Other Skills": {
      "Spoken Languages": "English, Hindi, Marathi",
      "Digital Marketing":
        "Fundamentals of Digital Marketing (Google Garage Certification)",
    },
  },
};

export default function About() {
  return (
    <div className="about-container flex flex-col items-center justify-center py-16 px-8 sm:px-16 md:px-32 lg:px-64">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      <div className="about-content flex flex-col gap-8">
        <p className="text-lg leading-relaxed text-center">{aboutMe.intro}</p>

        {Object.entries(aboutMe.skills).map(([sectionName, skills]) => (
          <section key={sectionName} className="skills-section w-full">
            <h2 className="text-2xl font-semibold mb-4">{sectionName}</h2>

            <ul className="skills-list list-disc pl-4 space-y-2">
              {Object.entries(skills).map(([skillCategory, skillDetails]) => (
                <li key={skillCategory}>
                  <strong>{skillCategory}:</strong> {skillDetails}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
