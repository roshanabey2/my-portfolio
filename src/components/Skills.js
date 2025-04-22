const skills = [" JavaScript", " React", "󰫏 Ruby on Rails", " PostgreSQL", " C", " Git", " Neovim", " Linux", " Python", " Docker", " Heroku"];

const Skills = () => (
  <section className="p-6">
    <h2 className="component_name text-4xl font-bold mb-4 text-center">Skills</h2>
    <ul className="flex flex-wrap justify-center gap-4 text-[#7dcfff] text-base">
      {skills.map((skill) => (
        <li key={skill} className="bg-[#545c7e] hover:bg-[#9d7cd8] hover:text-[#ff007c] px-4 py-2 rounded">{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;

