"use client"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Baskervville } from "next/font/google";
import ProjectSection from "@/components/PojectSection";

// Google Fonts에서 Baskervville SC 로드
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"], // 사용할 폰트 두께
  variable: "--font-baskervville", // Tailwind에서 사용할 변수명
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/landing"); // 처음 방문 시 자동 이동
  }, [router]);

  return (
    <html lang="en" className={baskervville.variable}> {/* ✅ 폰트 변수 적용 */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}