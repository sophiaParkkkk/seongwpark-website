"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import rawProjectData from "@/data/projects.json";
export const runtime = "edge";

// 타입: JSON 구조를 명확히
type Project = {
  title: string;
  description: string;
  image: string;
  details?: string;
  link?: string;
};
type ProjectMap = Record<string, Project>;
const projectData = rawProjectData as ProjectMap;

export default function ProjectPage() {
  const params = useParams<{ project?: string | string[] }>();
  const [projectKey, setProjectKey] = useState<string | null>(null);

  useEffect(() => {
    if (!params?.project) return;
    const key = Array.isArray(params.project) ? params.project[0] : params.project;
    if (key && projectData[key]) setProjectKey(key);
    else setProjectKey(null);
  }, [params]);

  if (!projectKey) {
    return <div className="text-center text-2xl p-10">Project not found</div>;
  }

  const { title, description, image, details, link } = projectData[projectKey];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">{title}</h1>
          <Link href="/projects" className="text-sm underline underline-offset-4">
            ← All Projects
          </Link>
        </div>

        {/* 이미지 */}
        <div className="mt-6 overflow-hidden rounded-xl shadow">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* 설명 */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-lg text-gray-700">{description}</p>
        </section>

        {/* 디테일: 있으면 렌더 */}
        {details && (
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Details</h2>
            <p className="mt-2 whitespace-pre-line text-gray-800">{details}</p>
          </section>
        )}

        {/* 외부 링크: 있으면 버튼 노출 */}
        {link && (
          <div className="mt-8">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-medium shadow ring-1 ring-gray-200 hover:shadow-md"
            >
              Visit Project ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
