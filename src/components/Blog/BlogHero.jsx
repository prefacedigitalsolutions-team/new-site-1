import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./BlogHero.css";
import heroImage from "../../assets/images/blog-banner.jpg";

const BlogHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-hero__image-wrapper", {
        scale: 1.05,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="blog-hero" ref={heroRef}>
      <div className="blog-hero__image-wrapper">
        <img src={heroImage} alt="Blog Hero Banner" />
      </div>
    </section>
  );
};

export default BlogHero;