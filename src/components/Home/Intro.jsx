import "./Intro.css";

const Intro = () => {
  return (
    <section className="why-choose-us-section">
      <div className="wcu-container">

        {/* Left Content Side */}
        <div className="wcu-content" data-aos="fade-right">
          <h2 className="wcu-heading" data-aos="fade-up">
            <span className="text-highlight">WHY</span> CHOOSE US
          </h2>

          <p
            className="wcu-description"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            porttitor purus ac tellus auctor auctor. Nulla tincidunt lobortis
            aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras porttitor purus ac tellus auctor auctor. Nulla tincidunt
            lobortis aliquam.
          </p>

          <ul className="wcu-list">
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
                Lorem ipsum dolor sit amet adipiscing elit. Tur adipiscing elit.
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
                Lorem ipsum dolor sit amet adipiscing elit. Tur adipiscing elit.
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
                Lorem ipsum dolor sit amet adipiscing elit. Tur adipiscing elit.
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
                Lorem ipsum dolor sit amet adipiscing elit. Tur adipiscing elit.
              </span>
            </li>
          </ul>

          <button
            className="wcu-btn"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Learn More
          </button>
        </div>

        {/* Right Image Side */}
        <div
          className="wcu-image-wrapper"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="wcu-border-box"></div>

          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
            alt="Business meeting"
            className="wcu-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Intro;