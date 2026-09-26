
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";


// Banner image
import banner from "../../../assets/images/bags/bag-banar-1.jpg";



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
    alt: "Luxury leather backpack for stylish travel and daily use", // SEO Optimized Alt
  }, 
  {
    image: bagImages["../../images/bags/bag-02.jpg"],
    className: "tall",
    category: "Corporate Bags",
    title: "Professional Carry Solutions",
    alt: "Professional corporate laptop bag with leather finish",
  },
  {
    image: bagImages["../../images/bags/lether-bag.jpg"],
    className: "small",
    category: "Travel Collection",
    title: "Comfort Travel Bags",
    alt: "Durable leather travel bag for comfortable journeys",
  },
  {
    image: bagImages["../../images/bags/jute-bag.jpg"],
    className: "small",
    category: "Daily Essentials",
    title: "Stylish Utility Bags",
    alt: "Eco-friendly stylish jute utility bag for daily shopping",
  },
  {
    image: bagImages["../../images/bags/canvas-bag.jpg"],
    className: "wide",
    category: "Executive Range",
    title: "Premium Office Bags",
    alt: "Premium canvas office bag for executive professionals",
  },
  {
    image: bagImages["../../images/bags/tote-bag.jpg"],
    className: "large",
    category: "Fashion Collection",
    title: "Modern Designer Bags",
    alt: "Modern designer tote bag for fashion-forward individuals",
  },
  { 
    image: bagImages["../../images/bags/tote-bag-1.jpg"],
    className: "tall",
    category: "Business Solutions",
    title: "Corporate Branding Bags",
    alt: "Corporate branding bag for business promotions and events",
  },
  {
    image: bagImages["../../images/bags/paper-bag.jpg"],
    className: "small",
    category: "Backpacks",
    title: "Premium Backpack Series",
    alt: "Premium lightweight backpack for students and travelers",
  },
  {
    image: bagImages["../../images/bags/laptop-bag.jpg"],
    className: "small",
    category: "Gift Collection",
    title: "Exclusive Gift Bags",
    alt: "Exclusive gift bag perfect for corporate gifting",
  },
  {
    image: bagImages["../../images/bags/bag-4.jpg"],
    className: "wide",
    category: "Luxury Collection",
    title: "Customized Premium Bags",
    alt: "Customized luxury premium bag with unique design",
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

    </>
  );
}

export default Bags;




