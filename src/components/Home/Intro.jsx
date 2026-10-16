import "./Intro.css";
import { useNavigate } from "react-router-dom";
import aboutImage from "../../assets/images/hero/mug-3.jpg";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <section className="why-choose-us-section">
      <div className="wcu-container">

        {/* Left Content Side */}
        <div className="wcu-content" data-aos="fade-right">
          <h2 className="wcu-heading" data-aos="fade-up">
            <span className="text-highlight">What we make</span>
          </h2>

          <p
            className="wcu-description"
            data-aos="fade-up"
            data-aos-delay="100"
          >
         Custom Diaries & Notebook, Desk Accessories, Steel Bottles & Drinkware,
            Paper Carry Bags, & Employee ID Cards & Ready-to-send <br></br>kits For Onboarding, Festivals & Events.
          </p>

          <ul className="wcu-list">
            <h3>How it works:</h3>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
               
              <span>
               
                Choose your products or tell us your budget.
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
               We prepare a mockup with your logo.
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
               You approve the design, and we produce and pack.
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
                We deliver to your office or directly to your recipients.
              </span>
            </li>

            <h3><br></br>Why choose us:</h3>
            <p>In-house Design Support, Bulk Pricing, A Sample Before Confirmed
              Order, <br></br>& One Team Handling Design, Printing & Delivery.</p>
          </ul>

         <button
           className="wcu-btn"
             data-aos="zoom-in"
             data-aos-delay="600"
             onClick={() => navigate("/about")} >
               Get a Free Quote
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
              src={aboutImage}  alt="Business meeting" className="wcu-image"/>
        </div>

      </div>
    </section>
  );
};

export default Intro;