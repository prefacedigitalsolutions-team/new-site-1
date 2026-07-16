import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ProductBanner.css";

function ProductBanner({ title, image }) {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline();

  // Banner Zoom
  tl.fromTo(
    bannerRef.current,
    {
      scale: 1.08,
    },
    {
      scale: 1,
      duration: 2.8,
      ease: "power2.out",
    }
  );

  // Title Animation
  tl.fromTo(
    titleRef.current,
    {
      opacity: 0,
      x: -80,
      y: 20,
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      duration: 1.6,
      ease: "power4.out",
    },
    "-=2"
  );

}, []);

  return (
    <section
      ref={bannerRef}
      className="product-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>

      <h1 ref={titleRef}>{title}</h1>
    </section>
  );
}

export default ProductBanner;