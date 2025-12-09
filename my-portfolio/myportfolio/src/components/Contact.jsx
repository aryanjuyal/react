// src/components/Contact.jsx
function Contact() {
  return (
    <div className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        Want to discuss a project, collaboration, or opportunities?
      </p>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:your_email_here@example.com">
            your_email_here@example.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
          >
            github.com/your-github-username
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/your-linkedin-username
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
