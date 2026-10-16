import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Diary-vedio.css";

function DiaryVideo() {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Banner Zoom Animation
    gsap.fromTo(
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
  }, []);

  return (
    <section ref={bannerRef} className="product-banner diary-video-section">
      <video
        className="banner-video"
        src="https://res.cloudinary.com/dgetmrzr/video/upload/v1790843818/V-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}

export default DiaryVideo;