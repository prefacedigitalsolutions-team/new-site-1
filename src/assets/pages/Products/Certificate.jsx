// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";


// Banner image
import banner from "../../../assets/images/certificate/certificate-banar-1.jpg";

// Static image


// Automatically import all certificate images
const galleryFiles = import.meta.glob(
  "../../images/certificate/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);



const galleryImages = [
  {
    image: galleryFiles["../../images/certificate/certificate-01.jpg"],
    className: "large",
    category: "Premium Certificates",
    title: "Elegant Certificate Designs",
    alt: "Elegant custom certificate design for business and academic recognition",  // SEO frendly all section
  },
  {
    image: galleryFiles["../../images/certificate/certificate-2.jpg"],
    className: "tall",
    category: "Corporate Awards",
    title: "Professional Recognition",
    alt: "Professional corporate award certificate for employee appreciation",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-3.jpg"],
    className: "small",
    category: "Achievement",
    title: "Premium Certificate Frame",
    alt: "Premium quality certificate frame for professional achievements",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-4.jpg"],
    className: "small",
    category: "Custom Design",
    title: "Personalized Certificates",
    alt: "Personalized custom-designed certificate for special events",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-5.jpg"],
    className: "wide",
    category: "Luxury Collection",
    title: "Exclusive Certificate Range",
    alt: "Exclusive range of luxury certificate templates and printing",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-6.jpg"],
    className: "large",
    category: "Business Recognition",
    title: "Corporate Certificate Solutions",
    alt: "Corporate certificate solutions for businesses and institutions",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-7.jpg"],
    className: "tall",
    category: "Premium Finish",
    title: "Designer Certificate Collection",
    alt: "Designer certificate collection with premium finish and borders",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-8.jpg"],
    className: "small",
    category: "Institutional",
    title: "Academic Certificates",
    alt: "Academic and school graduation certificate templates",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-9.jpg"],
    className: "small",
    category: "Special Awards",
    title: "Recognition Certificates",
    alt: "Special awards and recognition certificates for excellence",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-10.jpg"],
    className: "wide",
    category: "Customized Range",
    title: "Premium Certificate Designs",
    alt: "Customized premium certificate designs for professional achievements",
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

  
    </>
  ); 
}

export default Certificate;