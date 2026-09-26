

import Hero from "../../components/Home/Hero";
import Intro from "../../components/Home/Intro";

import StaticImage from "../../components/Static/StaticImage";
import Service from"../../components/Home/Service";

import homeBanner from "../../assets/images/hero/home-banar-2.jpg";

import Product from "../../components/Home/Product";



function Home() {
  return (
    <>
    
      <Hero />
      <Intro />

      <StaticImage
       title="Welcome To Preface Digital Solutions"image={homeBanner}/>

       <Service />

      <Product />

      

    </>
  );
}

export default Home;