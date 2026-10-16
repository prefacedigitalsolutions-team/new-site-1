// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import SEO from "../../../components/SEO"; // SEO Component import kiya

//banar image
import banner from "../../../assets/images/clothing/cloth-01.jpg";



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
    category: "",
    title: "",
    alt: "Stylish casual caps and headwear for outdoor and promotional use",
  },
  {
    image: galleryFiles["../../images/clothing/t-shirt-2.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Trendy cotton t-shirt for daily wear and corporate events",
  },
  {
    image: galleryFiles["../../images/clothing/winter-wear-2.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Comfortable winter wear jacket and warm clothing collection",
  },
  {
    image: galleryFiles["../../images/clothing/polo-t-shirt-1.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Premium fabric stylish polo t-shirt for men and women",
  },
  {
    image: galleryFiles["../../images/clothing/t-shirt-l.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Contemporary clothing and custom corporate apparel collection",
  },
  {
    image: galleryFiles["../../images/clothing/t-shirt-1.jpg"],
    className: "large",
    category: "",
    title: "",
    alt: "Latest fashion trends and custom printed t-shirt collection",
  },
  {
    image: galleryFiles["../../images/clothing/cap-long.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Premium outfit accessory with stylish branded sports caps",
  },
  
 
];
             
function Clothing() {
  return (
    <>
      {/* Clothing Page ke liye SEO */}
      <SEO 
        title="Custom Corporate T-Shirts with Logo Printing | Bulk Orders" 
        description="Order custom corporate T-shirts with your company logo. Polo, round neck and event tees with screen print, DTF or embroidery. Bulk pricing, pan-India delivery." 
        keywords="corporate t-shirts Branding, polo t-shirts with Branding, custom caps, promotional clothing"
      />

      <ProductBanner
       title="Custom Corporate T-Shirts with Your Brand Logo" 
       image={banner}/>

     <ProductIntro
  subTag="Overview"
  title=""
  leftContent={
    <p className="intro-paragraph">
      Put your brand on something your team and clients will actually wear. We supply custom corporate T-shirts in round neck, polo and collared styles, in cotton, cotton-blend and dry-fit fabrics. Every order is customised with your company logo, tagline or event artwork and delivered in bulk.<br></br>
        Whether it's a staff uniform, an onboarding kit, a conference giveaway or a festive gift, we match colours to your brand guidelines and share a digital mock-up for approval before production starts. Our in-house design team can also clean up or vectorise your logo if you don't have a print-ready file.<br></br>
    </p>
  }
  rightContent={
    <>
      <p className="intro-paragraph">
       
      </p>

      <div className="customisation-highlights">
        <h4 className="highlights-title">CUSTOMISATION HIGHLIGHTS</h4>
        <ul className="highlights-list">
          <li><strong>Logo placement:</strong> Left chest, centre chest, back, sleeve or collar, in one or more positions.</li>
          <li><strong>Print and branding methods:</strong> Screen printing for large runs, DTF for multi-colour logos, heat transfer for small batches, and embroidery for polos and caps.</li>
          <li><strong>Brand colour matching:</strong> Pantone or colour-code matching for logos and garment colours.</li>
          <li><strong>Mock-up before production:</strong> A free digital proof is shared for approval first.</li>
          <li><strong>Packaging options:</strong> Individual polybags, branded boxes or kit packing for gift hampers.</li>
          <li><strong>Logo file support:</strong> Accepts AI, PDF or high-resolution PNG files, with design help if needed.</li>
        </ul>

        <a href="#quote" className="quote-btn">Get a quote</a>
      </div>
    </>
  }
/>
<style>

  
</style>
      <Galary images={galleryImages} />
    </>
  );
}

export default Clothing;