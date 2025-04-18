const projects = [
  {
    title: "Quest Odyssey",
    description: "A TTRPG Scheduling Application that allows users to create, join, organise and track sessions of their own table-top campaigns with other players ",
    link: "https://github.com/RooOliver-Weaver/quest_odyssey",
    status: "complete"
  },
  {
    title: "Villanous Villas",
    description: "A themed rental platform that allows users to browse and book villain-inspired hideouts. A fanciful spin on your standard AirBnB clone.  Built with Ruby on Rails, JavaScript, and StimulusJS, it features dynamic property listings, a seamless booking system, and an intuitive UI for both guests and hosts.",
    link: "https://github.com/RooOliver-Weaver/quest_odyssey",
    status: "complete"
  },
  {
    title: "Dialectic Journal",
    description: "An AI-assisted note-taking tool built with Rails and PostgreSQL.",
    link: "https://github.com/roshanabey2/dialectic-journal"
  },
  {
    title: "Elements of Eloquence",
    description: "An AI-assisted tool used to gradually improve clarity of prose of the user.Built with Ruby on Rails backend and a react front end.",
    link: "https://github.com/roshanabey2/elements-of-eloquence"
  }
];

const Projects = () => (
  <section className="p-6">
    <h2 className="text-3xl font-bold mb-4 text-center component_name">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((proj) => (
        <div key={proj.title} className="bg-[#292e42] p-4 rounded-lg shadow">
          <h3 className="text-[#ff007c] text-xl font-semibold">{proj.title}</h3>
          <p className="text-[#41a6b5]">{proj.description}</p>
          <a href={proj.link} className="text-[#9d7cd8] hover:underline mt-2 inline-block">View on GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

