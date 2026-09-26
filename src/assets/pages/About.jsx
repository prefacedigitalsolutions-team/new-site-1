import AboutBanner from "../../components/About/AboutBanar";
import Intro from "../../components/About/Intro";
import ModernStatic from "../../components/NewStatic/ModernStatic";

import aboutImage from "../../assets/images/hero/home-banar-2.jpg";

function About() {
  return (
    <>
      <AboutBanner />
     
     <Intro />

      <ModernStatic image={aboutImage} />


    </>
  );
}

export default About;