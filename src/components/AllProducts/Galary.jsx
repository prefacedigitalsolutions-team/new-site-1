import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Galary.css";

gsap.registerPlugin(ScrollTrigger);

function Galary({ images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap.context saare animations ko scope karta hai aur automatic clean-up karta hai
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".galary-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50, // 80 se thoda kam kiya taaki scroll distance thoda normal lage
            scale: 0.96,
            x: index % 2 === 0 ? -30 : 30,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8, // Thoda fast duration behtar lagta hai scroll par
            ease: "power2.out", // Smooth easing
            scrollTrigger: {
              trigger: card,
              start: "top 88%", // Thoda jaldi trigger hoga taaki screen par aate hi smooth chale
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef); // Pure container scope ke andar select karega

    // Clean up
    return () => ctx.revert();
  }, []);

  return (
    <section className="galary-section" ref={containerRef}>
      <div className="container">
        <div className="galary-grid">
          {images.map((item, index) => (
            <div
              className={`galary-card ${item.className || ""}`}
              key={index}
            >
              <img src={item.image} alt={item.title} />

              <div className="galary-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galary;