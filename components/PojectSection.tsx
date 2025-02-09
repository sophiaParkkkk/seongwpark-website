"use client";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "CS Thread Recommendation Website",
    description: "A platform to share and discover new recipes.",
    image: "/images/recipe-app.jpg",
    link: "/projects/recipe",
  },
  {
    title: "Calorie & Recipe Tracker App",
    description: "An AI-driven tool to analyze and optimize resumes.",
    image: "/images/resume-analyzer.jpg",
    link: "/projects/resume-analyzer",
  },
  {
    title: "Buzzbot",
    description: "An AI-driven tool to analyze and optimize resumes.",
    image: "/images/resume-analyzer.jpg",
    link: "/projects/resume-analyzer",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="h-screen flex flex-col justify-center items-center bg-[#F9F7F1] snap-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h2>

      {/* 프로젝트 카드 컨테이너 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-80 flex flex-col items-center">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{project.description}</p>
            <Link
              href={project.link}
              className="mt-4 px-6 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
