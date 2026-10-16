// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import SEO from "../../../components/SEO";

// Banner image
import banner from "../../../assets/images/trophy/trophy-banar-1.jpg";

// Automatically import all trophy images
const trophyImages = import.meta.glob(
  "../../images/trophy/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = [
  {
    image: trophyImages["../../images/trophy/mementors.jpg"],
    className: "large",
    category: "",
    title: "",
    alt: "Premium corporate mementos and engraved wooden award plaques",
  },
  {
    image: trophyImages["../../images/trophy/trophy-long.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Professional recognition long crystal trophy cup for corporate winners",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Durable metal award trophy for corporate achievements and events",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy-2.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Stylish metal trophy with sleek finish for competitions and awards",
  },
  {
    image: trophyImages["../../images/trophy/mementos.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Exclusive award collection featuring luxury custom mementos",
  },
  {
    image: trophyImages["../../images/trophy/start-trophy.jpg"],
    className: "large",
    category: "",
    title: "",
    alt: "Customized star trophy design for excellence and corporate gifting",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy-l.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Designer large metal trophy series with premium polish",
  },
  {
    image: trophyImages["../../images/trophy/kabaddi.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Special kabaddi sports championship crystal trophy and winner cup",
  },
  {
    image: trophyImages["../../images/trophy/match-trophy.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Cricket and sports tournament match trophy and winner award",
  },
  {
    image: trophyImages["../../images/trophy/start-trophy-1.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Premium star trophy designs for corporate events and functions",
  },
];

function Trophy() {
  return (
    <>
      {/* Trophy Page ke liye SEO */}
      <SEO 
        title="Custom Trophies and Awards | Corporate and Sports Trophies" 
        description="Premium custom trophies, medals and awards for corporate events, sports and schools. Engraved plaques and cups with fast delivery." 
        keywords="crystal trophies, mementos, star trophy, metal trophy, corporate awards, sports trophies"
      />

      <ProductBanner
        image={banner}
        title="Custom Trophies and Awards for Every Achievement"
      />

      <ProductIntro
  subTag="Awards & Recognition"
  title=""
  leftContent={
    <>
      <p className="intro-paragraph">
        A trophy turns a moment of success into a lasting memory. We make premium trophies and awards for corporate recognition, sports tournaments, school events and special occasions, finished in metal, wood, crystal and acrylic with your text, logo and event details.
      </p>

      <div className="customisation-highlights" style={{ marginTop: "30px" }}>
        <h4 className="highlights-title">Trophy and Award Types</h4>
        <ul className="highlights-list">
          <li>Metal cups and sports trophies (cricket, kabaddi, kho-kho, running and more)</li>
          <li>Wooden plaques and shields</li>
          <li>Crystal and acrylic awards</li>
          <li>Medals and ribbons</li>
          <li>Employee of the Year and long-service awards</li>
        </ul>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "30px" }}>
        <h4 className="highlights-title">Customisation</h4>
        <p className="intro-paragraph" style={{ marginBottom: "0", fontSize: "15px" }}>
          Engraved plates with name, event, year and logo. We can design a full trophy set so the series looks consistent across winners and runners-up.
        </p>
      </div>
    </>
  }
  rightContent={
    <>
      <div className="customisation-highlights">
        <h4 className="highlights-title">Ideal For</h4>
        <ul className="highlights-list">
          <li>Annual corporate awards, sports meets, school and college prize distributions, dealer and partner conferences and employee recognition programs.</li>
        </ul>

        <h4 className="highlights-title" style={{ marginTop: "25px" }}>FAQ</h4>
        <ul className="highlights-list">
        <li><strong>Can you make trophies at short notice?</strong><br></br>
        Yes, depending on the design. Share your event date and we will confirm the timeline.</li>


          <li><strong>Can we get a mix of sizes for winners and runners-up?</strong> <br></br>
          
          Yes. We can match the design in different sizes.</li>
        </ul>

        <a href="#quote" className="quote-btn" style={{ marginTop: "25px", display: "inline-block" }}>Get a quote</a>
      </div>
    </>
  }
/>
      <Galary images={galleryImages} />
    </>
  );
}

export default Trophy;