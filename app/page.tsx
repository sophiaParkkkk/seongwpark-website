"use client";
import ProjectSection from "@/components/PojectSection";
import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function FullPageScroll() {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      
      {/* 1️⃣ 히어로(홈) 섹션 */}
      <section id="home" className="relative h-screen flex flex-col justify-center items-center text-white snap-center">
        
        {/* 배경 이미지 */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg.jpg" // 배경 이미지 경로
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
        </div>

        {/* 메인 텍스트 */}
        <div className="text-center">
          <motion.h2
            className="text-6xl font-bold tracking-wide leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Seong Won Park <br />
          </motion.h2>
          <p className="mt-4 text-lg text-white-300">Innovative Software Developer</p>
          
          {/* CTA 버튼 */}
          <Link href="#aboutme">
            <button className="mt-6 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all">
              LEARN MORE
            </button>
          </Link>
        </div>
      </section>

      {/* 2️⃣ About Me 섹션 */}
      <section id="aboutme" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white snap-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-2 text-lg text-gray-400 text-center max-w-2xl">
          I'm passionate about software engineering, AI, and building innovative web experiences.
        </p>
      </section>

      {/* 3️⃣ 경험(Experience) 섹션 */}
      <section id="experience" className="h-screen flex flex-col justify-center items-center bg-gray-700 text-white snap-center">
        <h1 className="text-4xl font-bold">Experience</h1>
        <ul className="mt-4 space-y-4">
          <li className="text-lg">💼 HigherU - Software Engineer Intern</li>
          <li className="text-lg">💼 Samsung Semiconductor - DevOps Intern</li>
        </ul>
      </section>

     {/* 4️⃣ 프로젝트(Project) 섹션 (컴포넌트 사용) */}
      <ProjectSection />

      {/* 5️⃣ 컨택(Contact) 섹션 */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center bg-gray-600 text-white snap-center">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-2">📩 Email: seongwon1105@gmail.com</p>
        <p>📱 LinkedIn: <a href="https://linkedin.com/in/seongwonpark" className="underline">seongwonpark</a></p>
      </section>

    </div>
  );
}
