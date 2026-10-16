// All section import
import ContactBanner from "../../components/Contact/ContactBanner";
import ContactForm from "../../components/Contact/ContactForm";
import SEO from "../../components/SEO"; // SEO Component import kiya

function Contact() {
  return (
    <>
      {/* Contact Page ke liye SEO */}
      <SEO 
        title="Contact Us | Get in Touch for Corporate Gifting Solutions" 
        description="Reach out to us for bulk corporate gifting, custom promotional merchandise, business gifts inquiries, and order assistance." 
        keywords="contact us, corporate gifting inquiry, bulk orders, promotional items support"
      />

      <ContactBanner />
      <ContactForm />
    </>
  );
}

export default Contact;