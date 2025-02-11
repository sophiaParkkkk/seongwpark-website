"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

type Experience = {
  company: string;
  role: string;
  location: string;
  duration: string;
  logo: string;
  details: string;
};

const experiences: Experience[] = [
  {
    company: "Samsung Semiconductor",
    role: "Software Engineer Intern",
    location: "Seoul, South Korea",
    duration: "June 2024 - August 2024",
    logo: "/samsung.jpg",
    details: "...",
  },
  {
    company: "HigherU",
    role: "Software Engineer Intern",
    location: "Frisco, TX",
    duration: "January 2024 - May 2024",
    logo: "/higheru.jpg",
    details: "developed...",
  },
  {
    company: "Georgia Institute of Technology Office of Information Technology",
    role: "Software Engineer Intern",
    location: "Atlanta, GA",
    duration: "August 2024 - Present",
    logo: "/gtoit.jpg",
    details: "...",
  },
];

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section
      id="experience"
      className="h-screen flex flex-col justify-center items-center bg-white text-black snap-center"
    >
    <div className="max-w-4xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-black-600">Experience</h2>
      <div className="mt-10 border-l-4 border-navy-400 pl-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-6 p-5 bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg transition-all"
            onClick={() => setSelectedExperience(exp)}
          >
            <div className="flex items-center space-x-4">
              <img src={exp.logo} alt={exp.company} className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 창 */}
      <Dialog open={!!selectedExperience} onClose={() => setSelectedExperience(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white rounded-lg p-6 max-w-lg">
          <Dialog.Title className="text-2xl font-bold">{selectedExperience?.company}</Dialog.Title>
          <p className="text-lg text-gray-700">{selectedExperience?.role}</p>
          <p className="text-sm text-gray-500">{selectedExperience?.location} | {selectedExperience?.duration}</p>
          <p className="mt-4 text-gray-600">{selectedExperience?.details}</p>
          <button onClick={() => setSelectedExperience(null)} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md">Close</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  </section>
  );
}
