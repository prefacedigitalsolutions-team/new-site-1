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
    category: "Premium Bags",
    title: "Luxury Bag Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Corporate Bags",
    title: "Professional Carry Solutions",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Travel Collection",
    title: "Comfort Travel Bags",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Daily Essentials",
    title: "Stylish Utility Bags",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Executive Range",
    title: "Premium Office Bags",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Fashion Collection",
    title: "Modern Designer Bags",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Business Solutions",
    title: "Corporate Branding Bags",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Backpacks",
    title: "Premium Backpack Series",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Gift Collection",
    title: "Exclusive Gift Bags",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Luxury Collection",
    title: "Customized Premium Bags",
  },
];


function Bags() {
  return (
    <>
      <ProductBanner
        title="Bags"
        image={banner}
      />

      <ProductIntro
        title="Premium Bag Collection"
        description="Our premium bag collection is designed to combine durability, functionality, and modern style. Crafted with quality materials and thoughtful designs, these bags are ideal for corporate gifting, travel, daily use, and brand promotions."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default Bags;