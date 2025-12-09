// src/components/Navbar.jsx
const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">Aryan.dev</span>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="nav-link"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
