import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="overlay"></div>

      <div className="contact-banner-content container">
        <h1>Contact Us</h1>

        <div className="breadcrumb">
          <span>Home</span>
          <span className="divider">/</span>
          <span className="active">Contact Us</span>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;