<<<<<<< HEAD

import "./Intro.css";

function ProductIntro({ subTag, title, leftContent, rightContent }) {
=======
import "./Intro.css";

function ProductIntro({ title, description }) {
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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
<<<<<<< HEAD
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
=======
            <span
              className="sub-tag"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Overview
            </span>

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
            <h2
              className="intro-title"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {title}
            </h2>
<<<<<<< HEAD

            {/* Left Content */}
            <div
              className="intro-left-text"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {leftContent}
            </div>
=======
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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

<<<<<<< HEAD
            <div
=======
            <p
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
              className="intro-desc"
              data-aos="fade-up"
              data-aos-delay="400"
            >
<<<<<<< HEAD
              {rightContent}
            </div>
=======
              {description}
            </p>
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
          </div>

        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default ProductIntro;

=======
export default ProductIntro;
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
