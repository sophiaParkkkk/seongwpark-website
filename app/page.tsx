"use client";
import ProjectSection from "@/components/PojectSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ExperienceSection from "@/components/ExperienceSection";

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
      <section id="aboutme" className="h-screen flex justify-center items-center bg-[#f4f1ee] text-black snap-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 p-10">
    
    {/* 왼쪽 - 텍스트 소개 */}
    <div className="flex-1 text-left">
      <h1 className="text-5xl font-bold tracking-wide">ABOUT ME</h1>
      <p className="text-gray-600 italic mt-1 text-lg">Seong Won Park</p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        I&apos;m a <span className="font-semibold">senior Computer Science student at Georgia Institute of Technology</span>, passionate about 
        <span className="font-semibold"> software engineering</span>. I love crafting efficient 
        and scalable solutions that enhance user experience and system performance.
      </p>

      {/* 강조 태그 버튼 */}
      <div className="mt-6 flex gap-3 flex-wrap">
        <span className="px-4 py-2 border border-black text-black rounded-full text-sm font-semibold bg-transparent">SOFTWARE ENGINEER</span>
        <span className="px-4 py-2 border border-black text-black rounded-full text-sm font-semibold bg-transparent">FULL-STACK DEVELOPER</span>
        <span className="px-4 py-2 border border-black text-black rounded-full text-sm font-semibold bg-transparent">TECH ENTHUSIAST</span>
      </div>
    </div>

    {/* 오른쪽 - 프로필 이미지 */}
    <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/profile.png" // 프로필 이미지 경로
        alt="Seong Won Park"
        layout="fill"
        objectFit="cover"
      />
    </div>

  </div>
</section>


      {/* 3️⃣ 경험(Experience) 섹션 */}
      <ExperienceSection />

     {/* 4️⃣ 프로젝트(Project) 섹션 (컴포넌트 사용) */}
      <ProjectSection />

      {/* 5️⃣ 컨택(Contact) 섹션 */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center bg-[#f4f1ee] text-blck snap-center">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-2">📩 Email: seongwon1105@gmail.com</p>
        <p>📱 LinkedIn: <a href="https://linkedin.com/in/seongwonpark" className="underline">seongwonpark</a></p>
      </section>

    </div>
  );
}
