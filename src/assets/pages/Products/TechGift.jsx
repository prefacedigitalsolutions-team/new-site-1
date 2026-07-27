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
    category: "Tech Collection",
    title: "Premium Tech Accessories",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Smart Gadgets",
    title: "Modern Technology Gifts",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Corporate Gifts",
    title: "Branded Tech Products",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Innovation",
    title: "Smart Office Essentials",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Premium Range",
    title: "Exclusive Tech Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Digital Accessories",
    title: "Next Generation Gadgets",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Corporate Solutions",
    title: "Professional Tech Gifts",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Daily Use",
    title: "Useful Tech Accessories",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Premium Gifts",
    title: "Luxury Tech Items",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Advanced Technology Gifts",
  },
];


function TechGift() {
  return (
    <>
      <ProductBanner
        title="Tech Gifts"
        image={banner}
      />

      <ProductIntro
        title="Premium Tech Gift Collection"
        description="Our premium tech gift collection combines innovation, functionality, and modern design. From smart accessories to corporate technology solutions, each product is carefully selected to deliver a premium gifting experience for clients, employees, and business partners."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default TechGift;