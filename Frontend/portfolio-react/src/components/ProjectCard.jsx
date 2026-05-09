const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <div className="project-card">

      {/* IMAGE */}
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      {/* CONTENT */}
      <div className="project-content">
        <h3 className="project-name">{title}</h3>

        <p className="project-description">{description}</p>

        {/* TECH */}
        <div className="project-skill">
          {tech.map((item, index) => (
            <span className="skill-tag" key={index}>
              {item}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="project-buttons">
          <a className="project-btn-outline" href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="project-btn" href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;