<<<<<<< HEAD
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
=======
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      {/* 1. Top Newsletter Banner */}
      <div className="newsletter-banner">
        <div className="newsletter-container">
          <label htmlFor="email-input">SUBSCRIBE TO OUR QUARTERLY NEWSLETTER</label>
          <div className="input-group-custom">
            <input 
              type="email" 
              id="email-input"
              placeholder="Enter your email address" 
            />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* 2. Middle Links Section */}
      <div className="footer-middle">
        <div className="footer-grid-container">
          
          {/* Column 1: Logo & Address */}
          <div className="footer-col brand-col">
            <div className="brand-logo">
              <svg viewBox="0 0 24 24" className="logo-svg">
                <path fill="none" stroke="#5ccfed" strokeWidth="2" d="M12 2L2 22h20L12 2zM12 6l7 14H5l7-14z"/>
              </svg>
              <h2>Photography</h2>
            </div>
            <address>
              kirti shikhar 127 new delhi 110053<br />
              Lorem ipsum dolor sit.
            </address>
            <a href="mailto:admin@archiactvr.com" className="email-link">info@gmail.com</a>
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
              <li><a href="#games">Food Photography</a></li>
              <li><a href="#publishing">Fashion Photography</a></li>
              <li><a href="#solutions">interrior Photography</a></li>
              <li><a href="#games">industrial Photography</a></li>
            
              
            </ul>
          </div>

          {/* Column 4: Events */}
          <div className="footer-col">
            <h3>EVENTS</h3>
            <ul>
                <li><a href="#publishing">Food Photography</a></li>
                <li><a href="#publishing">Interior Photography</a></li>
                <li><a href="#publishing">industrial Photography</a></li>
                <li><a href="#publishing">jwelry Photography</a></li>
            </ul>
          </div>

          {/* Column 5: Follow Us (Using Bootstrap Icons Classes) */}
          <div className="footer-col">
            <h3>FOLLOW</h3>
            <div className="social-icons-row">
              <a href="#whatsapp" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#youtube" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              <a href="#facebook" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#x" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#google" aria-label="Google"><i className="bi bi-google"></i></a>
              
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
            </div>
          </div>

        </div>
      </div>

<<<<<<< HEAD
      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Corporate Gift Branding. All Rights Reserved.
=======

    {/* 3. Bottom Bar  */}
      <div className="footer-bottom-bar">
        <div className="bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Photo Studio. All Rights Reserved.
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
          </p>
          <p className="design-by">
            Design by <a href="#" target="_blank" rel="noopener noreferrer">Preface Communications</a>
          </p>
        </div>
      </div>
<<<<<<< HEAD

      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
=======
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
    </footer>
  );
}

export default Footer;