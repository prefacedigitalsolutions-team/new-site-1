import Hero from "../../components/Home/Hero";
import Intro from "../../components/Home/Intro";
import AboutHome from "../../components/Home/AboutHome";

import StaticImage from "../../components/Static/StaticImage";
import homeBanner from "../../assets/images/hero/home-food-banar-03.jpg";
import ModernStatic from "../../components/NewStatic/ModernStatic";


function Home() {
  return (
    <>
      <Hero />

    

      <Intro />
        <StaticImage
        title="Welcome To Preface Digital Solutions"
        image={homeBanner}
      />
      <AboutHome />
        <ModernStatic />
    </>
  );
}



export default Home;