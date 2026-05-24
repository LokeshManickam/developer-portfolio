import { useState } from "react";
import { sendContact } from "../services/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await sendContact(form);
      setStatus("Message sent successfully ✅");

      setForm({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section reveal">

  <div className="container">

    <h2 className="section-title">Contact Me</h2>
    <div className="section-line"></div>

    <div className="contact-content">

      {/* LEFT */}
      <div className="contact-info">

        <h3>Get in Touch</h3>

        <p className="contact-description">
          Feel free to reach out for collaborations,
          project discussions, or just a friendly chat.
        </p>

        <div className="contact-details">

          <p>
            <i className="fa-solid fa-envelope"></i>
            lokeshmanickam2005@gmail.com
          </p>

          <p>
            <i className="fa-solid fa-phone"></i>
            +91 9597468580
          </p>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            CHENNAI, INDIA
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder=" "
            required
            value={form.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        <div className="input-box">
          <input
            type="text"
            name="mobile"
            placeholder=" "
            required
            value={form.mobile}
            onChange={handleChange}
          />
          <label>Mobile Number</label>
        </div>

        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder=" "
            required
            value={form.email}
            onChange={handleChange}
          />
          <label>Email Address</label>
        </div>

        <div className="input-box">
          <textarea
            name="message"
            placeholder=" "
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <label>Message</label>
        </div>

        <button className="contact-btn" type="submit">
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="form-status">{status}</p>}

      </form>

    </div>

  </div>

</section>
  );
};

export default Contact;