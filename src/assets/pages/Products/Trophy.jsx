
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";


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
    category: "Premium",
    title: "mementors",
    alt: "Premium corporate mementos and engraved wooden award plaques",
  },

  {
    image: trophyImages["../../images/trophy/trophy-long.jpg"],
    className: "tall",
    category: "Corporate Awards",
    title: "Professional Recognition Trophy",
    alt: "Professional recognition long trophy cup for corporate winners",
  },
  
  {
    image: trophyImages["../../images/trophy/metal-trophy.jpg"],
    className: "small",
    category: "Awards",
    title: "Trophy",
    alt: "Durable metal award trophy for corporate achievements and events",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy-2.jpg"],
    className: "small",
    category: "metal",
    title: "Trophy",
    alt: "Stylish metal trophy with sleek finish for competitions and awards",
  },
  {
    image: trophyImages["../../images/trophy/mementos.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Exclusive Award Collection",
    alt: "Exclusive award collection featuring luxury custom mementos",
  },
  {
    image: trophyImages["../../images/trophy/start-trophy.jpg"],
    className: "large",
    category: "Corporate Gifts",
    title: "Customized Trophy Designs",
    alt: "Customized star trophy design for excellence and corporate gifting",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy-l.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Trophy Series",
    alt: "Designer large metal trophy series with premium polish",
  },
  {
    image: trophyImages["../../images/trophy/kabaddi.jpg"],
    className: "small",
    category: "Trophy",
    title: "kabaddi",
    alt: "Special kabaddi sports championship trophy and winner cup",
  },
  {
    image: trophyImages["../../images/trophy/match-trophy.jpg"],
    className: "small",
    category: "Trophy",
    title: "Cricket",
    alt: "Cricket sports tournament match trophy and winner award",
  },
  {
    image: trophyImages["../../images/trophy/start-trophy-1.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Trophy Designs",
    alt: "Premium start trophy designs for corporate events and functions",
  },
];

function Trophy() {
  return (
    <>
      <ProductBanner
        image={banner}
        title="Trophy"
      />

      <ProductIntro
        title="Premium Trophy & Award Collection"
        description="Our premium trophy and award collection is designed to celebrate achievements, success, and excellence. Crafted with elegant designs and high-quality finishes, our trophies are perfect for corporate events, sports competitions, employee recognition, and special occasions."
      />

      <Galary images={galleryImages} />


    </>
  );
}

export default Trophy;

