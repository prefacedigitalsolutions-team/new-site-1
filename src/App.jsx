import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "./components/Scroll/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Calendar from "./assets/pages/Products/Calendar";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/calendar" element={<Calendar />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;