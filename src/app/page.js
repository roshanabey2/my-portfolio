'use client'
import { useMode } from "@/context/ModeContext";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import SplashPage from "@/components/SplahPage";



export default function Home() {
  const { mode } = useMode();

  if (!mode) {
    return <SplashPage />;
  }

  return (

    <div >
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
