import ProjectCard from "../components/ProjectCard";
import bankImg from "../assets/images/bank-management.png";
import portfolioImg from "../assets/images/portfolio-website.png";
import studentImg from "../assets/images/student-management.png";

const projects = [
  {
    title: "Task Management System",
    image: "/images/taskmanager.png",
    description:
      "Developed a full-stack Task Management System with authentication, task creation, priority management, status tracking, and responsive dashboard UI using modern MERN stack technologies.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "CSS"
    ],

    github: "https://github.com/yourusername/task-management-system",
    live: "https://your-live-demo-link.com"
  },

  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description:
      "Designed and developed a modern responsive portfolio website with smooth animations, reusable React components, backend-integrated contact form, and professional UI design.",

    tech: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express"
    ],

    github: "https://github.com/yourusername/portfolio",
    live: "https://your-live-demo-link.com"
  },

  {
    title: "Student Management System",
    image: "/images/student.png",
    description:
      "Built a CRUD-based Student Management System for managing student records including adding, updating, deleting, and searching data with API integration.",

    tech: [
      "React",
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API"
    ],

    github: "https://github.com/yourusername/student-management",
    live: "https://your-live-demo-link.com"
  },

  {
    title: "Expense Tracker Application",
    image: "/images/expense.png",
    description:
      "Created an Expense Tracker application with transaction history, category management, analytics dashboard, and graphical expense visualization for personal finance tracking.",

    tech: [
      "React",
      "Chart.js",
      "Node.js",
      "MongoDB",
      "CSS"
    ],

    github: "https://github.com/yourusername/expense-tracker",
    live: "https://your-live-demo-link.com"
  },

  {
    title: "To-Do List Application",
    image: "/images/todo.png",
    description:
      "Developed a responsive To-Do List application with task filtering, completion tracking, local storage persistence, and clean modern user interface design.",

    tech: [
      "React",
      "JavaScript",
      "CSS",
      "Local Storage"
    ],

    github: "https://github.com/yourusername/todo-app",
    live: "https://your-live-demo-link.com"
  },

  {
    title: "IoT & AI-Based Predictive Agriculture Pump System",
    image: "/images/agriculture-pump.png",
    description:
      "Developed an intelligent agriculture monitoring and predictive pump control system using IoT sensors and AI-based analysis to optimize water usage, monitor soil conditions, and automate irrigation efficiently.",

    tech: [
      "ESP32",
      "IoT",
      "AI",
      "Sensors",
      "Embedded Systems",
      "Arduino IDE"
    ],

    github: "https://github.com/yourusername/agriculture-pump-system"
  }
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