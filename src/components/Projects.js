const projects = [
  {
    title: "Dialectic Journal",
    description: "An AI-assisted note-taking tool built with Rails and PostgreSQL.",
    link: "https://github.com/yourusername/dialectic-journal"
  },
  {
    title: "Elements of Eloquence",
    description: "A React Native app for improving prose and writing clarity.",
    link: "https://github.com/yourusername/elements-of-eloquence"
  }
];

const Projects = () => (
  <section className="p-6">
    <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((proj) => (
        <div key={proj.title} className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-gray-400">{proj.description}</p>
          <a href={proj.link} className="text-blue-400 hover:underline mt-2 inline-block">View on GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

