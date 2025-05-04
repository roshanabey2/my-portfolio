'use client'
import { useMode } from "@/context/ModeContext";
import { useRouter } from 'next/navigation';
import { useEffect } from "react"
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";



export default function Home() {
  const { mode, isLoading } = useMode();
  const router = useRouter();

  useEffect(() => {
    if (isLoading || !mode) {
      router.push('/splash'); // ⬅️ Redirect to /splash route
    }
  }, [isLoading, mode, router]);

  // Optional: return null while redirecting to avoid flicker
  if (isLoading || !mode) return null;


  return (

    <div >
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
