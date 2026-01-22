import { useMode } from "@/context/ModeContext";
import "./projects.css";

const skills = [
  " JavaScript",
  " React",
  "󰫏 Ruby on Rails",
  " PostgreSQL",
  " C",
  " Git",
  " Neovim",
  " Linux",
  " Python",
  " Docker",
  " Heroku",
];

const Skills = () => {
  const { mode } = useMode();
  return (
    <section className="p-6">
      <h2
        className={`component_name text-4xl font-bold mb-4 text-center ${mode}`}
      >
        Skills
      </h2>
      <div className="overflow-hidden w-full relative">
        <div className="animate-scroll whitespace-nowrap flex gap-6">
          {skills.map((skill, index) => (
            <span key={index} className={`skilltag ${mode}`}>
              {skill}
            </span>
          ))}
          {/* duplicate to create seamless loop */}
          {skills.map((skill, index) => (
            <span key={`duplicate-${index}`} className={`skilltag ${mode}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
