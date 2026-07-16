import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProductIntro.css";

gsap.registerPlugin(ScrollTrigger);

function ProductIntro({ title, description }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    
      gsap.fromTo(
        ".intro-title, .intro-desc-wrapper",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2, // Title pehle aayega, description uske thoda baad
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="product-intro" ref={sectionRef}>
      <div className="container">
        <div className="intro-split-grid">
          
          {/* Left Column: Bold Side Title */}
          <div className="intro-title-block">
            <span className="sub-tag">Overview</span>
            <h2 className="intro-title">{title}</h2>
          </div>

          {/* Right Column: Premium Text & Decorative Line */}
          <div className="intro-desc-wrapper">
            <div className="accent-line"></div>
            <p className="intro-desc">{description}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductIntro;






