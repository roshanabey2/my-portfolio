import ImageGlow from 'react-image-glow';
import { useMode } from "@/context/ModeContext";
import {PROJECTS} from "@/constants/projects.js";

const Projects = () => {
  const { mode } = useMode();
  return (
    <section className={`p-6 ${mode}`}>
      < h2 className={`text-4xl font-bold mb-4 text-center component_name ${mode}`
      }> Projects</h2 >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((proj) => (
          <div key={proj.title} className="bg-[#545c7e] flex flex-col p-4 rounded-lg shadow z-999 opacity-75">
            <h3 className="text-[#bb9af7] text-xl font-bold">{proj.title}</h3>
            <ImageGlow
              radius={20}
              saturation={1.5}
              opacity={0.9}
              className="relative w-full h-full items-center overflow-hidden bg-[#24283b] rounded-3xl ">
              <img />
            </ImageGlow>
            <p className={`info_text ${mode}`}>{proj.description}</p>
            <a href={proj.link} className="text-[#7dcfff] hover:text-[#ff007c] mt-auto inline-block">  View on GitHub</a>
          </div>
        ))}
      </div>
    </section >
  );
}

export default Projects;

