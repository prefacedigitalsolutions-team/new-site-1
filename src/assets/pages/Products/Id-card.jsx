// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import SEO from "../../../components/SEO"; 

// Banner image
import banner from "../../../assets/images/certificate/certificate-banar-1.jpg";

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
    category: "",
    title: "",
    alt: "Stylish and durable executive pen stand for office desk organization",  
  },
  {
    image: galleryFiles["../../images/certificate/certificate-2.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Modern ergonomic mobile phone stand for desk and office use",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-3.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "High-quality custom printed student ID card with secure lanyard holder",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-4.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Professional corporate employee ID card with custom branding design",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-5.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Custom branded printed neck lanyard for ID cards and corporate events",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-6.jpg"],
    className: "large",
    category: "",
    title: "",
    alt: "Custom metal lapel pins and badges for corporate branding and recognition",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-7.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Designer wooden and metallic pen stand for corporate gifting",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-8.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Durable PVC student ID card printing with customized layout",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-9.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Executive smart employee ID card with secure card holder",
  },
  {
    image: galleryFiles["../../images/certificate/certificate-10.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Custom printed lanyards and lapel badges for corporate promotions",
  },
];

function Certificate() {
  return (
    <>
      {/* Page ke liye SEO */}
      <SEO 
        title="Employee ID Cards and Lanyards | Custom Corporate ID Cards" 
        description="Custom employee ID cards with photo, barcode or RFID, plus branded lanyards and card holders. Bulk printing for companies and offices" 
        keywords="ID cards, lanyards, pen stand, mobile stand, Employee ID Card, Student Id Cards"
      />

      <ProductBanner
        title="Employee ID Cards, Lanyards and Card Holders"
        image={banner}
      />
<ProductIntro
  subTag=""
  title=""
  leftContent={
    <>
      {/* Employee ID Cards Part */}
      <h3 className="highlights-title" style={{ marginBottom: "15px" }}>Employee ID Cards</h3>
      <p className="intro-paragraph">
        A professional ID card builds security, trust and brand identity in every office. We design and print employee ID cards with photo, name, designation and barcode, and supply matching lanyards and holders in your brand colours.
      </p>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">What We Offer</h4>
        <ul className="highlights-list">
          <li>PVC employee ID cards with photo and logo</li>
          <li>Barcode, QR code and RFID-enabled cards</li>
          <li>Branded lanyards and neck straps</li>
          <li>Premium card holders and badge reels</li>
          <li>Visitor and contractor passes</li>
        </ul>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Why Choose Us</h4>
        <p className="intro-paragraph" style={{ marginBottom: "0", fontSize: "15px" }}>
          In-house design and printing, variable data printing for large staff lists, and consistent colour matching with your brand.
        </p>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">How It Works</h4>
        <ul className="highlights-list">
          <li>Send staff data and photos in Excel and a folder.</li>
          <li>Approve the card design.</li>
          <li>We print, pack and deliver sorted by department if needed.</li>
        </ul>
      </div>

      {/* Student ID Cards Intro Part */}
      <div style={{ marginTop: "40px" }}>
        <h3 className="highlights-title" style={{ marginBottom: "15px" }}>Student ID Cards for Schools and Colleges</h3>
        <p className="intro-paragraph">
          We design and print durable student ID cards for schools, colleges, coaching centres and institutes. Each card carries the student's photo, name, class, admission number and school branding, so identification is easy and safe.
        </p>
      </div>
    </>
  }
  rightContent={
    <>
      {/* Student ID Cards - Moved Sections */}
      <div className="customisation-highlights">
        <h4 className="highlights-title">Card Options</h4>
        <ul className="highlights-list">
          <li>PVC student ID cards with photo</li>
          <li>Barcode, QR code and smart cards for attendance and library</li>
          <li>Matching lanyards, holders and straps in school colours</li>
          <li>Staff and teacher cards</li>
          <li>Transport and library cards</li>
        </ul>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Made for Institutions</h4>
        <p className="intro-paragraph" style={{ marginBottom: "0", fontSize: "15px" }}>
          Simple data upload, bulk printing, section-wise sorting and replacement cards on request.
        </p>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Ideal For</h4>
        <p className="intro-paragraph" style={{ marginBottom: "0", fontSize: "15px" }}>
          Private schools, colleges, nurseries, coaching institutes, universities and training centres.
        </p>
      </div>

      {/* Employee FAQs */}
      <div className="customisation-highlights" style={{ marginTop: "30px" }}>
        <h4 className="highlights-title">Employee ID - FAQ</h4>
        <ul className="highlights-list">
          <li>
            <strong>Can you print a large number of cards from an Excel sheet?</strong><br></br>
             Yes. We use your data file to print each card with its own details.
          </li>
          <li>
            <strong>Do you provide lanyards with the cards?</strong><br></br>
             Yes. Lanyards can be printed with your logo and colours.
          </li>

            <li>
            <strong>Can you handle a whole school's ID cards at once?</strong><br></br>
             Yes. We manage large batches with sorted delivery by class or section.
          </li>
          <li>
            <strong>Can the card include emergency contact details?</strong> <br></br>
            Yes. The back of the card can carry parent contact, blood group and address as you choose.
          </li>


        </ul>
        <a href="#quote" className="quote-btn" style={{ marginTop: "20px", display: "inline-block" }}>
          Get a quote.
        </a>
      </div>

    </>
  }
/>
      <Galary images={galleryImages} />
    </>
  ); 
}

export default Certificate;