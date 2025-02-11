"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

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
  {
    title: "ocal business coupon & deals platform",
    description: "A web app that provides exclusive coupons and deals for local businesses",
    image: "/images/resume-analyzer.jpg",
    link: "/projects/fourth",
  },
  {
    title: "My Fifth Project",
    description: "Description for the fifth project.",
    image: "/images/resume-analyzer.jpg",
    link: "/projects/fifth",
  },
];

export default function ProjectSection() {
  // 스크롤 컨테이너를 제어하기 위한 Ref
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 왼쪽으로 스크롤
  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -300, // 원하는 픽셀만큼 이동
      behavior: "smooth",
    });
  };

  // 오른쪽으로 스크롤
  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 300, // 원하는 픽셀만큼 이동
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="h-screen flex flex-col justify-center items-center bg-[#F9F7F1] snap-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h2>

      {/* 슬라이드 전체 컨테이너 (상대 위치로 화살표 버튼 배치) */}
      <div className="relative w-full max-w-6xl px-6">

        {/* 왼쪽 화살표 버튼 */}
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          ←
        </button>

        {/* 실제 카드들이 들어가는 스크롤 영역 */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto flex gap-6 scrollbar-hide scroll-smooth"
        >
          {/* 카드들 (가로 일렬) */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-lg shadow-lg p-6 flex-shrink-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link
                href={project.link}
                className="mt-4 px-6 py-2 inline-block border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* 오른쪽 화살표 버튼 */}
        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
