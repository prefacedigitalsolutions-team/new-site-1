// All section import
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Galary from "../../../components/AllProducts/Galary";
import SEO from "../../../components/SEO"; // SEO Component import kiya

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
    category: "",
    title: "",
    alt: "Premium portable power bank and fast-charging tech accessories for corporate gifting",
  },
  {
    image: galleryFiles["../../images/tech-gift/usb.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Modern custom branded USB and pen drives for smart technology gadgets",
  },
  {
    image: galleryFiles["../../images/tech-gift/power-bank-s.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Multifunctional digital clock with pen stand for office desk organization",
  },
  {
    image: galleryFiles["../../images/tech-gift/penderive-1.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Smart office wall clock and innovative branded tech gift items",
  },
  {
    image: galleryFiles["../../images/tech-gift/usb-2.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Exclusive tech collection featuring premium promotional USB and pen drives",
  },
  {
    image: galleryFiles["../../images/tech-gift/digital-clock-pen.jpg"],
    className: "large",
    category: "",
    title: "",
    alt: "Next-generation digital clock with pen stand set and custom branding options",
  },
  {
    image: galleryFiles["../../images/tech-gift/phone-stand-1.jpg"],
    className: "tall",
    category: "",
    title: "",
    alt: "Professional digital clock with pen stand and tech desk accessories",
  },
  {
    image: galleryFiles["../../images/tech-gift/digital-clock-1.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Useful digital desk clock accessory for office tables, cabins, and rooms",
  },
  {
    image: galleryFiles["../../images/tech-gift/wall-clock-1.jpg"],
    className: "small",
    category: "",
    title: "",
    alt: "Luxury wall clock and executive corporate tech gift items for offices",
  },
  {
    image: galleryFiles["../../images/tech-gift/wall-clock-2.jpg"],
    className: "wide",
    category: "",
    title: "",
    alt: "Advanced technology fast-charging power bank for executive corporate gifting",
  },
];

function TechGift() {
  return (
    <>
      {/* Tech Gifts Page ke liye SEO */}
      <SEO 
        title="Corporate Tech Gifts, Power Banks, USB Drives & Digital Clocks" 
        description="Explore our premium tech gifts collection including executive power banks, custom USB pen drives, wall clocks, digital desk clocks, and digital clocks with pen stands." 
        keywords="corporate tech gifts, power banks, custom USB pen drives, wall clocks, digital clocks, desk accessories"
      />

      <ProductBanner
        image={banner}
        title="Custom Power Banks with Your Company Logo"
      />

    <ProductIntro
  subTag="Tech & Gadgets Collection"
  title="Power Banks & Custom USB Pen Drives"
  leftContent={
    <>
      <p className="intro-paragraph">
        A power bank is a gift people use and keep, so your brand stays in sight. We supply branded power banks in a range of capacities and finishes, with your logo printed or engraved and packed in a premium box.
      </p>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Power Bank Options</h4>
        <ul className="highlights-list">
          <li>Slim and pocket-sized power banks</li>
          <li>High-capacity models for travel</li>
          <li>Fast-charging and Type-C models</li>
          <li>Wireless charging power banks</li>
          <li>Executive finishes with leatherette or metal</li>
        </ul>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Branding and Packaging</h4>
        <p className="intro-paragraph" style={{ marginBottom: "0", fontSize: "15px" }}>
          Logo printing or engraving, and custom boxes with your message.
        </p>
      </div>

       <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Ideal For</h4>
        <p className="intro-paragraph" style={{ marginBottom: "0", fontSize: "15px" }}>
          Client gifts, festive gifting, employee rewards, conferences and technology brands.

        </p>
      </div>
    </>
  }
  rightContent={
    <>
      <div className="customisation-highlights">
        <h4 className="highlights-title">USB Drive Styles</h4>
        <p className="intro-paragraph" style={{ marginBottom: "15px", fontSize: "15px" }}>
          Branded USB flash drives are a proven corporate gift, ideal for sharing presentations, catalogues and product files. We supply promotional pen drives in many shapes and capacities, with your logo printed or engraved and your content pre-loaded if you like.
        </p>
        <ul className="highlights-list">
          <li>Leather-finish USB drives</li>
          <li>Metal and swivel pen drives</li>
          <li>Card-style USB drives</li>
          <li>Dual-port drives for phone and laptop</li>
          <li>Capacities from [8GB to 128GB]</li>
        </ul>

        <h4 className="highlights-title" style={{ marginTop: "20px" }}>Extra Services</h4>
        <p className="intro-paragraph" style={{ marginBottom: "0", fontSize: "15px" }}>
          Pre-loading of brochures, videos and catalogues, plus gift box packaging.
        </p>

        <h4 className="highlights-title" style={{ marginTop: "20px" }}>Ideal For</h4>
        <ul className="highlights-list">
          <li>Conferences, product launches, sales teams, educational institutes and corporate gifting..</li>
         
        </ul>

        <h4 className="highlights-title" style={{ marginTop: "20px" }}>FAQ</h4>
        <ul className="highlights-list">

          <li><strong>What warranty do the power banks carry?</strong> <br></br>
          Warranty varies by model: [add warranty]. We will share details with the quote.</li>

          <li><strong>Can you add our logo in a metallic finish?</strong><br></br>
            Yes, on selected models.</li>

            <li><strong>Can you load our company presentation onto the drives?</strong><br></br>
           Yes. Share the files and we will pre-load every drive.</li>

            <li><strong>Are the drives branded with a permanent logo?</strong><br></br>
           Yes. Engraved or printed logos are made to last.</li>
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

export default TechGift;