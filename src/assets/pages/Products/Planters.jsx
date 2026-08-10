
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

// Banner image
import banner from "../../../assets/images/planters/plant-5.jpg";

// Static image
import aboutImage from "../../../assets/images/planters/plant-5.jpg";

// Automatically import all planter images
const planterImages = import.meta.glob(
  "../../../assets/images/planters/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = [
  {
    image: planterImages["../../images/planters/plant-1.jpg"],
    className: "large",
    category: "Premium Planters",
    title: "Elegant Indoor Planter Collection",
  },
  {
    image: planterImages["../../images/planters/plant-long.jpg"],
    className: "tall",
    category: "Corporate Green Gifts",
    title: "Stylish Office Planters",
  },
  {
    image: planterImages["../../images/planters/plant-3.jpg"],
    className: "small",
    category: "Mini Planters",
    title: "Compact Decorative Planters",
  },
  {
    image: planterImages["../../images/planters/plant-3.jpg"],
    className: "small",
    category: "Eco Collection",
    title: "Sustainable Green Solutions",
  },
  {
    image: planterImages["../../images/planters/plant-5.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Premium Designer Planters",
  },
  {
    image: planterImages["../../images/planters/plant-1.jpg"],
    className: "large",
    category: "Corporate Collection",
    title: "Customized Planter Gifts",
  },
  {
    image: planterImages["../../images/planters/plant-long.jpg"],
    className: "tall",
    category: "Modern Decor",
    title: "Contemporary Planter Designs",
  },
  {
    image: planterImages["../../images/planters/plant-3.jpg"],
    className: "small",
    category: "Desk Accessories",
    title: "Mini Desk Planters",
  },
  {
    image: planterImages["../../images/planters/plant-3.jpg"],
    className: "small",
    category: "Green Gifts",
    title: "Nature Inspired Collection",
  },
  {
    image: planterImages["../../images/planters/plant-5.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Decorative Planters",
  },
];

function Planters() {
  return (
    <>
      <ProductBanner
        image={banner}
        title="Planters"
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

