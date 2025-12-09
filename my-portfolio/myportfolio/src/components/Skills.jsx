// src/components/Skills.jsx
import { useState } from "react";

const skillCards = [
  {
    id: "backend",
    title: "Backend & APIs",
    headline: "I can design and implement clean backend APIs.",
    skills: ["FastAPI", "Node.js (learning)", "REST APIs", "Auth (basic)"],
    level: "Strong foundation, still sharpening",
    whatIHireYouFor: "Building small to mid-sized APIs, integrating with frontends, debugging backend issues."
  },
  {
    id: "frontend",
    title: "Frontend & React",
    headline: "I build responsive UIs that don’t look like default templates.",
    skills: ["React", "Component-based architecture", "State management (basic)", "HTML5 & CSS3"],
    level: "Comfortable, improving UI polish",
    whatIHireYouFor: "Implementing designs, building dashboards, hooking React UI to APIs."
  },
  {
    id: "ml",
    title: "Machine Learning Interest",
    headline: "Not an ML engineer yet, but I understand the basics.",
    skills: ["Supervised vs unsupervised", "Overfitting / generalization", "Feature engineering (intro level)"],
    level: "Academic + prototype level",
    whatIHireYouFor: "Simple prototypes, experiments, and collaborating with ML folks."
  },
  {
    id: "collab",
    title: "Teamwork & Git",
    headline: "I’ve actually worked in a team, not just solo toy projects.",
    skills: ["Git & GitHub", "Pull requests", "Code reviews (basic)", "Society trainee project experience"],
    level: "Comfortable in real workflows",
    whatIHireYouFor: "Joining an existing codebase, following processes, not breaking prod (hopefully)."
  },
];

function Skills() {
  const [activeCard, setActiveCard] = useState(skillCards[0].id);

  return (
    <section className="section skills-section">
      <h2 className="section-title">Skills</h2>
      <p className="section-text">
        I focus on being <strong>useful on day one</strong> in a team: shipping
        backend features, wiring up React UIs, and learning fast where I’m weak.
      </p>

      <div className="skills-grid-cards">
        {skillCards.map((card) => {
          const isActive = card.id === activeCard;

          return (
            <article
              key={card.id}
              className={`skill-card ${isActive ? "skill-card-active" : ""}`}
              onMouseEnter={() => setActiveCard(card.id)}
            >
              <header className="skill-card-header">
                <h3 className="skill-card-title">{card.title}</h3>
                <span className="skill-card-pill">
                  {isActive ? "Focused" : "Hover to focus"}
                </span>
              </header>

              <p className="skill-card-headline">{card.headline}</p>

              <ul className="skill-card-list">
                {card.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <div className="skill-card-footer">
                <p className="skill-card-level">
                  <span className="muted-label">Current level</span>
                  <br />
                  {card.level}
                </p>
                <p className="skill-card-hire">
                  <span className="muted-label">You can hire me for</span>
                  <br />
                  {card.whatIHireYouFor}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
