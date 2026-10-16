import "./ContactIntro.css";
<<<<<<< HEAD
=======
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0

const ContactIntro = () => {
  return (
    <section className="contact-intro">
      <div className="container">
<<<<<<< HEAD
        <div className="contact-heading">
          <span className="subtitle">CONTACT US</span>
          <h2>Let's Start a Conversation</h2>
          <p>
            Have a project in mind or need any assistance? We'd love to hear
            from you. Reach out and let's build something exceptional together.
          </p>
        </div>
=======

        <div className="contact-heading">
          <span>CONTACT US</span>
          <h2>Let's Start a Conversation</h2>

          <p>
            Have a project in mind or need any assistance?
            We'd love to hear from you. Fill out the form or
            use the contact details below.
          </p>
        </div>

        <div className="contact-cards">

          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Address</h3>
            <p>New Delhi, India</p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="icon" />
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>

        </div>

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
      </div>
    </section>
  );
};

export default ContactIntro;