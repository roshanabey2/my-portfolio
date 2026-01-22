import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; // Assuming you're using next/image
import { useMode } from "@/context/ModeContext"; // Adjust as needed
import { PROJECTS } from "@/constants/projects";
import { DEFAULT_COVERS } from "@/constants/defaultCovers.js"; // Adjust as needed
import "./projects.css";

const Projects = () => {
  const { mode } = useMode();
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className={`p-6 ${mode}`}>
      <h2
        className={`text-4xl font-bold mb-4 text-center component_name ${mode}`}
      >
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((proj) => (
          <div key={proj.title} className={`card ${mode}`}>
            <h3 className="text-xl font-bold mb-3">{proj.title}</h3>

            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {Object.entries(proj.images).map(([key, src]) => {
                  const resolvedSrc =
                    key === "cover" && (src === null || src === undefined)
                      ? DEFAULT_COVERS[mode] || DEFAULT_COVERS.showcase
                      : src;
                  return (
                    <div className="embla_slide" key={key}>
                      <Image
                        src={resolvedSrc}
                        alt={`Project image: ${key}`}
                        width={800}
                        height={600}
                        className="rounded-lg opacity-90"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <p className={`info_text mt-3 ${mode}`}>{proj.description}</p>
            <a
              href={proj.link}
              className={`links ${mode} mt-auto inline-block`}
              target="_blank"
              rel="noopener noreferrer"
            >
               View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
