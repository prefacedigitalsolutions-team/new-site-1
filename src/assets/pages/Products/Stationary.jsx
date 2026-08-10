import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

//banar image
import banner from "../../images/stationary/stationary-banar-1.jpg";

// static image
import aboutImage from "../../../assets/images/stationary/pen-2.jpg";

// Automatically import all calendar images
const calendarImages = import.meta.glob(
  "../../images/stationary/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = [
  {
    image: calendarImages["../../images/stationary/Diary-01.jpg"],
    className: "large",
    category: "Premium Collection",
    title: "Modern Calendar Design",
  },
  {
    image: calendarImages["../../images/stationary/pen-3.jpg"],
    className: "tall",
    category: "Luxury Finish",
    title: "Elegant Calendar",
  },
  {
    image: calendarImages["../../images/stationary/Nootbook-1.jpg"],
    className: "small",
    category: "Design",
    title: "Minimal Calendar Look",
  },
  {
    image: calendarImages["../../images/stationary/calendar-1.jpg"],
    className: "small",
    category: "Quality",
    title: "Premium Calendar Details",
  },
  {
    image: calendarImages["../../images/stationary/pen-2.jpg"],
    className: "wide",
    category: "Interior Style",
    title: "Contemporary Calendar",
  },
  {
    image: calendarImages["../../images/stationary/calendar-01.jpg"],
    className: "large",
    category: "Premium Collection",
    title: "Modern Desk Calendar",
  },
  {
    image: calendarImages["../../images/stationary/pen-1.jpg"],
    className: "tall",
    category: "Luxury Finish",
    title: "Elegant Office Calendar",
  },
  {
    image: calendarImages["../../images/stationary/Diary-1.jpg"],
    className: "small",
    category: "Quality",
    title: "Premium Calendar Design",
  },
  {
    image: calendarImages["../../images/stationary/table-calendar.jpg"],
    className: "small",
    category: "Quality",
    title: "Professional Calendar",
  },
  {
    image: calendarImages["../../images/stationary/notebook-2.jpg"],
    className: "wide",
    category: "Interior Style",
    title: "Contemporary Calendar Collection",
  },
];

function Calendar() {
  return (
    <>
      <ProductBanner
        title="Stationary"
        image={banner}
      />

      <ProductIntro
        title="Premium Stationary Collection"
        description="Our premium calendar collection is thoughtfully designed to combine functionality with refined aesthetics. Crafted using high-quality materials and modern manufacturing standards, each calendar delivers durability, elegance, and reliable performance, making it an ideal choice for contemporary residential and commercial spaces."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default Calendar;