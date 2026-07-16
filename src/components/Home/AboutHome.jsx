import "./aboutHome.css";
import aboutImage from "../../assets/images/hero/photo-banar-02.jpg";

const AboutHome = () => {
  return (
    <section className="about-home">
      <div className="about-container">

        {/* Left Side: Image & Floating Card (Swapped) */}
        <div className="about-image">
          <img
            src={aboutImage}
            alt="Photography Studio"
          />

          {/* Floating Card */}
          <div className="experience-card">
            <h3>4.9★</h3>
            <span>Google Rating</span>
          </div>
        </div>

        {/* Right Side: Content (Swapped) */}
        <div className="about-content">
          <span className="about-tag">
            ABOUT OUR STUDIO
          </span>

          <h2>
            Turning Your Special Moments Into Timeless Memories
          </h2>

          <p>
            Every photograph tells a unique story. Our passion is capturing
            authentic emotions, unforgettable celebrations, and beautiful
            details that you'll cherish for a lifetime.
          </p>

          <div className="about-features">
            <div className="feature-box">
              <span>✓</span>
              <p>Creative Photography</p>
            </div>

            <div className="feature-box">
              <span>✓</span>
              <p>Professional Editing</p>
            </div>

            <div className="feature-box">
              <span>✓</span>
              <p>Fast Delivery</p>
            </div>
          </div>

          {/* Premium Button with Shutter Animation Effect */}
          <button className="about-btn">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutHome;