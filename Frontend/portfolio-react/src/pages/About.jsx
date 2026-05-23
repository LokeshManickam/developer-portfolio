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
              I’m Lokesh Manickam, a passionate Full Stack and React Developer focused on
              building modern, responsive, and user-friendly web applications. I enjoy
              creating clean UI designs, smooth user experiences, and scalable
              applications using modern technologies.
            </p>

            <p>
              My primary skills include React.js, JavaScript, HTML, CSS, Node.js,
              Express.js, MongoDB, Java, and REST API integration. I have developed
              real-world projects such as Task Management Systems, Expense Tracker
              Applications, Student Management Systems, and responsive portfolio websites
              using MERN stack technologies.
            </p>

            <p>
              Along with software development, I also explore IoT and embedded systems as
              an Electrical and Electronics Engineering student. I enjoy combining
              hardware and software to build smart solutions and continuously improving my
              skills in full stack development and modern UI/UX design.
            </p>

            <p>
              My goal is to grow as a professional software engineer, contribute to
              impactful projects, and build innovative applications that deliver great
              user experiences.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;