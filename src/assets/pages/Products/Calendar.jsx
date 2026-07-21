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
    category: "Premium Collection",
    title: "Modern Calendar Design",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Luxury Finish",
    title: "Elegant Product",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Design",
    title: "Minimal Look",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Quality",
    title: "Premium Details",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Interior Style",
    title: "Contemporary Experience",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Premium Collection",
    title: "Modern Calendar Design",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Luxury Finish",
    title: "Elegant Product",
  },
   {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Quality",
    title: "Premium Details",
  },
   {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Quality",
    title: "Premium Details",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Interior Style",
    title: "Contemporary Experience",
  },
  
];


function Calendar() {
  return (
    <>
      <ProductBanner
        title="Calendar"
        image={banner}
      />

      <ProductIntro
        title="Premium Calendar Collection"
        description="Our premium calendar collection is thoughtfully designed to combine functionality with refined aesthetics. Crafted using high-quality materials and modern manufacturing standards, each calendar delivers durability, elegance, and reliable performance, making it an ideal choice for contemporary residential and commercial spaces."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default Calendar;


