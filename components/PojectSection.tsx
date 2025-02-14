"use client";
import Link from "next/link";
import Image from "next/image";
import projectData from "@/data/projects.json"; // 🔥 JSON 데이터 불러오기
import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export default function ProjectSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 좌우 스크롤 함수
  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section id="projects" className="h-screen flex flex-col justify-center items-center bg-[#F9F7F1] snap-center overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h2>

      <div className="relative w-full max-w-7xl px-8">
        {/* 왼쪽 화살표 버튼 */}
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition"
        >
          ←
        </button>

        {/* 프로젝트 카드들 */}
        <div ref={scrollContainerRef} className="overflow-x-auto flex gap-8 scrollbar-hide scroll-smooth">
          {Object.entries(projectData).map(([key, projectData]) => {
            const project = projectData as Project;

            return (
              <div key={key} className="w-[350px] h-[450px] bg-white rounded-xl shadow-xl p-6 flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={320}
                  height={200}
                  className="w-full h-[200px] rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                
                {/* 🔥 자동 줄바꿈 허용 + 설명 칸 크기 자동 조절 */}
                <p className="text-gray-600 mt-2 whitespace-normal break-words overflow-hidden">
                  {project.description}
                </p>

                {/* "Read More" 버튼 */}
                <Link href={project.link ?? `/projects/${key}`} target={project.link ? "_blank" : "_self"}>
                  <button className="mt-5 px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition">
                    Read More →
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* 오른쪽 화살표 버튼 */}
        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
