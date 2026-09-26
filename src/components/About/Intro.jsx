import "./Intro.css";
import aboutImage from "../../assets/images/hero/photo-banar-02.jpg";

const Intro = () => {
  return (
    <section className="about-home">
      <div className="about-container">

        {/* Left Side: Image */}
        <div
          className="about-image"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={aboutImage}
            alt="Photography Studio"
          />

          {/* Floating Card */}
          <div
            className="experience-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>4.9★</h3>
            <span>Google Rating</span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div
          className="about-content"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <span
            className="about-tag"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ABOUT OUR STUDIO
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Turning Your Special Moments Into Timeless Memories
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Every photograph tells a unique story. Our passion is capturing
            authentic emotions, unforgettable celebrations, and beautiful
            details that you'll cherish for a lifetime.
            <br />
            Every photograph tells a unique story. Our passion is capturing
            authentic emotions, unforgettable celebrations, and beautiful
            details that you'll cherish for a lifetime.
          </p>

          <div className="about-features">
            <div
              className="feature-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span>✓</span>
              <p>Creative Photography</p>
            </div>

            <div
              className="feature-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span>✓</span>
              <p>Professional Editing</p>
            </div>

            <div
              className="feature-box"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span>✓</span>
              <p>Fast Delivery</p>
            </div>
          </div>

          {/*
          <button
            className="about-btn"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Explore More
          </button>
          */}
        </div>

      </div>
    </section>
  );
};

export default Intro;