import { useParams } from "next/navigation";
import projectData from "@/data/projects.json"; // ✅ JSON 파일 불러오기

export default function ProjectPage() {
  const { project } = useParams();

  // 🔥 TypeScript가 `project`가 string 타입임을 확신하도록 변환
  const projectKey = Array.isArray(project) ? project[0] : project; // ✅ string으로 변환

  if (!projectKey || !projectData[projectKey as keyof typeof projectData]) {
    return <div className="text-center text-2xl p-10">Project not found</div>;
  }

  const { title, description, image } = projectData[projectKey as keyof typeof projectData];

  return (
    <div className="flex flex-col items-center bg-white py-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <img src={image} alt={title} className="w-96 h-auto rounded-md mt-6" />
      <p className="max-w-2xl text-lg text-gray-700 mt-4">{description}</p>
    </div>
  );
}
