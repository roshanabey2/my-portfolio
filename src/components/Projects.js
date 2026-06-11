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
      <div className={`projects-grid ${mode}`}>
        {PROJECTS.map((proj, index) => (
          <ProjectCard
            key={proj.title}
            project={proj}
            mode={mode}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

function ProjectCard({ project, mode, index }) {
  const [emblaRef] = useEmblaCarousel();
  const images = Object.entries(project.images);
  const slides = images.length > 0 ? images : [["cover", null]];
  const resolvedSlides = slides.map(([key, src]) => [
    key,
    key === "cover" && (src === null || src === undefined)
      ? DEFAULT_COVERS[mode] || DEFAULT_COVERS.showcase
      : src,
  ]);

  if (mode === "showcase") {
    return (
      <article className="project-console">
        <div className="project-console-bar">
          <span>{project.status}</span>
          <span>{project.tech}</span>
        </div>

        <div className="project-console-body">
          <div className="project-preview-stack">
            {resolvedSlides.slice(0, 3).map(([key, src], index) => (
              <Image
                key={key}
                src={src}
                alt={`${project.title}: ${key}`}
                width={420}
                height={300}
                style={{ "--stack-index": index }}
              />
            ))}
          </div>

          <div className="project-console-copy">
            <p className="project-command">~/projects/{project.title.toLowerCase().replaceAll(" ", "-")}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="links showcase"
              target="_blank"
              rel="noopener noreferrer"
            >
               View on GitHub
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div
      className={`card ${mode}`}
      data-index={String(index + 1).padStart(2, "0")}
      style={
        mode === "minimal"
          ? {
              "--item-column": (index % 2) + 1,
              "--item-row": index + 1,
            }
          : undefined
      }
    >
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {resolvedSlides.map(([key, src]) => {
            return (
              <div className="embla__slide" key={key}>
                <Image
                  src={src}
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
