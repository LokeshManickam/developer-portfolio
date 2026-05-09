import ServiceCard from "../components/ServiceCard";

const services = [
  {
    icon: "fa-solid fa-code",
    title: "Web Development",
    description:
      "I develop modern and responsive websites using HTML, CSS and JavaScript.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Development",
    description:
      "I build secure backend systems using Java and APIs with database integration.",
  },
  {
    icon: "fa-solid fa-microchip",
    title: "IoT & Embedded Systems",
    description:
      "I create smart systems using sensors and microcontrollers.",
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