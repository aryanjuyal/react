// src/components/Hero.jsx
function Hero() {
  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-tag">Computer Science Undergrad · Backend & ML</p>
        <h1 className="hero-title">Hey, I'm Aryan Juyal.</h1>
        <p className="hero-subtitle">
          I build backend-heavy web apps using{" "}
          <strong>Python (FastAPI), Node.js, and React</strong>.  
          Interested in ML, clean APIs, and contributing to open source.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={handleViewProjects}>
            View Projects
          </button>
          <a
            className="btn ghost"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
