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
    category: "Premium Mugs",
    title: "Elegant Coffee Mug Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Corporate Gifts",
    title: "Branded Mug Design",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Ceramic Collection",
    title: "Premium Ceramic Mug",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Custom Printing",
    title: "Personalized Mug",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Modern Mug Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Office Essentials",
    title: "Professional Mug Series",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Coffee Mug",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Daily Use",
    title: "Comfort Handle Mug",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Gift Collection",
    title: "Special Edition Mug",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Corporate Mug",
  },
];


function Mugs() {
  return (
    <>
      <ProductBanner
        title="Mugs"
        image={banner}
      />

      <ProductIntro
        title="Premium Mug Collection"
        description="Our premium mug collection is designed to bring together style, quality, and functionality. Crafted with high-quality materials and modern designs, these mugs are perfect for corporate gifting, branding, and everyday use."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default Mugs;