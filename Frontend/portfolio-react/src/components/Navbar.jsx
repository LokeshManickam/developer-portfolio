import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          Lokesh Manickam
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#services"
            className={active === "services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

        </nav>

        {/* SOCIAL ICONS */}
        <div className="nav-social">

          <a
            href="https://github.com/LokeshManickam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/lokeshmanickam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/itz_manickam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

      </div>

    </header>
  );
};

export default Navbar;