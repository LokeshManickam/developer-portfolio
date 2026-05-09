import ProjectCard from "../components/ProjectCard";
import bankImg from "../assets/images/bank-management.png";
import portfolioImg from "../assets/images/portfolio-website.png";
import studentImg from "../assets/images/student-management.png";

const projects = [
  {
    title: "Bank Management System",
    description:
      "Developed a console-based Bank Management System using Java and OOP concepts.",
    tech: ["Java", "OOP", "File Handling"],
    github: "#",
    demo: "#",
    image: bankImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Designed a responsive personal portfolio website with modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    image: portfolioImg,
  },
  {
    title: "Student Management System",
    description:
      "Built a Java-based system to manage student records efficiently.",
    tech: ["Java", "OOP", "Data Management"],
    github: "#",
    demo: "#",
    image: studentImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section reveal">

      <div className="container">

        <h2 className="section-title">Featured Projects</h2>
        <div className="section-line"></div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Projects;