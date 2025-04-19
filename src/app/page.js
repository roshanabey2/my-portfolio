import Image from "next/image";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
