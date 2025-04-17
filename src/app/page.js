import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projectscts";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
