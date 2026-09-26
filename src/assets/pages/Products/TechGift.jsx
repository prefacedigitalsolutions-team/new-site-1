
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";


// Banner image
import banner from "../../../assets/images/tech-gift/tech-gift-banar-1.jpg";



// Auto import all Tech Gift images
const galleryFiles = import.meta.glob(
  "../../images/tech-gift/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);



const galleryImages = [
  {
    image: galleryFiles["../../images/tech-gift/power-bank.jpg"],
    className: "large",
    category: "Tech Collection",
    title: "Premium Tech Accessories",
    alt: "Premium portable power bank and tech accessories for corporate gifting", // seo friendly all section
  },
  {
    image: galleryFiles["../../images/tech-gift/usb.jpg"],
    className: "tall",
    category: "Smart Gadgets",
    title: "Modern Technology Gifts",
    alt: "Modern custom branded USB flash drive and smart technology gadgets",
  },
  {
    image: galleryFiles["../../images/tech-gift/phone-stand.jpg"],
    className: "small",
    category: "Corporate Gifts",
    title: "Branded Tech Products",
    alt: "Branded mobile phone stand for office desk and corporate gifting",
  },
  {
    image: galleryFiles["../../images/tech-gift/wall-clock.jpg"],
    className: "small",
    category: "Innovation",
    title: "Smart Office Essentials",
    alt: "Smart office wall clock and innovative tech gift items",
  },
  {
    image: galleryFiles["../../images/tech-gift/usb-2.jpg"],
    className: "wide",
    category: "Premium Range",
    title: "Exclusive Tech Collection",
    alt: "Exclusive tech collection featuring premium promotional USB drives",
  },
  {
    image: galleryFiles["../../images/tech-gift/digital-clock-pen.jpg"],
    className: "large",
    category: "Digital Accessories",
    title: "Next Generation Gadgets",
    alt: "Next-generation digital clock pen set with custom branding options",
  },
  {
    image: galleryFiles["../../images/tech-gift/phone-stand-1.jpg"],
    className: "tall",
    category: "Corporate Solutions",
    title: "Professional Tech Gifts",
    alt: "Professional adjustable phone stand and tech desk accessories",
  },
  {
    image: galleryFiles["../../images/tech-gift/digital-clock-1.jpg"],
    className: "small",
    category: "Daily Use",
    title: "Useful Tech Accessories",
    alt: "Useful digital desk clock accessory for office tables and rooms",
  },
  {
    image: galleryFiles["../../images/tech-gift/wall-clock-1.jpg"],
    className: "small",
    category: "Premium Gifts",
    title: "Luxury Tech Items",
    alt: "Luxury wall clock and executive corporate tech gift items",
  },
  {
    image: galleryFiles["../../images/tech-gift/power-bank-1.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Advanced Technology Gifts",
    alt: "Advanced technology fast-charging power bank for executive gifting",
  },
];

function TechGift() {
  return (
    <>
      <ProductBanner
        image={banner}
        title="Gift"
      />

      <ProductIntro
        title="Premium Tech Gift Collection"
        description="Our premium tech gift collection combines innovation, functionality, and modern design. From smart accessories to corporate technology solutions, each product is carefully selected to deliver a premium gifting experience for clients, employees, and business partners."
      />

      <Galary images={galleryImages} />

    </>
  );
}

export default TechGift;

