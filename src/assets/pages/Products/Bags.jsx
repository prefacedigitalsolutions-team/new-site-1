import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import SEO from "../../../components/SEO"; 

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
    category: "",
    title: "",
    alt: "Luxury leather backpack for stylish travel and daily use",
  }, 
  {
    image: bagImages["../../images/bags/bag-02.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Professional corporate laptop bag with leather finish",
  },
  {
    image: bagImages["../../images/bags/paper-bag.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Durable leather travel bag for comfortable journeys",
  },
  {
    image: bagImages["../../images/bags/laptop-bag.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Eco-friendly stylish jute utility bag for daily shopping",
  },
  {
    image: bagImages["../../images/bags/bag-banar-1.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Premium canvas office bag for executive professionals",
  },            
  {
    image: bagImages["../../images/bags/tote-bag.jpg"],
    className: "large",
    category: "",
    title: "",
    alt: "Modern designer tote bag for fashion-forward individuals",
  },
  {
    image: bagImages["../../images/bags/tote-bag-1.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Corporate branding bag for business promotions and events",
  },
  {
    image: bagImages["../../images/bags/bag-tute.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Premium lightweight backpack for students and travelers",
  },
  {
    image: bagImages["../../images/bags/jute-bag.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Exclusive gift bag perfect for corporate gifting",
  },
  {
    image: bagImages["../../images/bags/bag-4.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Customized luxury premium bag with unique design",
  },
];

function Bags() {
  return (
    <>
      {/* Page ke liye SEO */}
      <SEO 
        title="Custom Paper Carry Bags with Logo | Bulk Printing" 
        description="Custom printed paper carry bags with your logo. Choose size, paper and handle. Bulk orders for retail, events and gifting."
      />

      <ProductBanner
        image={banner}
        title="Custom Paper Carry Bags with Your Logo"
      />

     <ProductIntro
  subTag=""
  title="Make every handover a brand moment with custom carry bags."
  leftContent={
    <>
      <p className="intro-paragraph">
        Make every handover a brand moment. Our paper carry bags are printed with your logo and colours, in the size, paper and handle you choose. They suit retail stores, events, gift hampers and corporate kits. Choose kraft or art paper, and add lamination, foil or embossing.
      </p>

      <div className="customisation-highlights" style={{ marginTop: "30px" }}>
        <h4 className="highlights-title">Custom Printed Tote Bags for Brands and Events</h4>
        <p className="intro-paragraph" style={{ marginBottom: "15px", fontSize: "15px" }}>
          A tote bag is a gift people use every day, so your brand stays visible. We print your logo or artwork on cotton, canvas or non-woven totes, with screen printing, heat transfer or embroidery. Choose the size, handle, colour, pocket or zip. They work well for conferences, onboarding kits, giveaways and festive gifting. 
        </p>
       
      </div>
    </>
  }
  rightContent={
    <>
      <div className="customisation-highlights">
        <h4 className="highlights-title">Eco-Friendly Custom Jute Bags with Your Logo</h4>
        <p className="intro-paragraph" style={{ marginBottom: "15px", fontSize: "15px" }}>
          Show your brand's responsible side with strong, reusable jute bags. We customise size, style, lining, handles and closures, and print your logo by screen print, heat transfer or patch label. They suit sustainable corporate gifts, festive hampers, conferences and retail. 
        </p>
        <ul className="highlights-list">
          <li><strong>Eco-Friendly & Strong:</strong> Durable, reusable natural jute material.</li>
          <li><strong>Branding methods:</strong> Screen print, heat transfer, or custom patch label.</li>
          <li><strong>Customization:</strong> Size, style, inner lining, handles, and closures.</li>
          <li><strong>Perfect for:</strong> Sustainable corporate gifts, festive hampers, and retail packaging.</li>
        </ul>

        <h4 className="highlights-title" style={{ marginTop: "25px" }}>Paper Bags Highlights</h4>
        <ul className="highlights-list">
          <li><strong>Paper Types:</strong> Kraft paper or premium art paper.</li>
          <li><strong>Finishing options:</strong> Add lamination, metallic foil, or embossing.</li>
          <li><strong>Handle styles:</strong> Choose from twisted paper, cotton, or ribbon handles.</li>
          <li><strong>Ideal uses:</strong> Retail stores, corporate kits, events, and gift hampers.</li>
        </ul>

        <a href="#quote" className="quote-btn" style={{ marginTop: "25px", display: "inline-block" }}>Get a quote</a>
      </div>
    </>
  }
/>

      <Galary images={galleryImages} />
    </>
  );
}

export default Bags;