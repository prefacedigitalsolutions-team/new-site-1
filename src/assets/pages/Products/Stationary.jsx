// All section import

import ProductBanner from "../../../components/AllProducts/ProductBanner";
//import ProductBanner from "../../../components/AllProducts/Diary-vedio";
import ProductIntro from "../../../components/AllProducts/Intro";
import Diary from "../../../components/AllProducts/Diary";
import SEO from "../../../components/SEO"; // SEO Component import kiya

// Banner image path corrected
//import banner from "../../../assets/images/stationary/stationary-banar-1.jpg";

// Banner image
import banner from "../../../assets/images/stationary/diary-banner-1.jpg";

function Stationary() {
  return (
    <>
      {/* Stationary Page ke liye SEO */}
      <SEO 
        title="Custom Corporate Diaries & Notebooks with Logo | Bulk Orders" 
        description="Premium customised diaries and notebooks for corporate gifting. Hard bound, PU leather and more, with your logo. Bulk orders and quick delivery."
      />

      <ProductBanner
        title="Custom Desk Calendars for Your Brand"
        image={banner}
      />



      <ProductIntro
  subTag=""
  title="Exclusive Customised Diaries & Notebooks for Corporate Gifting"
  leftContent={
    <>
      {/* Diaries & Notebooks Section */}
    
      <p className="intro-paragraph">
        A well-made diary stays on the desk all year, and your brand stays with it. Our corporate diaries and notebooks are crafted to carry your logo with style, whether for client gifting, employee welcome kits, Diwali and New Year hampers, or events.
      </p>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">Choose from a range of finishes:</h4>
        <ul className="highlights-list">
          <li><strong>Hard Bound:</strong> sturdy, classic and executive-ready</li>
          <li><strong>PU Leather:</strong> soft-touch, premium look and feel</li>
          <li><strong>Spiral / Wiro Bound:</strong> lies flat, easy for daily notes</li>
          <li><strong>Fabric & Canvas Covers:</strong> modern, textured and stylish</li>
          <li><strong>Eco / Recycled Kraft:</strong> sustainable, ideal for green-minded brands</li>
        </ul>
        <p className="intro-paragraph" style={{ marginTop: "10px", marginBottom: "0", fontSize: "15px" }}>
          Pick your size, paper, pages, ribbon, elastic closure and pen loop, and we'll tailor the rest to your brand.
        </p>
      </div>

      <div className="customisation-highlights" style={{ marginTop: "25px" }}>
        <h4 className="highlights-title">How it works</h4>
        <ul className="highlights-list">
          <li><strong>Choose your style:</strong> cover type, size, colour and inner pages</li>
          <li><strong>Share your logo:</strong> we send a digital mock-up for approval</li>
          <li><strong>Branding:</strong> foil stamping, debossing, screen printing or UV printing, as suited to the cover</li>
          <li><strong>Quality check and delivery:</strong> every piece is inspected before bulk dispatch</li>
        </ul>
       
      </div>
    </>
  }
  rightContent={
    <>

      {/* FAQ Section */}
      <div className="customisation-highlights">
        <h4 className="highlights-title">FAQ</h4>
        <ul className="highlights-list">
          <li>
            <strong>What types of custom diaries and notebooks do you offer?</strong> <br></br>
            We offer hard bound, PU leather, spiral/wiro bound, fabric or canvas cover, and eco-friendly recycled kraft options, in various sizes and colours.
          </li>
          <li>
            <strong>How can my logo be printed on the diary?</strong><br></br>
             Depending on the cover material, we use foil stamping, debossing, screen printing or UV printing. We'll recommend the best finish for your design.
          </li>
          <li>
            <strong>What is the minimum order quantity?</strong> <br></br>
            The minimum order quantity is [X] pieces. Contact us for smaller trial orders or sample requests.
          </li>
          <li>
            <strong>Can I customise the inner pages?</strong><br></br>
            Yes. You can choose the paper quality, number of pages and ruling (ruled, plain or dated), and add your company details, a vision statement or a branded planner section.
          </li>
          <li>
            <strong>Do you offer dated diaries and planners?</strong><br></br>
            Yes. We offer dated and undated diaries, which are popular for New Year and Diwali corporate gifting.
          </li>
          <li>
            <strong>Will I see a design preview before production?</strong><br></br>
             Yes. We share a digital mock-up for your approval before anything goes into production.
          </li>
          <li>
            <strong>How long does a bulk order take?</strong><br></br>
             Production and delivery usually take [X–X] working days after design approval. For festive seasons, we recommend ordering early.
          </li>
          <li>
            <strong>Can diaries be packed as part of a gift set?</strong><br></br> 
            Yes. We can pair diaries with pens, mouse pads, mugs, bottles and more, in branded gift boxes.
          </li>
        </ul>

        <a href="#quote" className="quote-btn" style={{ marginTop: "25px", display: "inline-block" }}>
          Get a quote.
        </a>
      </div>
    </>
  }
/>

<Diary />
    </>
  );
}

export default Stationary;


