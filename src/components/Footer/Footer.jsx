import './Footer.css';
import './ScrollToTop.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="main-footer">
      {/* Middle Links Section */}
      <div className="footer-middle">
        <div className="footer-grid-container">
          

        {/* Column 1: Logo & Address */}
          <div className="footer-col brand-col">
            <div className="brand-logo">
           
              <h2>Corporate Gifting Solutions</h2>
            </div>
            <address>
              kirti shikhar 127 new delhi 110053
            </address>
            <a href="tel:+919810968828" className="phone-link">+91-9810968828</a>
            <a href="mailto:info@gmail.com" className="email-link">info@gmail.com</a>
          </div>

          {/* Column 2: Archiact Links */}
          <div className="footer-col">
            <h3>ARCHIACT</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Product</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h3>SERVICES</h3>
            <ul>
              <li><a href="#stationary">Stationary</a></li>
              <li><a href="#clothing">Clothing</a></li>
              <li><a href="#mugs">Mugs</a></li>
              <li><a href="#tech-gifts">Tech Gifts</a></li>
            </ul>
          </div>

          {/* Column 4: Events */}
          <div className="footer-col">
            <h3>EVENTS</h3>
            <ul>
              <li><a href="#bags">Bags</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#trophy">Trophy & Award</a></li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="footer-col">
            <h3>FOLLOW</h3>
            <div className="social-icons-row">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Photo Studio. All Rights Reserved.
          </p>
          <p className="design-by">
            Design by <a href="#" target="_blank" rel="noopener noreferrer">Preface Communications</a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
}

export default Footer;