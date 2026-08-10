
// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

//banar image
import banner from "../../../assets/images/clothing/clothing-banar-1.jpg";

// staric image
import aboutImage from "../../../assets/images/clothing/cap-1.jpg";

// Automatically import all clothing images
const galleryFiles = import.meta.glob(
  "../../images/clothing/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = [
  {
    image: galleryFiles["../../images/clothing/cap-1.jpg"],
    className: "large",
    category: "Premium Clothing",
    title: "Modern Fashion Collection",
  },

  {
    image: galleryFiles["../../images/clothing/t-shirt-2.jpg"],
    className: "tall",
    category: "Luxury Wear",
    title: "Elegant Clothing Style",
  },

  {
    image: galleryFiles["../../images/clothing/winter-wear-2.jpg"],
    className: "small",
    category: "Casual Wear",
    title: "Comfort Fashion",
  },

  {
    image: galleryFiles["../../images/clothing/polo-t-shirt-1.jpg"],
    className: "small",
    category: "Premium Fabric",
    title: "Quality Materials",
  },

  {
    image: galleryFiles["../../images/clothing/cloth-01.jpg"],
    className: "wide",
    category: "Designer Collection",
    title: "Contemporary Clothing",
  },

  {
    image: galleryFiles["../../images/clothing/t-shirt-1.png"],
    className: "large",
    category: "Fashion Trends",
    title: "Latest Collection",
  },

  {
    image: galleryFiles["../../images/clothing/cap-2.jpg"],
    className: "tall",
    category: "Luxury Style",
    title: "Premium Outfit",
  },

  {
    image: galleryFiles["../../images/clothing/other-1.jpg"],
    className: "small",
    category: "Daily Wear",
    title: "Modern Comfort",
  },

  {
    image: galleryFiles["../../images/clothing/winter-wear-1.jpg"],
    className: "small",
    category: "Exclusive",
    title: "Special Collection",
  },

  {
    image: galleryFiles["../../images/clothing/t-shirt-4.jpg"],
    className: "wide",
    category: "Fashion Studio",
    title: "Creative Designs",
  },

];
                   
function Clothing() {
  return (
    <>

      <ProductBanner title="Clothing"image={banner}/>

      <ProductIntro
        title="Premium Clothing Collection"
        description="Our premium clothing collection is designed with a perfect blend of comfort, style, and quality. Crafted using superior fabrics and modern techniques, every piece reflects elegance, durability, and contemporary fashion trends for everyday and special occasions."/>

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />

    </>
  );
}

export default Clothing;

