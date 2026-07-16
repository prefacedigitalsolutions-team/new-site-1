import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/ProductIntro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";
import banner from "../../../assets/images/hero/home-banar-2.jpg";

// Array ko function se bahar nikal diya taaki baar-baar render na ho
const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    className: "large",
    category: "Premium Collection",
    title: "Modern Calendar Design"
  },
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    className: "tall",
    category: "Luxury Finish",
    title: "Elegant Product"
  },
  {
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    className: "small",
    category: "Design",
    title: "Minimal Look"
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    className: "small",
    category: "Quality",
    title: "Premium Details"
  },
  {
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    className: "wide",
    category: "Interior Style",
    title: "Contemporary Experience"
  },
  {
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
    className: "large",
    category: "Premium Collection",
    title: "Modern Calendar Design"
  },
  {
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    className: "tall",
    category: "Luxury Finish",
    title: "Elegant Product"
  },
  {
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    className: "wide",
    category: "Interior Style",
    title: "Contemporary Experience"
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    className: "small",
    category: "Design",
    title: "Minimal Look"
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    className: "small",
    category: "Design",
    title: "Minimal Look"
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    className: "small",
    category: "Quality",
    title: "Premium Details"
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    className: "large",
    category: "Premium Collection",
    title: "Modern Calendar Design"
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    className: "small",
    category: "Design",
    title: "Minimal Look"
  }
];

function Calendar() {
  return (
    <>
      <ProductBanner
        title="Calendar"
        image={banner}
      />

      <ProductIntro
        title="Premium Calendar Collection"
        description="Our premium calendar collection is thoughtfully designed to combine functionality with refined aesthetics. Crafted using high-quality materials and modern manufacturing standards, each calendar delivers durability, elegance, and reliable performance, making it an ideal choice for contemporary residential and commercial spaces."
      />

      {/* Optimized data is passed here smoothly */}
      <Galary images={galleryImages} />

      <ModernStatic />
    </>
  );
}

export default Calendar;