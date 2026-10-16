<<<<<<< HEAD
// All section import
import ContactBanner from "../../components/Contact/ContactBanner";
import ContactForm from "../../components/Contact/ContactForm";
import SEO from "../../components/SEO"; // SEO Component import kiya
=======
import ContactBanner from "../../components/contact/ContactBanner";
import ContactIntro from "../../components/Contact/ContactIntro";
import ContactForm from "../../components/Contact/ContactForm";

//import ContactMap from "../../components/Contact/ContactMap";
    
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0

function Contact() {
  return (
    <>
<<<<<<< HEAD
      {/* Contact Page ke liye SEO */}
      <SEO 
        title="Contact Us | Get in Touch for Corporate Gifting Solutions" 
        description="Reach out to us for bulk corporate gifting, custom promotional merchandise, business gifts inquiries, and order assistance." 
        keywords="contact us, corporate gifting inquiry, bulk orders, promotional items support"
      />

      <ContactBanner />
      <ContactForm />
=======
      <ContactBanner />

       <ContactIntro />

       <ContactForm />
      
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
    </>
  );
}

export default Contact;