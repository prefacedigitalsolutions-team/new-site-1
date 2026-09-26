
import "./Product.css";

import img1 from "../../assets/images/stationary/calendar-1.jpg";
import img2 from "../../assets/images/hero/product-diary-1.jpg";
import img3 from "../../assets/images/bags/bag-02.jpg";
import img4 from "../../assets/images/hero/product-shirt-1.jpg";
import img5 from "../../assets/images/hero/product-mouse-pad.jpg";
import img6 from "../../assets/images/hero/product-pen.jpg";
import img7 from "../../assets/images/certificate/certificate-2.jpg";
import img8 from "../../assets/images/hero/product-mug.jpg";

const products = [
  {
    id: 1,
    image: img1,
    title: "Corporate Gifts",
  },
  {
    id: 2,
    image: img2,
    title: "Premium Calendars",
  },
  {
    id: 3,
    image: img3,
    title: "Diaries & Notebooks",
  },
  {
    id: 4,
    image: img4,
    title: "Awards & Trophies",
  },
  {
    id: 5,
    image: img5,
    title: "Office Essentials",
  },
  {
    id: 6,
    image: img6,
    title: "Promotional Products",
  },
  {
    id: 7,
    image: img7,
    title: "Executive Accessories",
  },
  {
    id: 8,
    image: img8,
    title: "Custom Merchandise",
  },
];

function Product() {
  return (
    <section className="product-gallery-section">
      <div className="product-gallery-container">

        {/* Section Heading */}
        <div className="product-gallery-header" data-aos="fade-up">
          <span className="product-gallery-subtitle">
            // OUR PRODUCTS
          </span>

          <h2 className="product-gallery-title">
            Explore Our Products
          </h2>
        </div>

        {/* Product Images */}
        <div className="product-gallery-grid">
          {products.map((product) => (
            <div
              className="product-gallery-card"
              key={product.id}
            >
              <div className="product-gallery-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-gallery-image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Product;

