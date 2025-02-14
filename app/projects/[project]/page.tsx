"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import projectData from "@/data/projects.json"; // JSON 파일
import Image from "next/image";
export const runtime = 'edge';

// 🔥 JSON의 key (thread, calorie, buzzbot 등)를 추론
type ProjectKeys = keyof typeof projectData;

export default function ProjectPage() {
  const params = useParams();
  const [projectKey, setProjectKey] = useState<ProjectKeys | null>(null);

  useEffect(() => {
    if (params?.project) {
      const key = Array.isArray(params.project) ? params.project[0] : params.project;
      if (key in projectData) {
        setProjectKey(key as ProjectKeys);
      }
    }
  }, [params]);

  if (!projectKey || !projectData[projectKey]) {
    return <div className="text-center text-2xl p-10">Project not found</div>;
  }

  const { title, description, image } = projectData[projectKey];

  return (
    <div className="flex flex-col items-center bg-white py-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <Image src={image} alt={title} width={400} height={250} className="rounded-md mt-6" />
      <p className="max-w-2xl text-lg text-gray-700 mt-4">{description}</p>
    </div>
  );
}
