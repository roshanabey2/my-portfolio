const skills = ["JavaScript", "React", "Ruby on Rails", "PostgreSQL", "C", "Git", "Neovim", "Linux"];

const Skills = () => (
  <section className="p-6">
    <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
    <ul className="flex flex-wrap justify-center gap-4 text-gray-300">
      {skills.map((skill) => (
        <li key={skill} className="bg-gray-800 px-4 py-2 rounded">{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;

