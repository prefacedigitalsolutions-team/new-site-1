import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./Service.css";

import img1 from "../../assets/images/hero/home-banar-2.jpg";
import img2 from "../../assets/images/hero/home-food-banar-03.jpg";
import img3 from "../../assets/images/hero/photo-banar-02.jpg";
import img4 from "../../assets/images/hero/home-banar-2.jpg";
import img5 from "../../assets/images/hero/home-food-banar-03.jpg";
import img6 from "../../assets/images/hero/photo-banar-02.jpg";

const originalServices = [
  {
    id: 1,
    title: "Corporate Gifts",
    icon: "bi bi-gift",
    image: img1,
    tag: "Bespoke Packaging",
    description: "Premium corporate gifting solutions designed to strengthen your brand identity and build lasting client relationships.",
  },
  {
    id: 2,
    title: "Calendars",
    icon: "bi bi-calendar3",
    image: img2,
    tag: "Premium Print",
    description: "Beautifully designed wall and table calendars for businesses, offices and promotional campaigns.",
  },
  {
    id: 3,
    title: "Diaries & Notebooks",
    icon: "bi bi-journal-bookmark",
    image: img3,
    tag: "Luxury Leather",
    description: "Luxury diaries and notebooks crafted with premium materials for professionals and executives.",
  },
  {
    id: 4,
    title: "Awards & Trophies",
    icon: "bi bi-trophy",
    image: img4,
    tag: "Precision Crafted",
    description: "Elegant awards and trophies to celebrate achievements and recognize excellence in every event.",
  },
  {
    id: 5,
    title: "Office Essentials",
    icon: "bi bi-briefcase",
    image: img5,
    tag: "Executive Suite",
    description: "Premium office accessories including organizers, pen stands, desk products and executive collections.",
  },
  {
    id: 6,
    title: "Promotional Products",
    icon: "bi bi-stars",
    image: img6,
    tag: "High Impact",
    description: "Creative promotional merchandise that helps businesses leave a memorable impression.",
  },
];

function Service() {
  useEffect(() => {
    originalServices.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  const services = useMemo(
    () => [
      originalServices[originalServices.length - 1],
      ...originalServices,
      originalServices[0],
    ],
    []
  );

  const totalServices = originalServices.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

  const autoplayRef = useRef(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setIsSliding(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
  }, [stopAutoplay]);

  useEffect(() => {
    if (isTransitioning) {
      startAutoplay();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else if (isTransitioning) {
        startAutoplay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoplay();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isTransitioning, startAutoplay, stopAutoplay]);

  const handleNext = useCallback(() => {
    if (isSliding || !isTransitioning) return;
    stopAutoplay();
    setIsSliding(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isSliding, isTransitioning, stopAutoplay]);

  const handlePrev = useCallback(() => {
    if (isSliding || !isTransitioning) return;
    stopAutoplay();
    setIsSliding(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isSliding, isTransitioning, stopAutoplay]);

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;

    setIsSliding(false);

    if (currentIndex >= services.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      return;
    }

    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(services.length - 2);
      return;
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 60); // Thoda padding badhaya hai CSS state clean reflow ke liye

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const activeDisplayIndex = (currentIndex - 1 + totalServices) % totalServices;

  return (
    <section className="studio-service-section">
      <div className="studio-container">
        
        {/* Top Header Row */}
        <div className="studio-top-bar" data-aos="fade-up">
          <div className="studio-title-group">
            <span className="studio-subtitle">// EXPERTISE</span>
            <h2>Capabilities & Services</h2>
          </div>

          <div className="studio-nav-controls">
            <button
              onClick={handlePrev}
              className="studio-control-btn"
              aria-label="Previous"
              disabled={isSliding}
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <div className="studio-fraction-indicator">
              <span className="current-idx">
                {String(activeDisplayIndex + 1).padStart(2, "0")}
              </span>
              <span className="divider-line"></span>
              <span className="total-idx">
                {String(totalServices).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="studio-control-btn"
              aria-label="Next"
              disabled={isSliding}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Slider Frame */}
        <div
          className="studio-slider-stage"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <div
            className="studio-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning
                ? "transform .8s cubic-bezier(.76,0,.24,1)"
                : "none",
            }}
          >
            {services.map((service, idx) => {
              // Active check condition jisse actual looping state update refresh trigger ho sake
              const isCurrentActive = currentIndex === idx;

              return (
                <div
                  key={`${service.id}-${idx}`} // Uniquely composite key track reflow ke liye
                  className={`studio-slide ${
                    isCurrentActive ? "is-active" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="studio-visual-canvas">
                    <div className="studio-image-parallax-wrapper">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="studio-hero-img"
                        loading="eager"
                      />
                      <div className="studio-canvas-overlay"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="studio-details-panel">
                    <div className="studio-panel-content">
                      <span className="slide-tag">{service.tag}</span>
                      <h3 className="slide-title">{service.title}</h3>
                      <p className="slide-desc">{service.description}</p>

                      <div className="studio-action-zone">
                        <div className="studio-icon-badge">
                          <i className={service.icon}></i>
                        </div>

                        <a href="#quote" className="studio-premium-link">
                          <span className="link-text">
                            Request Tailored Proposal
                          </span>
                          <span className="link-arrow-wrapper">
                            <i className="bi bi-arrow-right-short dynamic-arrow"></i>
                          </span>
                          <div className="link-underline"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className="studio-indicator-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="studio-linear-progress-track">
            <div
              className="studio-linear-progress-bar"
              style={{
                width: `${((activeDisplayIndex + 1) / totalServices) * 100}%`,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Service;