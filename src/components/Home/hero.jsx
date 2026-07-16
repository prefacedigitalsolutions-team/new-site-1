import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./hero.css";

import heroMain from "../../assets/images/hero/home-banar-2.jpg";
import heroSmall1 from "../../assets/images/hero/home-food-banar-03.jpg";
import heroSmall2 from "../../assets/images/hero/photo-banar-02.jpg";

function Hero() {
  const containerRef = useRef(null);

  // GSAP Animation section start

  useGSAP(() => {
    // 1. Initial Hidden States
    gsap.set(".hero-bg-circle", { scale: 0.7, opacity: 0 });
    gsap.set(".hero-badge", { opacity: 0, y: 30 });
    gsap.set(".title-line span", { y: "100%" });
    gsap.set([".hero-text", ".hero-buttons", ".hero-bottom", ".hero-scroll"], { opacity: 0, y: 30 });
    
    gsap.set(".hero-main-image", { scale: 1.15, opacity: 0 });
    gsap.set(".hero-floating", { scale: 0.8, opacity: 0, y: 40 });
    gsap.set(".hero-card", { scale: 0.7, opacity: 0 });

    // 2. Premium Timeline Sequence (Cinematic entrance)
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });

    tl.to(".hero-bg-one", { scale: 1, opacity: 0.15, duration: 2 })
      .to(".hero-bg-two", { scale: 1, opacity: 0.05, duration: 2 }, "-=1.5")
      .to(".hero-badge", { opacity: 1, y: 0, duration: 1 }, "-=1.8")
      
      // Text reveal effect from mask
      .to(".title-line span", { y: "0%", stagger: 0.15 }, "-=1.5")
      
      // Left elements
      .to(".hero-text", { opacity: 1, y: 0, duration: 1 }, "-=1.2")
      .to(".hero-buttons", { opacity: 1, y: 0, duration: 1 }, "-=1.1")
      .to(".hero-bottom", { opacity: 1, y: 0, duration: 1 }, "-=1.0")
      
      // Smooth Image Entrance
      .to(".hero-main-image", { opacity: 1, scale: 1, duration: 1.8 }, "-=1.6")
      .to(".hero-floating", { opacity: 1, scale: 1, y: 0, stagger: 0.2 }, "-=1.3")
      .to(".hero-card", { scale: 1, opacity: 1, ease: "back.out(1.7)" }, "-=0.8")
      .to(".hero-scroll", { opacity: 1, y: 0 }, "-=0.6");

    // 3. Continuous Luxury Floating Loops (hava me tairne vala live look)
    gsap.to(".hero-floating-one", {
      y: "-=15",
      rotation: 1,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to(".hero-floating-two", {
      y: "+=20",
      rotation: -1,
      duration: 3.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.5
    });

    gsap.to(".hero-main-image", {
      y: "-=8",
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

  }, { scope: containerRef });

  {/* End gsap section*/}


  {/* Bnaar section Start */}

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-bg-circle hero-bg-one"></div>
      <div className="hero-bg-circle hero-bg-two"></div>

      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-badge">Luxury Editorial Photography</span>

          <h1 className="hero-title">
            <div className="title-line"><span>CAPTURE</span></div>
            <div className="title-line"><span>THE</span></div>
            <div className="title-line"><span>EXTRAORDINARY</span></div>
          </h1>

          <p className="hero-text">
            Creating timeless wedding, fashion and commercial photography with cinematic storytelling and luxury aesthetics.
          </p>

          <div className="hero-buttons">
            <button className="hero-btn hero-btn-dark">View Portfolio</button>
            
          </div>

          <div className="hero-bottom">
            <div className="hero-stat">
              <h2>250+</h2>
              <span>Projects Completed</span>
            </div>
            <div className="hero-stat">
              <h2>20+</h2>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="hero-right">
          <div className="hero-main-image">
            <img src={heroMain} alt="Photography" />
          </div>

          <div className="hero-floating hero-floating-one">
            <img src={heroSmall1} alt="Wedding Photography" />
          </div>

          <div className="hero-floating hero-floating-two">
            <img src={heroSmall2} alt="Fashion Photography" />
          </div>

          <div className="hero-card">
            <h3>★★★★★</h3>
            <p>Trusted by 250+ clients</p>
          </div>
        </div>

      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;