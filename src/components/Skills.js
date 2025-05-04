import { useMode } from "@/context/ModeContext";

const skills = [" JavaScript", " React", "󰫏 Ruby on Rails", " PostgreSQL", " C", " Git", " Neovim", " Linux", " Python", " Docker", " Heroku"];

const Skills = () => {
  const { mode } = useMode();
  return (
    <section className="p-6">
      <h2 className={`component_name text-4xl font-bold mb-4 text-center ${mode}`}>Skills</h2>
      <div className="overflow-hidden w-full relative">
  <div className="animate-scroll whitespace-nowrap flex gap-6">
    {skills.map((skill, index) => (
      <span
        key={index}
        className="inline-block bg-[#545c7e] hover:bg-[#9d7cd8] hover:text-[#ff007c] px-4 py-2 rounded"
      >
        {skill}
      </span>
    ))}
    {/* duplicate to create seamless loop */}
    {skills.map((skill, index) => (
      <span
        key={`duplicate-${index}`}
        className="inline-block bg-[#545c7e] hover:bg-[#9d7cd8] hover:text-[#ff007c] px-4 py-2 rounded"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
    </section>
  );
}

export default Skills;
