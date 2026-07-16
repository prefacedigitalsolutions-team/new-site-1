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
              
            </div>
          </div>

        </div>
      </div>


    {/* 3. Bottom Bar  */}
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
    </footer>
  );
}

export default Footer;