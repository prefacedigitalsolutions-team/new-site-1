
import { Link } from "react-router-dom";
import "./FeaturedBlogs.css";

// ==========================================
// LOCAL BLOG IMAGES
// ==========================================
import welcomeKitsImage from "../../assets/images/hero/bloge-calendar-1.jpg";
import moqImage from "../../assets/images/hero/blog-diary-1.jpg";
import vectorLogoImage from "../../assets/images/hero/blog-tshirt.jpg";

// ==========================================
// FEATURED BLOG DATA
// ==========================================
const homeFeaturedBlogsData = [
  {
    id: 4,
    title:
      "Top 5 Corporate Gifting Trends for Employee Welcome Kits in 2026",
    excerpt:
      "Discover the most popular custom-branded items that modern companies are choosing to impress new hires.",
    category: "Bulk Gifting",
    date: "May 15, 2026",

    // Local image
    image: welcomeKitsImage,

    slug: "top-5-corporate-gifting-trends-2026",
  },

  {
    id: 5,
    title:
      "How to Choose the Right Minimum Order Quantity (MOQ) for Your Brand",
    excerpt:
      "A complete guide for procurement managers on planning bulk merchandise without excess inventory.",
    category: "Buying Guide",
    date: "May 10, 2026",

    // Local image
    image: moqImage,

    slug: "how-to-choose-right-moq",
  },

  {
    id: 6,
    title:
      "Why Vector Logo Files (AI, EPS, SVG) Matter for Custom Engraving",
    excerpt:
      "Learn why high-resolution vector artwork ensures pristine print quality on drinkware and tech gifts.",
    category: "Design Tips",
    date: "May 02, 2026",

    // Local image
    image: vectorLogoImage,

    slug: "why-vector-logo-files-matter",
  },
];

// ==========================================
// FEATURED BLOG COMPONENT
// ==========================================
function FeaturedBlogs() {
  return (
    <section className="featured-blogs-section">
      <div className="featured-blogs-container">

        {/* Section Header */}
        <div className="featured-blogs-header">
          <h2>Latest Insights &amp; Guides</h2>

          <p>
            Expert tips, bulk ordering strategies, and creative corporate
            gifting ideas for your brand.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="featured-blogs-grid">
          {homeFeaturedBlogsData.map((post) => (
            <article
              className="featured-blogs-card"
              key={post.id}
            >

              {/* Blog Image */}
              <div className="featured-blogs-image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />

                <span className="featured-blogs-category">
                  {post.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="featured-blogs-content">

                {/* Date */}
                <span className="featured-blogs-date">
                  {post.date}
                </span>

                {/* Title */}
                <h3>
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p>
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div style={{ marginTop: "15px" }}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-read-more"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    Read Article →
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedBlogs;

