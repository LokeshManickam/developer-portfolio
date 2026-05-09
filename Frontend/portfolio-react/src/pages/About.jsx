import aboutImg from "../assets/images/lokeshmanickam.jpg";

const About = () => {
  return (
    <section id="about" className="about-section reveal">

      <div className="container">

        <h1 className="section-title">About Me</h1>
        <div className="section-line"></div>

        <div className="about-content">

          <div className="about-image">
            <img src={aboutImg} alt="Lokesh Manickam" />
          </div>

          <div className="about-text">
            <p>
              I’m Lokesh Manickam, a passionate software developer currently
              focused on building modern web applications using React.js,
              JavaScript, HTML, and CSS. I enjoy creating responsive and
              interactive user interfaces with clean design and smooth user
              experience.
            </p>

            <p>
              Along with frontend development, I also work with Java,
              Object-Oriented Programming, Data Structures, and backend concepts
              to strengthen my full stack development skills. I love learning new
              technologies and improving my development workflow through real-world
              projects.
            </p>

            <p>
              Being an Electrical and Electronics Engineering student, I also have
              interest in IoT and embedded systems. My goal is to grow as a React
              and full stack developer, build impactful applications, and
              contribute to innovative software solutions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;