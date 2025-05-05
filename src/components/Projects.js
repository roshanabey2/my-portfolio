import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image' // Assuming you're using next/image
import { useMode } from '@/context/ModeContext'; // Adjust as needed
import { PROJECTS } from '@/constants/projects'; // Adjust as needed

const Projects = () => {
  const { mode } = useMode();
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className={`p-6 ${mode}`}>
      <h2 className={`text-4xl font-bold mb-4 text-center component_name ${mode}`}>
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((proj) => (
          <div key={proj.title} className="bg-[#545c7e] flex flex-col p-4 rounded-lg shadow z-999 opacity-75">
            <h3 className="text-[#bb9af7] text-xl font-bold mb-3">{proj.title}</h3>

            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {Object.entries(proj.images).map(([key, src]) => (
                  <div className="embla_slide" key={key}>
                    <Image
                      src={src}
                      alt={`Project image: ${key}`}
                      width={800}
                      height={600}
                      className='rounded-lg opacity-90'
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className={`info_text mt-3 ${mode}`}>{proj.description}</p>
            <a
              href={proj.link}
              className="text-[#7dcfff] hover:text-[#ff007c] mt-auto inline-block"
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

