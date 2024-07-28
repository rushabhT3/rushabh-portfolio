const aboutMe = {
  intro:
    "I'm a seasoned full-stack developer with experience across diverse projects, specializing in databases, programming languages, and cloud tools to drive scalable web development.",
  skillsAndTechnologies: {
    "Programming Languages": "Python, JavaScript, TypeScript, Go",
    Backend: "Node.js, Express.js, Django, Go-Gin",
    Frontend: "ReactJS, NextJS, Redux",
    "Database & Tools":
      "SQL, MongoDB, AWS, Redis, Nginx, Jenkins, React Router",
  },
  profiles: [
    {
      label: "LinkedIn",
      value: "trivedirushabh",
      link: "https://www.linkedin.com/in/trivedirushabh/",
    },
    {
      label: "GitHub",
      value: "rushabhT3",
      link: "https://github.com/rushabhT3/",
    },
    {
      label: "LeetCode",
      value: "rushabhtrivedi03",
      link: "https://leetcode.com/rushabhtrivedi03",
    },
    {
      label: "HackerRank",
      value: "rushabhtrivedi03",
      link: "https://www.hackerrank.com/profile/rushabhtrivedi03",
    },
  ],
  otherSkills: {
    "Spoken Languages": "English, Hindi, Marathi",
    "Digital Marketing":
      "Fundamentals of Digital Marketing (Google Garage Certification)",
  },
};

export default function About() {
  return (
    <div className="about-container flex flex-col items-center justify-center py-16 px-8 sm:px-16 md:px-32 lg:px-64">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      <div className="about-content flex flex-col gap-8">
        <p className="text-lg leading-relaxed text-center">{aboutMe.intro}</p>

        <section className="skills-and-technologies-section w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Skills and Technologies
          </h2>
          <ul className="skills-list list-disc pl-4 space-y-2">
            {Object.entries(aboutMe.skillsAndTechnologies).map(
              ([skillCategory, skillDetails]) => (
                <li key={skillCategory}>
                  <strong>{skillCategory}:</strong> {skillDetails}
                </li>
              )
            )}
          </ul>
        </section>

        <section className="profiles-section w-full mt-2">
          <h2 className="text-2xl font-semibold mb-4">Profiles</h2>
          <ul className="profiles-list list-disc pl-4 space-y-2">
            {aboutMe.profiles.map((profile) => (
              <li key={profile.label}>
                <strong>{profile.label}:</strong>
                {"  "}
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:font-bold"
                >
                  {profile.value} 🔗
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="other-skills-section w-full mt-2">
          <h2 className="text-2xl font-semibold mb-4">Other Skills</h2>
          <ul className="skills-list list-disc pl-4 space-y-2">
            {Object.entries(aboutMe.otherSkills).map(
              ([skillCategory, skillDetails]) => (
                <li key={skillCategory}>
                  <strong>{skillCategory}:</strong> {skillDetails}
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
