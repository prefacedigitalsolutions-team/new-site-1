
// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";


//banar image
import banner from "../../../assets/images/clothing/cloth-01.jpg";

// staric image

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
    alt: "Modern fashion collection featuring stylish casual cap and accessories", // SEO friendly All section
  },
  {
    image: galleryFiles["../../images/clothing/t-shirt-2.jpg"],
    className: "tall",
    category: "Luxury Wear",
    title: "Elegant Clothing Style",
    alt: "Elegant clothing style with trendy cotton t-shirt for daily wear",
  },
  {
    image: galleryFiles["../../images/clothing/winter-wear-2.jpg"],
    className: "small",
    category: "Casual Wear",
    title: "Comfort Fashion",
    alt: "Comfortable winter wear jacket and warm clothing collection",
  },
  {
    image: galleryFiles["../../images/clothing/polo-t-shirt-1.jpg"],
    className: "small",
    category: "Premium Fabric",
    title: "Quality Materials",
    alt: "Premium fabric stylish polo t-shirt for men and women",
  },
  {
    image: galleryFiles["../../images/clothing/cloth-01.jpg"],
    className: "wide",
    category: "Designer Collection",
    title: "Contemporary Clothing",
    alt: "Contemporary clothing and designer apparel collection",
  },
  {
    image: galleryFiles["../../images/clothing/t-shirt-1.jpg"],
    className: "large",
    category: "Fashion Trends",
    title: "Latest Collection",
    alt: "Latest fashion trends and printed t-shirt collection",
  },
  {
    image: galleryFiles["../../images/clothing/cap-2.jpg"],
    className: "tall",
    category: "Luxury Style",
    title: "Premium Outfit",
    alt: "Premium outfit accessory with stylish casual cap",
  },
  {
    image: galleryFiles["../../images/clothing/other-1.jpg"],
    className: "small",
    category: "Daily Wear",
    title: "Modern Comfort",
    alt: "Modern comfort daily wear apparel and clothing accessories",
  },
  {
    image: galleryFiles["../../images/clothing/winter-wear-1.jpg"],
    className: "small",
    category: "Exclusive",
    title: "Special Collection",
    alt: "Exclusive winter wear and heavy fabric clothing range",
  },
  {
    image: galleryFiles["../../images/clothing/t-shirt-4.jpg"],
    className: "wide",
    category: "Fashion Studio",
    title: "Creative Designs",
    alt: "Creative designs and custom printed fashion t-shirts",
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



    </>
  );
}

export default Clothing;

