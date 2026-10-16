import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Content.css";

// GSAP ScrollTrigger plugin register karein
gsap.registerPlugin(ScrollTrigger);

function DownloadContent() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll hone par section smooth fade-in aur slide-up animation ke sath aayega
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Jab section screen ke 80% par aayega tab trigger hoga
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // File download handle karne ka function
  const handleDownload = () => {
    // Apni PDF file ko 'public' folder me rakhein (jaise public/catalog.pdf)
    // Aur yahan uska path '/catalog.pdf' de dein. Ye permanent direct download trigger karega.
    const fileUrl = "/catalog.pdf"; 
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Official-Catalog-2026.pdf"; // Download hone wali file ka naam
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef} className="download-content-section">
      <div className="download-content-container">
        <span className="download-sub-badge">Official Document</span>
        <h2>Download Our Catalog</h2>
        <p>
          Discover our comprehensive range of custom merchandise, employee onboarding kits, 
          and premium corporate gifts tailored for modern businesses. Get instant access to 
          our complete high-resolution specifications guide.
        </p>
        <div className="download-btn-wrapper">
          <button onClick={handleDownload} className="corporate-download-btn">
            <span>Download Catalog PDF</span>
            <i className="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default DownloadContent;