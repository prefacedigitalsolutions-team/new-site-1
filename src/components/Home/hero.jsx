import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./hero.css";

<<<<<<< HEAD
import heroMain from "../../assets/images/hero/banar-home.jpg";
import heroSmall1 from "../../assets/images/hero/bag-02.jpg";
import heroSmall2 from "../../assets/images/hero/usb.jpg";
=======
import heroMain from "../../assets/images/hero/home-banar-2.jpg";
import heroSmall1 from "../../assets/images/hero/home-food-banar-03.jpg";
import heroSmall2 from "../../assets/images/hero/photo-banar-02.jpg";
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0

function Hero() {
  const containerRef = useRef(null);

<<<<<<< HEAD
  // GSAP Animation section (Removed .hero-buttons reference)
=======
  // GSAP Animation section start

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  useGSAP(() => {
    // 1. Initial Hidden States
    gsap.set(".hero-bg-circle", { scale: 0.7, opacity: 0 });
    gsap.set(".hero-badge", { opacity: 0, y: 30 });
    gsap.set(".title-line span", { y: "100%" });
<<<<<<< HEAD
    gsap.set([".hero-text", ".hero-bottom", ".hero-scroll"], { opacity: 0, y: 30 });
=======
    gsap.set([".hero-text", ".hero-buttons", ".hero-bottom", ".hero-scroll"], { opacity: 0, y: 30 });
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
    
    gsap.set(".hero-main-image", { scale: 1.15, opacity: 0 });
    gsap.set(".hero-floating", { scale: 0.8, opacity: 0, y: 40 });
    gsap.set(".hero-card", { scale: 0.7, opacity: 0 });

<<<<<<< HEAD
    // 2. Timeline Sequence
=======
    // 2. Premium Timeline Sequence (Cinematic entrance)
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });

    tl.to(".hero-bg-one", { scale: 1, opacity: 0.15, duration: 2 })
      .to(".hero-bg-two", { scale: 1, opacity: 0.05, duration: 2 }, "-=1.5")
      .to(".hero-badge", { opacity: 1, y: 0, duration: 1 }, "-=1.8")
<<<<<<< HEAD
      .to(".title-line span", { y: "0%", stagger: 0.15 }, "-=1.5")
      .to(".hero-text", { opacity: 1, y: 0, duration: 1 }, "-=1.2")
      .to(".hero-bottom", { opacity: 1, y: 0, duration: 1 }, "-=1.0")
=======
      
      // Text reveal effect from mask
      .to(".title-line span", { y: "0%", stagger: 0.15 }, "-=1.5")
      
      // Left elements
      .to(".hero-text", { opacity: 1, y: 0, duration: 1 }, "-=1.2")
      .to(".hero-buttons", { opacity: 1, y: 0, duration: 1 }, "-=1.1")
      .to(".hero-bottom", { opacity: 1, y: 0, duration: 1 }, "-=1.0")
      
      // Smooth Image Entrance
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
      .to(".hero-main-image", { opacity: 1, scale: 1, duration: 1.8 }, "-=1.6")
      .to(".hero-floating", { opacity: 1, scale: 1, y: 0, stagger: 0.2 }, "-=1.3")
      .to(".hero-card", { scale: 1, opacity: 1, ease: "back.out(1.7)" }, "-=0.8")
      .to(".hero-scroll", { opacity: 1, y: 0 }, "-=0.6");

<<<<<<< HEAD
    // 3. Floating Loops
=======
    // 3. Continuous Luxury Floating Loops (hava me tairne vala live look)
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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

<<<<<<< HEAD
=======
  {/* End gsap section*/}


  {/* Bnaar section Start */}

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-bg-circle hero-bg-one"></div>
      <div className="hero-bg-circle hero-bg-two"></div>

      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
<<<<<<< HEAD
          <span className="hero-badge">Corporate Gifts Branding</span>

          <h1 className="hero-title">
            <div className="title-line"><span>YOUR CORORATE GIFTING &</span></div>
            <div className="title-line"><span>MERCHANDIES</span></div>
            <div className="title-line"><span>PARTNER</span></div>
          </h1>

          <p className="hero-text">
            <span>BRANDED MERCHANDISE IN DELHI NCR<br /></span>
            We are a Delhi-based team of designers and production specialists who help organisations say thank you in a way that carries their brand. Because design, printing and delivery are handled together, you get consistent quality and one point of contact from the first mockup to the final delivery.
            <br /><br />
            A good corporate gift keeps your brand on someone desk long after the meeting ends. We at Corporate Gifting Solutions, design, brand and deliver custom merchandise for companies, schools, colleges and event teams, from a single diary to a thousand welcome kits
          </p>

          <div className="hero-bottom">
            <div className="hero-stat">
              <h2>200+</h2>
              <span>Products Variations</span>
            </div>
            <div className="hero-stat">
              <h2>8+</h2>
=======
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
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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
<<<<<<< HEAD
            <p>Trusted by 300+ clients</p>
=======
            <p>Trusted by 250+ clients</p>
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
          </div>
        </div>

      </div>

      <div className="hero-scroll">
<<<<<<< HEAD
        <span>Over</span>
=======
        <span>Scroll</span>
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;