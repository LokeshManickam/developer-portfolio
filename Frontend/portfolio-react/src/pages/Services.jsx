import ServiceCard from "../components/ServiceCard";

const services = [
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    description:
      "I build modern, responsive, and interactive web applications using React.js, JavaScript, HTML, CSS, and reusable UI components with clean user experience design.",
  },

  {
    icon: "fa-solid fa-server",
    title: "Full Stack Development",
    description:
      "I develop full stack applications using React, Node.js, Express.js, REST APIs, MongoDB, and Java to create scalable and efficient web solutions.",
  },

  {
    icon: "fa-solid fa-microchip",
    title: "IoT & Smart Systems",
    description:
      "I work on IoT and embedded projects using ESP32, sensors, automation, and AI-based monitoring systems for smart real-world applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section reveal">

      <div className="container">

        <h2 className="section-title">Services</h2>
        <div className="section-line"></div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Services;