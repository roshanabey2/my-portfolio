import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; // Assuming you're using next/image
import { useMode } from "@/context/ModeContext"; // Adjust as needed
import { PROJECTS } from "@/constants/projects";
import { DEFAULT_COVERS } from "@/constants/defaultCovers.js"; // Adjust as needed
import "./projects.css";

const Projects = () => {
  const { mode } = useMode();

  return (
    <section className={`p-6 ${mode}`}>
      <h2
        className={`text-4xl font-bold mb-4 text-center component_name ${mode}`}
      >
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.title} project={proj} mode={mode} />
        ))}
      </div>
    </section>
  );
};

function ProjectCard({ project, mode }) {
  const [emblaRef] = useEmblaCarousel();
  const images = Object.entries(project.images);
  const slides = images.length > 0 ? images : [["cover", null]];

  return (
    <div className={`card ${mode}`}>
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(([key, src]) => {
            const resolvedSrc =
              key === "cover" && (src === null || src === undefined)
                ? DEFAULT_COVERS[mode] || DEFAULT_COVERS.showcase
                : src;
            return (
              <div className="embla__slide" key={key}>
                <Image
                  src={resolvedSrc}
                  alt={`${project.title}: ${key}`}
                  width={800}
                  height={600}
                  className="rounded-lg opacity-90"
                />
              </div>
            );
          })}
        </div>
      </div>

      <p className={`info_text mt-3 ${mode}`}>{project.description}</p>
      <a
        href={project.link}
        className={`links ${mode} mt-auto inline-block`}
        target="_blank"
        rel="noopener noreferrer"
      >
         View on GitHub
      </a>
    </div>
  );
}

export default Projects;
