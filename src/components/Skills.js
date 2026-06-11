import { useMode } from "@/context/ModeContext";
import "./projects.css";

const skills = [
  { name: "JavaScript", icon: "", group: "Frontend" },
  { name: "React", icon: "", group: "Frontend" },
  { name: "Ruby on Rails", icon: "󰫏", group: "Backend" },
  { name: "PostgreSQL", icon: "", group: "Backend" },
  { name: "C", icon: "", group: "Systems" },
  { name: "Git", icon: "", group: "Tools" },
  { name: "Neovim", icon: "", group: "Tools" },
  { name: "Linux", icon: "", group: "Systems" },
  { name: "Python", icon: "", group: "Backend" },
  { name: "Docker", icon: "", group: "Tools" },
  { name: "Heroku", icon: "", group: "Deployment" },
];

const Skills = () => {
  const { mode } = useMode();
  const groupedSkills = skills.reduce((groups, skill) => {
    groups[skill.group] = [...(groups[skill.group] || []), skill];
    return groups;
  }, {});

  return (
    <section className={`skills-section ${mode}`}>
      <h2
        className={`component_name text-4xl font-bold mb-4 text-center ${mode}`}
      >
        Skills
      </h2>

      {mode === "minimal" ? (
        <div className="minimal-skill-index">
          {Object.entries(groupedSkills).map(([group, groupSkills], index) => (
            <section key={group} className="minimal-skill-row">
              <span className="minimal-skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{group}</h3>
              <div className="minimal-skill-list">
                {groupSkills.map((skill) => (
                  <span key={skill.name} className="minimal-skill-pill">
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden w-full relative">
          <div className="animate-scroll whitespace-nowrap flex gap-6">
            {skills.map((skill) => (
              <span key={skill.name} className={`skilltag ${mode}`}>
                {skill.icon} {skill.name}
              </span>
            ))}
            {skills.map((skill) => (
              <span key={`duplicate-${skill.name}`} className={`skilltag ${mode}`}>
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
