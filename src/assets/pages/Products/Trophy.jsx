import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

import banner from "../../../assets/images/hero/home-banar-2.jpg";
import aboutImage from "../../../assets/images/hero/home-banar-2.jpg";


// Auto import all hero images
const galleryFiles = import.meta.glob(
  "../../images/hero/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);


const galleryImages = [
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Premium Trophy",
    title: "Elegant Trophy Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Corporate Awards",
    title: "Professional Recognition Trophy",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Achievement Awards",
    title: "Premium Achievement Trophy",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Sports Trophy",
    title: "Championship Trophy Design",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Exclusive Award Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Corporate Gifts",
    title: "Customized Trophy Designs",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Trophy Series",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Recognition",
    title: "Award Memento Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Special Awards",
    title: "Custom Trophy Solutions",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Trophy Designs",
  },
];


function Trophy() {
  return (
    <>
      <ProductBanner
        title="Trophy & Awards"
        image={banner}
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