const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text-container">
          <p className="footer-text">
            © 2026 Lokesh Manickam. All rights reserved.
          </p>
        </div>
        

        <div className="footer-social">
          <a href="https://github.com/LokeshManickam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/lokeshmanickam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/itz_manickam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:lokeshmanickam2005@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;