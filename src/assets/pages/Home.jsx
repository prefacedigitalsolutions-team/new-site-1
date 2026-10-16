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


function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;