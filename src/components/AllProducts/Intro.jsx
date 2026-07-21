import "./Intro.css";

function ProductIntro({ title, description }) {
  return (
    <section className="product-intro">
      <div className="container">
        <div className="intro-split-grid">

          {/* Left Column */}
          <div
            className="intro-title-block"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span
              className="sub-tag"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Overview
            </span>

            <h2
              className="intro-title"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {title}
            </h2>
          </div>

          {/* Right Column */}
          <div
            className="intro-desc-wrapper"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="accent-line"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>

            <p
              className="intro-desc"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductIntro;