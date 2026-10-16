import { useEffect, useRef } from "react";
import "./Video.css";

function Video({
  title = "Welcome to Company Name",
  videoUrl = "https://res.cloudinary.com/dgetmrzr/video/upload/v1790843818/V-2.mp4",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log("Video play error:", err));
    }
  }, [videoUrl]);

  return (
    <section className="video-section">
      <video
        ref={videoRef}
        className="background-video"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Video Overlay */}
      <div className="video-overlay"></div>

      {/* Content over Video */}
      <div className="video-content">
        <h2>{title}</h2>
      </div>
    </section>
  );
}

export default Video;