<<<<<<< HEAD
import { useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "./components/Scroll/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer";

// Pages import
import Home from "./assets/pages/Home";
import Download from "./assets/pages/Download";
import Blog from "./assets/pages/Bloge"; 
import BlogPost from "./components/Blog/BlogPost"; 
import Contact from "./assets/pages/Contact";

// Product Pages import
import Stationary from "./assets/pages/Products/Stationary";
import Clothing from "./assets/pages/Products/Clothing";
import Mugs from "./assets/pages/Products/Mugs";
import TechGift from "./assets/pages/Products/TechGift";
import Bags from "./assets/pages/Products/Bags";
import IdCard from "./assets/pages/Products/Id-card";
import Trophy from "./assets/pages/Products/Trophy";

function App() {
  // AOS Initialization
=======

import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";

import Stationary from "./assets/pages/Products/Stationary";
import Clothing from "./assets/pages/Products/Clothing";
 
import Mugs from "./assets/pages/Products/Mugs";
import TechGift from "./assets/pages/Products/TechGift";

import Bags from "./assets/pages/Products/Bags";
import Certificate from "./assets/pages/Products/Certificate";

import Trophy from "./assets/pages/Products/Trophy";
import Planters  from "./assets/pages/Products/Planters";

import Contact from "./assets/pages/Contact";


function App() {
  const [loading, setLoading] = useState(true);

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // AOS Initialize
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

<<<<<<< HEAD
=======
  if (loading) {
    return <Preloader />;
  }

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD

        {/* Product Routes with /* to prevent 404 errors on sub-paths */}
        <Route path="/products/Stationary/*" element={<Stationary />} />
        <Route path="/products/Clothing/*" element={<Clothing />} />
        <Route path="/products/Mugs/*" element={<Mugs />} />
        <Route path="/products/TechGift/*" element={<TechGift />} />
        <Route path="/products/Bags/*" element={<Bags />} />
        <Route path="/products/id-card/*" element={<IdCard />} />
        <Route path="/products/Trophy/*" element={<Trophy />} />

        {/* Other Pages */}
        <Route path="/download" element={<Download />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
=======
        <Route path="/about" element={<About />} />

        <Route path="/products/stationary" element={<Stationary />} />
        <Route path="/products/Clothing" element={<Clothing/>} />
        <Route path="/products/Mugs" element={<Mugs/>} />

        <Route path="/products/TechGift" element={<TechGift/>} />
        <Route path="/products/Bags" element={<Bags/>} />
        <Route path="/products/Certificate" element={<Certificate/>} />

        <Route path="/products/Trophy" element={<Trophy/>} />
        <Route path="/products/Planters" element={<Planters/>} />

         <Route path="/contact" element={<Contact />} />
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
      </Routes>

      <Footer />
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;




>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
