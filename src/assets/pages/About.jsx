<<<<<<< HEAD
// All section import
import AboutBanner from "../../components/About/AboutBanar";
import Intro from "../../components/About/Intro";
import ModernStatic from "../../components/NewStatic/ModernStatic";
import SEO from "../../components/SEO"; // SEO Component import kiya

// about image
=======
import AboutBanner from "../../components/About/AboutBanar";
import Intro from "../../components/About/Intro";
import ModernStatic from "../../components/NewStatic/ModernStatic";

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
import aboutImage from "../../assets/images/hero/home-banar-2.jpg";

function About() {
  return (
    <>
<<<<<<< HEAD
      {/* About Page ke liye SEO */}
      <SEO 
        title="About Us | Premium Corporate Gifting & Promotional Solutions" 
        description="Learn more about our company, our journey in corporate gifting, premium promotional merchandise, and our commitment to delivering excellence for businesses." 
        keywords="about us, corporate gifting company, promotional items provider, business gifts manufacturer"
      />

      <AboutBanner />
     
      <Intro />

      <ModernStatic image={aboutImage} />
=======
      <AboutBanner />
     
     <Intro />

      <ModernStatic image={aboutImage} />


>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
    </>
  );
}

export default About;