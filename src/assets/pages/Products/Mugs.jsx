
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

// Banner image
import banner from "../../../assets/images/mugs/mug-banar-1.jpg";

// Static image
import aboutImage from "../../../assets/images/mugs/mug-5.jpg";

// Automatically import all mug images
const galleryFiles = import.meta.glob(
  "../../images/mugs/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = [
  {
    image: galleryFiles["../../images/mugs/mug-1.jpg"],
    className: "large",
    category: "Premium Mugs",
    title: "Elegant Coffee Mug Collection",
  },
  {
    image: galleryFiles["../../images/mugs/mug-02.jpg"],
    className: "tall",
    category: "Corporate Gifts",
    title: "Branded Mug Design",
  },
  {
    image: galleryFiles["../../images/mugs/mug-3.jpg"],
    className: "small",
    category: "Ceramic Collection",
    title: "Premium Ceramic Mug",
  },
  {
    image: galleryFiles["../../images/mugs/mug-4.jpg"],
    className: "small",
    category: "Custom Printing",
    title: "Personalized Mug",
  },
  {
    image: galleryFiles["../../images/mugs/mug-5.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Modern Mug Collection",
  },
  {
    image: galleryFiles["../../images/mugs/mug-2.jpg"],
    className: "large",
    category: "Office Essentials",
    title: "Professional Mug Series",
  },
  {
    image: galleryFiles["../../images/mugs/tumbler-1.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Coffee Mug",
  },
  {
    image: galleryFiles["../../images/mugs/coaster-1.jpg"],
    className: "small",
    category: "Daily Use",
    title: "Comfort Handle Mug",
  },
  {
    image: galleryFiles["../../images/mugs/printed-mug.jpg"],
    className: "small",
    category: "Gift Collection",
    title: "Special Edition Mug",
  },
  {
    image: galleryFiles["../../images/mugs/cofy-mug.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Corporate Mug",
  },
];

function Mugs() {
  return (
    <>
      <ProductBanner
        title="Mug"
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

