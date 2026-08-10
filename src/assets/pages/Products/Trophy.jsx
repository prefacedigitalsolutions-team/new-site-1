
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

// Banner image
import banner from "../../../assets/images/trophy/trophy-banar-1.jpg";

// Static image
import aboutImage from "../../../assets/images/trophy/start-trophy.jpg";

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
  },
  {
    image: trophyImages["../../images/trophy/trophy-long.jpg"],
    className: "tall",
    category: "Corporate Awards",
    title: "Professional Recognition Trophy",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy.jpg"],
    className: "small",
    category: "Awards",
    title: "Trophy",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy-2.jpg"],
    className: "small",
    category: "metal",
    title: "Trophy",
  },
  {
    image: trophyImages["../../images/trophy/mementos.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Exclusive Award Collection",
  },
  {
    image: trophyImages["../../images/trophy/start-trophy.jpg"],
    className: "large",
    category: "Corporate Gifts",
    title: "Customized Trophy Designs",
  },
  {
    image: trophyImages["../../images/trophy/metal-trophy-l.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Trophy Series",
  },
  {
    image: trophyImages["../../images/trophy/kabaddi.jpg"],
    className: "small",
    category: "Trophy",
    title: "kabaddi",
  },
  {
    image: trophyImages["../../images/trophy/match-trophy.jpg"],
    className: "small",
     category: "Trophy",
    title: "Cricket",
  },
  {
    image: trophyImages["../../images/trophy/start-trophy-1.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Trophy Designs",
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

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default Trophy;

