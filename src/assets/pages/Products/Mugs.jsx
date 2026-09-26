
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";


// Banner image
import banner from "../../../assets/images/mugs/mug-banar-1.jpg";

// Static image


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
    alt: "Elegant coffee mug collection featuring premium ceramic design", // SEO FRiendly Allsection
  },
  {
    image: galleryFiles["../../images/mugs/mug-02.jpg"],
    className: "tall",
    category: "Corporate Gifts",
    title: "Branded Mug Design",
    alt: "Branded corporate gift mug for business promotions and events",
  },
  {
    image: galleryFiles["../../images/mugs/mug-3.jpg"],
    className: "small",
    category: "Ceramic Collection",
    title: "Premium Ceramic Mug",
    alt: "Premium ceramic coffee mug with smooth finish",
  },
  {
    image: galleryFiles["../../images/mugs/mug-4.jpg"],
    className: "small",
    category: "Custom Printing",
    title: "Personalized Mug",
    alt: "Personalized custom printed mug for special occasions",
  },
  {
    image: galleryFiles["../../images/mugs/mug-5.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Modern Mug Collection",
    alt: "Modern mug collection with stylish design and durable quality",
  },
  {
    image: galleryFiles["../../images/mugs/mug-2.jpg"],
    className: "large",
    category: "Office Essentials",
    title: "Professional Mug Series",
    alt: "Professional ceramic mug series ideal for office desk use",
  },
  {
    image: galleryFiles["../../images/mugs/tumbler-1.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Coffee Mug",
    alt: "Designer coffee tumbler and mug with premium finish",
  },
  {
    image: galleryFiles["../../images/mugs/coaster-1.jpg"],
    className: "small",
    category: "Daily Use",
    title: "Comfort Handle Mug",
    alt: "Comfort handle coffee mug and matching coaster set",
  },
  {
    image: galleryFiles["../../images/mugs/printed-mug.jpg"],
    className: "small",
    category: "Gift Collection",
    title: "Special Edition Mug",
    alt: "Special edition printed mug perfect for gifting",
  },
  {
    image: galleryFiles["../../images/mugs/cofy-mug.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Corporate Mug",
    alt: "Exclusive premium corporate coffee mug design",
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


    </>
  );
}

export default Mugs;

