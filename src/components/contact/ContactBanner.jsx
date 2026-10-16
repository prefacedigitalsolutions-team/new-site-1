import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      {/* Left half image container */}
      <div className="banner-split left-side">
        <div className="top-overlay"></div>
      </div>
      
      {/* Right half image container */}
      <div className="banner-split right-side">
        <div className="top-overlay"></div>
      </div>

      <div className="contact-banner-overlay">
        <div className="container">
          <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;