import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <div className="logo">Lokesh Manickam</div>

        <nav className="nav-links">
          <a href="#home" className={active === "home" ? "active" : ""}>Home</a>
          <a href="#about" className={active === "about" ? "active" : ""}>About</a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
          <a href="#services" className={active === "services" ? "active" : ""}>Services</a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
        </nav>

        <div className="nav-social">
          <a href="https://github.com/LokeshManickam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;