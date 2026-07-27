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
    category: "Premium Planters",
    title: "Elegant Indoor Planter Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Corporate Green Gifts",
    title: "Stylish Office Planters",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Mini Planters",
    title: "Compact Decorative Planters",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Eco Collection",
    title: "Sustainable Green Solutions",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Premium Designer Planters",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Corporate Collection",
    title: "Customized Planter Gifts",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Modern Decor",
    title: "Contemporary Planter Designs",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Desk Accessories",
    title: "Mini Desk Planters",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Green Gifts",
    title: "Nature Inspired Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Decorative Planters",
  },
];


function Planters() {
  return (
    <>
      <ProductBanner
        title="Planters"
        image={banner}
      />

      <ProductIntro
        title="Premium Planters Collection"
        description="Our premium planter collection brings together nature, elegance, and modern design. Crafted for homes, offices, and corporate gifting, these planters add a refreshing touch of greenery while creating a stylish and professional environment."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default Planters;