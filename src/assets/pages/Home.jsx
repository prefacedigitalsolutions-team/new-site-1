<<<<<<< HEAD
// All section import
import Hero from "../../components/Home/Hero";
import Intro from "../../components/Home/Intro";
import Video from "../../components/Home/Video";

import Service from "../../components/Home/Service";
import Product from "../../components/Home/Product";
import StaticImage from "../../components/Static/StaticImage";
import Fterproduct from "../../components/Home/About"; 

import BLOG from "../../components/Home/blog"; 
import FAQ from "../../components/Home/faq"; 
import SEO from "../../components/SEO"; 

import homeBanner from "../../assets/images/hero/home-banar-2.jpg";
=======


import Hero from "../../components/Home/Hero";
import Intro from "../../components/Home/Intro";

import StaticImage from "../../components/Static/StaticImage";
import Service from"../../components/Home/Service";

import homeBanner from "../../assets/images/hero/home-food-banar-03.jpg";
import ModernStatic from "../../components/NewStatic/ModernStatic";
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0


function Home() {
  return (
    <>
<<<<<<< HEAD
      {/* Home Page ke liye SEO */}
      <SEO 
        title="Corporate Gifting Solutions | Premium Promotional Merchandise & Business Gifts" 
        description="Welcome to Corporate Gifting Solutions. Discover our wide range of corporate gifts, promotional items, tech gadgets, trophies, and customized business merchandise." 
        keywords="Custom corporate gifts and branded merchandise in Delhi NCR. Diaries, bottles, desk items and kits with your logo."
      />

      <Hero />
    
      <Intro />


         <Video title="Welcome To Corporate Gifts Branding" />

      <Service />

      <Product />

    
      <Fterproduct />

        <StaticImage
        title="Welcome To Corporate Gifts Branding"
        image={homeBanner}
      />
      
      <BLOG /> 

      <FAQ /> 
=======

      <Hero />
      <Intro />

      <StaticImage
       title="Welcome To Preface Digital Solutions"image={homeBanner}/>

       <Service />

      <ModernStatic image={homeBanner} />
      

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
    </>
  );
}

export default Home;