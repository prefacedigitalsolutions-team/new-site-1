import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
<<<<<<< HEAD
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
=======
      <div className="overlay"></div>

      <div className="contact-banner-content container">
        <h1>Contact Us</h1>

        <div className="breadcrumb">
          <span>Home</span>
          <span className="divider">/</span>
          <span className="active">Contact Us</span>
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;