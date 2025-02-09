"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/"); // 3초 후 메인 페이지로 이동
    }, 3000);
  }, [router]);

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <motion.div
        className="text-9xl font-bold text-white"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 3, ease: "linear" }}
      >
        S
      </motion.div>
    </div>
  );
}
