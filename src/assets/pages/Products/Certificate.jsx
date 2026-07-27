import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";

import banner from "../../../assets/images/hero/home-banar-2.jpg";
import aboutImage from "../../../assets/images/hero/home-banar-2.jpg";


// Auto import all hero images
const galleryFiles = import.meta.glob(
  "../../images/hero/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);


const galleryImages = [
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Premium Certificates",
    title: "Elegant Certificate Designs",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Corporate Awards",
    title: "Professional Recognition",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Achievement",
    title: "Premium Certificate Frame",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Custom Design",
    title: "Personalized Certificates",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Luxury Collection",
    title: "Exclusive Certificate Range",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "large",
    category: "Business Recognition",
    title: "Corporate Certificate Solutions",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Certificate Collection",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Institutional",
    title: "Academic Certificates",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "small",
    category: "Special Awards",
    title: "Recognition Certificates",
  },
  {
    image: galleryFiles["../../images/hero/home-banar-2.jpg"],
    className: "wide",
    category: "Customized Range",
    title: "Premium Certificate Designs",
  },
];


function Certificate() {
  return (
    <>
      <ProductBanner
        title="Certificates"
        image={banner}
      />

      <ProductIntro
        title="Premium Certificate Collection"
        description="Our premium certificate collection is designed to provide a professional and elegant way to recognize achievements, awards, and milestones. Crafted with high-quality materials and refined finishing, each certificate represents excellence and appreciation."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
    </>
  );
}

export default Certificate;