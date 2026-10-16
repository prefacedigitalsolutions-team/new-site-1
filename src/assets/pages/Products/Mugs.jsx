<<<<<<< HEAD
// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import SEO from "../../../components/SEO"; // SEO Component import kiya
=======

import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import ModernStatic from "../../../components/NewStatic/ModernStatic";
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0

// Banner image
import banner from "../../../assets/images/mugs/mug-banar-1.jpg";

<<<<<<< HEAD
=======
// Static image
import aboutImage from "../../../assets/images/mugs/mug-5.jpg";

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
// Automatically import all mug images
const galleryFiles = import.meta.glob(
  "../../images/mugs/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = [
  {
    image: galleryFiles["../../images/mugs/mug-1.jpg"],
    className: "large",
<<<<<<< HEAD
    category: "",
    title: "",
    alt: "Elegant coffee mug collection featuring premium ceramic design for daily use",
  },
  {
    image: galleryFiles["../../images/mugs/bottol-1.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Branded corporate gift coffee mug for business promotions and events",
=======
    category: "Premium Mugs",
    title: "Elegant Coffee Mug Collection",
  },
  {
    image: galleryFiles["../../images/mugs/mug-02.jpg"],
    className: "tall",
    category: "Corporate Gifts",
    title: "Branded Mug Design",
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  },
  {
    image: galleryFiles["../../images/mugs/mug-3.jpg"],
    className: "small",
<<<<<<< HEAD
    category: "",
    title: "",
    alt: "Premium ceramic coffee mug with smooth finish and comfortable handle",
=======
    category: "Ceramic Collection",
    title: "Premium Ceramic Mug",
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  },
  {
    image: galleryFiles["../../images/mugs/mug-4.jpg"],
    className: "small",
<<<<<<< HEAD
    category: "",
    title: "",
    alt: "Personalized custom printed drink water bottle and sipper for hydration",
  },
  {
    image: galleryFiles["../../images/mugs/mug-banar-1.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Modern insulated steel bottle collection with stylish design and durable quality",
=======
    category: "Custom Printing",
    title: "Personalized Mug",
  },
  {
    image: galleryFiles["../../images/mugs/mug-5.jpg"],
    className: "wide",
    category: "Luxury Range",
    title: "Modern Mug Collection",
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  },
  {
    image: galleryFiles["../../images/mugs/mug-2.jpg"],
    className: "large",
<<<<<<< HEAD
    category: "",
    title: "",
    alt: "Professional stainless steel water bottle ideal for office desk and travel use",
=======
    category: "Office Essentials",
    title: "Professional Mug Series",
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  },
  {
    image: galleryFiles["../../images/mugs/tumbler-1.jpg"],
    className: "tall",
<<<<<<< HEAD
    category: "",
    title: "",
    alt: "Designer drink water tumbler with premium thermal finish",
  },

   {
    image: galleryFiles["../../images/mugs/printed-mug.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Special edition printed coffee mug perfect for corporate gifting",
=======
    category: "Premium Finish",
    title: "Designer Coffee Mug",
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  },
  {
    image: galleryFiles["../../images/mugs/coaster-1.jpg"],
    className: "small",
<<<<<<< HEAD
    category: "",
    title: "",
    alt: "Comfortable coffee mug matching wooden and silicone coaster set",
  },
 
  {
    image: galleryFiles["../../images/mugs/mousepad.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Exclusive premium corporate coffee mug paired with designer coasters",
=======
    category: "Daily Use",
    title: "Comfort Handle Mug",
  },
  {
    image: galleryFiles["../../images/mugs/printed-mug.jpg"],
    className: "small",
    category: "Gift Collection",
    title: "Special Edition Mug",
  },
  {
    image: galleryFiles["../../images/mugs/cofy-mug.jpg"],
    className: "wide",
    category: "Exclusive Collection",
    title: "Premium Corporate Mug",
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  },
];

function Mugs() {
  return (
    <>
<<<<<<< HEAD
      {/* Mugs Page ke liye SEO */}
      <SEO 
        title=" Custom Steel Water Bottles & Mugs for Corporate Gifting | Branded Bottles in Bulk" 
        description=" Premium stainless steel bottles with your logo. Insulated, sleek and built to last. Ideal for employee kits, client gifts and events." 
        keywords="coffee mugs, steel bottles, drinkware, custom coasters, corporate gifts"
      />

      <ProductBanner
        title="Mugs & Steel Bottles"
        image={banner}
      />



<ProductIntro
  subTag=""
  title="Gifts that get used every day, and carry your brand with them."
  leftContent={
    <>
      <p className="intro-paragraph">
        A branded steel bottle is one of the few corporate gifts people actually keep and use. Our stainless steel bottles are durable, leak-proof and designed to look good on a desk, in a gym bag or at a client meeting. Add your logo and your brand goes wherever they do.
      </p>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Why choose steel bottles</h4>
        <ul className="highlights-list">
          <li><strong>Durable:</strong> Food-grade stainless steel that resists dents, rust and daily wear.</li>
          <li><strong>Insulated options:</strong> Keeps drinks cold for hours and hot for hours.</li>
          <li><strong>Eco-friendly:</strong> A reusable alternative to plastic that reflects well on your brand.</li>
          <li><strong>Safe and hygienic:</strong> BPA-free, with no metallic taste or odour.</li>
          <li><strong>Long brand life:</strong> Used daily for years, so your logo stays visible.</li>
        </ul>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Our range</h4>
        <ul className="highlights-list">
          <li><strong>Insulated Vacuum Bottles:</strong> Double-wall design for hot and cold drinks.</li>
          <li><strong>Single-Wall Sports Bottles:</strong> Lightweight and easy to carry.</li>
          <li><strong>Flip-Top and Sipper Bottles:</strong> Convenient for office and travel.</li>
          <li><strong>Temperature Display Bottles:</strong> LED lid that shows the drink's temperature.</li>
          <li><strong>Bottle and Gift Sets:</strong> Bottle packed with a notebook, pen or mug in a gift box.</li>
        </ul>
      </div>

        <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Custom Printed Mugs for Corporate Gifting</h4>
        <ul className="highlights-list">
          <li>Intro: A branded mug sits on a desk for years and is seen every day. Our custom mugs are printed with your logo, message or artwork in vivid, dishwasher-friendly colour, ready for gifting and promotions.</li>
          <li><strong>Ideal For</strong></li>
          <li>Welcome kits, staff recognition, client gifts, school and college events and festive hampers.</li>
          
        </ul>
      </div>


      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Standard rectangular and round mouse pads</h4>
        <ul className="highlights-list">
          <li>A branded mouse pad stays on a desk every working day, which makes it a low-cost, high-visibility gift. We print full-colour 
           custom mouse pads with your logo, product photos or artwork on a smooth surface with a firm anti-slip base.</li>
          <li>Vibrant full-colour printing with clean edges and a sturdy rubber base..</li>
          
        </ul>
      </div>
    </>
  }
  rightContent={
    <>
      <div className="customisation-highlights">
        <h4 className="highlights-title">Branding options</h4>
        <ul className="highlights-list">
          <li>Laser engraving for a permanent, premium finish.</li>
          <li>UV or screen printing for full-colour logos.</li>
          <li>Custom colours and matching lids.</li>
          <li>Personalised names for employee or milestone gifts.</li>
          <li>Custom gift boxes and sleeves.</li>
        </ul>

        <h4 className="highlights-title" style={{ marginTop: "20px" }}>Perfect for</h4>
        <ul className="highlights-list">
          <li>New employee welcome kits.</li>
          <li>Client and festive gifting (Diwali, New Year).</li>
          <li>Conferences, trade shows and events.</li>
          <li>Work anniversaries and recognition awards.</li>
          <li>Wellness and sustainability campaigns.</li>
        </ul>

        <h4 className="highlights-title" style={{ marginTop: "20px" }}>How it works</h4>
        <ul className="highlights-list">
          <li><strong>Choose:</strong> Pick your bottle style, colour and capacity.</li>
          <li><strong>Customise:</strong> Share your logo and we'll send a digital mockup.</li>
          <li><strong>Approve:</strong> Confirm the design and quantity.</li>
          <li><strong>Delivery:</strong> Packed carefully and delivered on schedule.</li>
        </ul>

        <h4 className="highlights-title" style={{ marginTop: "20px" }}>FAQs</h4>
        <ul className="highlights-list">
          <li>
            <strong>Can you put our logo on the bottles?</strong><br></br>
            Yes. We offer laser engraving and printing, and we share a mockup for approval before production.
          </li>
          <li>
            <strong>What is the minimum order quantity?</strong><br></br>
            [Add your MOQ]. Contact us for smaller orders or samples.
          </li>
          <li>
            <strong>Do the bottles keep drinks hot or cold?</strong><br></br>
            Our insulated vacuum bottles do. Check each product's specifications for hours of retention.
          </li>
          <li>
            <strong>Can I order a sample first?</strong><br></br>
            Yes. Ask us for a sample before placing a bulk order. [Confirm your sample policy]
          </li>
          <li>
            <strong>Do you offer gift packaging?</strong><br></br>
            Yes, we offer custom boxes, sleeves and combo sets.
          </li>
          <li>
            <strong>How long does delivery take?</strong><br></br>
            It depends on quantity and customisation. [Add your timeline] Tell us your deadline and we'll plan around it.
          </li>
        </ul>

        <a
          href="#quote"
          className="quote-btn"
          style={{ marginTop: "25px", display: "inline-block" }}
        >
          Get a quote
        </a>
      </div>
    </>
  }
/>







      <Galary images={galleryImages} />
=======
      <ProductBanner
        title="Mug"
        image={banner}
      />

      <ProductIntro
        title="Premium Mug Collection"
        description="Our premium mug collection is designed to bring together style, quality, and functionality. Crafted with high-quality materials and modern designs, these mugs are perfect for corporate gifting, branding, and everyday use."
      />

      <Galary images={galleryImages} />

      <ModernStatic image={aboutImage} />
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
    </>
  );
}

<<<<<<< HEAD
export default Mugs;
=======
export default Mugs;

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
