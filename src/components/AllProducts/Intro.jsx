
import "./Intro.css";

function ProductIntro({ subTag, title, leftContent, rightContent }) {
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
            {/* Sub Tag: Hide only when explicitly empty */}
            {subTag !== "" && (
              <span
                className="sub-tag"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {subTag || "Overview"}
              </span>
            )}

            {/* Main Title */}
            <h2
              className="intro-title"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {title}
            </h2>

            {/* Left Content */}
            <div
              className="intro-left-text"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {leftContent}
            </div>
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

            <div
              className="intro-desc"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {rightContent}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductIntro;

