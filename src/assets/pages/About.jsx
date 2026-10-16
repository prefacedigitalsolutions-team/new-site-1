// All section import
import AboutBanner from "../../components/About/AboutBanar";
import Intro from "../../components/About/Intro";
import ModernStatic from "../../components/NewStatic/ModernStatic";
import SEO from "../../components/SEO"; // SEO Component import kiya

// about image
import aboutImage from "../../assets/images/hero/home-banar-2.jpg";

function About() {
  return (
    <>
      {/* About Page ke liye SEO */}
      <SEO 
        title="About Us | Premium Corporate Gifting & Promotional Solutions" 
        description="Learn more about our company, our journey in corporate gifting, premium promotional merchandise, and our commitment to delivering excellence for businesses." 
        keywords="about us, corporate gifting company, promotional items provider, business gifts manufacturer"
      />

      <AboutBanner />
     
      <Intro />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default About;