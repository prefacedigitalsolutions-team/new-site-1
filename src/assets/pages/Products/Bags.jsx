
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

// Banner image
import banner from "../../../assets/images/bags/bag-banar-1.jpg";

// Static image
import aboutImage from "../../../assets/images/bags/bag-banar-1.jpg";

// Automatically import all bag images
const bagImages = import.meta.glob(
  "../../images/bags/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = [
  {
    image: bagImages["../../images/bags/back-pack.jpg"],
    className: "large",
    category: "Premium Bags",
    title: "Luxury Bag Collection",
  },
  {
    image: bagImages["../../images/bags/bag-02.jpg"],
    className: "tall",
    category: "Corporate Bags",
    title: "Professional Carry Solutions",
  },
  {
    image: bagImages["../../images/bags/lether-bag.jpg"],
    className: "small",
    category: "Travel Collection",
    title: "Comfort Travel Bags",
  },
  {
    image: bagImages["../../images/bags/jute-bag.jpg"],
    className: "small",
    category: "Daily Essentials",
    title: "Stylish Utility Bags",
  },
  {
    image: bagImages["../../images/bags/canvas-bag.jpg"],
    className: "wide",
    category: "Executive Range",
    title: "Premium Office Bags",
  },
  {
    image: bagImages["../../images/bags/tote-bag.jpg"],
    className: "large",
    category: "Fashion Collection",
    title: "Modern Designer Bags",
  },
  {
    image: bagImages["../../images/bags/tote-bag-1.jpg"],
    className: "tall",
    category: "Business Solutions",
    title: "Corporate Branding Bags",
  },
  {
    image: bagImages["../../images/bags/paper-bag.jpg"],
    className: "small",
    category: "Backpacks",
    title: "Premium Backpack Series",
  },
  {
    image: bagImages["../../images/bags/laptop-bag.jpg"],
    className: "small",
    category: "Gift Collection",
    title: "Exclusive Gift Bags",
  },
  {
    image: bagImages["../../images/bags/bag-4.jpg"],
    className: "wide",
    category: "Luxury Collection",
    title: "Customized Premium Bags",
  },
];

function Bags() {
  return (
    <>
      <ProductBanner
        image={banner}
        title="Bag"
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

