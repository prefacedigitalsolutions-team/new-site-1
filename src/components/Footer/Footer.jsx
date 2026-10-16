import { Link } from "react-router-dom";
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
              <h2>Corporate Gift Branding</h2>
            </div>
            <address>
              Kirtishikhar Building janakpuri Distric center New Delhi,110058 India
            </address>
            <a href="tel:+917827797247" className="phone-link">+91-7827797247</a>
            <a href="mailto:corporategiftsbranding@gmail.com" className="email-link">corporategiftbranding@gmail.com</a>
          </div>

          {/* Column 2: Quick Links (Updated according to App.jsx routes) */}
          <div className="footer-col">
            <h3>QUICK LINK</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/download">Download Catalogue</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products Part 1 (Linked to App.jsx product routes) */}
          <div className="footer-col">
            <h3>PRODUCTS</h3>
            <ul>
              <li><Link to="/products/Stationary">Stationary</Link></li>
              <li><Link to="/products/Clothing">Clothing</Link></li>
              <li><Link to="/products/Mugs">Drinkware</Link></li>
              <li><Link to="/products/TechGift">Tech Gifts</Link></li>
            </ul>
          </div>

          {/* Column 4: Products Part 2 */}
          <div className="footer-col">
            <h3 className="invisible-heading">&nbsp;</h3>
            <ul>
              <li><Link to="/products/Bags">Bags</Link></li>
              <li><Link to="/products/id-card">Id Card</Link></li>
              <li><Link to="/products/Trophy">Trophy & Awards</Link></li>
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
            &copy; {new Date().getFullYear()} Corporate Gift Branding. All Rights Reserved.
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