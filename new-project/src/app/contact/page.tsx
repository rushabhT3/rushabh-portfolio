// src/app/contact.tsx
"use client";

const contactDetails = [
  {
    label: "Email",
    value: "rushabhtrivedi03@gmail.com",
    link: "mailto:rushabhtrivedi03@gmail.com",
  },
  { label: "Phone", value: "+91 83800 48166", link: "tel:+918380048166" }, // Added tel: link for phone number
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
];

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="max-w-lg prose md:prose-sm">
        {" "}
        {/* Responsive prose class */}
        <p className="text-lg text-google-gray-700 mb-4 text-center">
          You can reach out to me through the following contact details:
        </p>
        <ul className="space-y-4">
          {contactDetails.map((detail, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0"
            >
              <span className="font-bold text-google-gray-700 text-right md:text-left mr-4">
                {detail.label}:
              </span>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-blue-500 hover:underline hover:font-bold"
                >
                  {detail.value}
                </a>
              ) : (
                <span>{detail.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
