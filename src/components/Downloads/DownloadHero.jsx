import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./DownloadHero.css";

function DownloadHero() {
  const bannerRef = useRef(null);

  useEffect(() => {
    // GSAP Page Load Cinematic Animation
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={bannerRef} className="download-hero-section">
      {/* Unique Left Split */}
      <div className="download-split download-left">
        <div className="download-top-overlay"></div>
      </div>

      {/* Unique Right Split */}
      <div className="download-split download-right">
        <div className="download-top-overlay"></div>
      </div>
    </section>
  );
}

export default DownloadHero;