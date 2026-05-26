import heroImg from "../assets/images/LokeshManickam.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section id="home" className="hero-section">

      {/* TEXT */}
      <h1 className="hero-title">
  <Typewriter
    words={["Hi, I'm Lokesh Manickam"]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={120}
    deleteSpeed={70}
    delaySpeed={3000}
  />
</h1>

      {/* IMAGE */}
      <img src={heroImg} alt="Lokesh" className="hero-img" />

      {/* BUTTONS */}
      <div className="hero-buttons">
        <a
          href="https://wa.me/919597468580?text=Hello%20Lokesh,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn"
        >
          Contact
        </a>

        <a href="#about" className="secondary-btn">
          Who I Am
        </a>
      </div>

    </section>
  );
};

export default Home;