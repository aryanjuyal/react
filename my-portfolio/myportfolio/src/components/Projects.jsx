// src/components/Projects.jsx
const projects = [
  {
    name: "College Community App (Trainee Project)",
    period: "Tech Society · Trainee project",
    stack: ["React", "REST API", "Machine Learning (prototype)"],
    description:
      "Collaborated in a trainee team to design a community app for college students. Worked on features like post feed and basic ML-based recommendation prototype for content.",
    highlights: [
      "Implemented parts of the feed and data models",
      "Experimented with ML ideas on user interaction data",
      "Practiced Git workflow and code reviews in a team setup",
    ],
    link: null, // put GitHub / demo link here if real later
  },
  {
    name: "Social Feed + Chatbot Web App",
    period: "Personal Project",
    stack: ["React", "API integration"],
    description:
      "Built a simple social feed UI with posts listing and an integrated chatbot panel powered by a backend API.",
    highlights: [
      "Built reusable React components for posts, loading, and error states",
      "Handled API calls and displayed loading/error feedback cleanly",
      "Integrated a chatbot component consuming a backend endpoint",
    ],
    link: null,
  },
  {
    name: "Node.js API Project (In Progress)",
    period: "Learning Project",
    stack: ["Node.js", "Express", "REST"],
    description:
      "Building a Node.js backend project to deepen understanding of APIs, routing, and middleware. Currently under active development.",
    highlights: [
      "Designing the API structure and routes",
      "Focusing on clean folder structure and modular code",
      "Planning authentication and database integration next",
    ],
    link: null,
  },
];

function Projects() {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <header className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-period">{project.period}</p>
            </header>
            <p className="project-description">{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="project-footer">
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
