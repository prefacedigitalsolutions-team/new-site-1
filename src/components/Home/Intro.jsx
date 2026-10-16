import "./Intro.css";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import aboutImage from "../../assets/images/hero/mug-3.jpg";
=======
import aboutImage from "../../assets/images/bags/paper-bag.jpg";
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0

const Intro = () => {
  const navigate = useNavigate();
  return (
    <section className="why-choose-us-section">
      <div className="wcu-container">

        {/* Left Content Side */}
        <div className="wcu-content" data-aos="fade-right">
          <h2 className="wcu-heading" data-aos="fade-up">
<<<<<<< HEAD
            <span className="text-highlight">What we make</span>
=======
            <span className="text-highlight">WHY</span> CHOOSE US
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
          </h2>

          <p
            className="wcu-description"
            data-aos="fade-up"
            data-aos-delay="100"
          >
<<<<<<< HEAD
         Custom Diaries & Notebook, Desk Accessories, Steel Bottles & Drinkware,
            Paper Carry Bags, & Employee ID Cards & Ready-to-send <br></br>kits For Onboarding, Festivals & Events.
          </p>

          <ul className="wcu-list">
            <h3>How it works:</h3>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
               
              <span>
               
                Choose your products or tell us your budget.
=======
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
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
<<<<<<< HEAD
               We prepare a mockup with your logo.
=======
                Lorem ipsum dolor sit amet adipiscing elit. Tur adipiscing elit.
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
<<<<<<< HEAD
               You approve the design, and we produce and pack.
=======
                Lorem ipsum dolor sit amet adipiscing elit. Tur adipiscing elit.
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
              </span>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-check-circle-fill wcu-icon"></i>
              <span>
<<<<<<< HEAD
                We deliver to your office or directly to your recipients.
              </span>
            </li>

            <h3><br></br>Why choose us:</h3>
            <p>In-house Design Support, Bulk Pricing, A Sample Before Confirmed
              Order, <br></br>& One Team Handling Design, Printing & Delivery.</p>
=======
                Lorem ipsum dolor sit amet adipiscing elit. Tur adipiscing elit.
              </span>
            </li>
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
          </ul>

         <button
           className="wcu-btn"
             data-aos="zoom-in"
             data-aos-delay="600"
             onClick={() => navigate("/about")} >
<<<<<<< HEAD
               Get a Free Quote
=======
              Learn More
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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