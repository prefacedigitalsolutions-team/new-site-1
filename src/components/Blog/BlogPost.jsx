
import { useParams, Link } from "react-router-dom";
import "./BlogPost.css";

// ==========================================
// LOCAL BLOG IMAGES
// ==========================================
import corporateGiftImage from "../../assets/images/hero/blog-calendar2.jpg";
import employeeGiftsImage from "../../assets/images/hero/blog-calendar2.jpg";
import ecoFriendlyGiftsImage from "../../assets/images/hero/blog-calendar2.jpg";
import welcomeKitsImage from "../../assets/images/hero/blog-calendar2.jpg";
import moqImage from "../../assets/images/hero/blog-calendar2.jpg";
import vectorLogoImage from "../../assets/images/hero/blog-calendar2.jpg";

// ==========================================
// BLOG DATA
// ==========================================
const blogData = [
  {
    id: 1,
    title:
      "Corporate Gift Ideas by Budget: What to Give at Every Price Point",
    category: "Bulk Gifting",
    date: "May 15, 2026",
    image: corporateGiftImage,
    slug: "corporate-gift-ideas-by-budget",

    content: {
      intro:
        "Choosing a corporate gift gets easier when you start with a budget. Here's how to think about each tier. Confirm current prices with us, since they vary with quantity and branding.",

      tiers: [
        {
          title: "Entry budget",
          desc:
            "Branded notebooks, pens, tote bags, desk calendars and mouse pads. These suit large teams, events and school or college programmes, and they're practical enough to be used daily.",
        },
        {
          title: "Mid budget",
          desc:
            "Insulated steel bottles, diaries with premium covers, laptop sleeves, desk organisers. A good fit for onboarding, work anniversaries and client thank-yous.",
        },
        {
          title: "Premium budget",
          desc:
            "Curated kits in a branded box (diary, bottle, desk item and a message card), or executive sets for leadership and key clients.",
        },
      ],

      tips: [
        "Pick items people will actually use. A useful item beats an expensive one that sits in a drawer.",
        "Order a little extra for new joiners and last-minute additions.",
        "Keep the branding tasteful. A clean, small logo looks more premium than a large one.",
      ],

      ctaText:
        "Not sure what fits your budget and headcount? Get a quote and we'll suggest options.",
    },
  },

  {
    id: 2,
    title: "How to Choose Employee Gifts for a Team of 100+",
    category: "Buying Guide",
    date: "May 10, 2026",
    image: employeeGiftsImage,
    slug: "how-to-choose-gifts-for-100-employees",

    content: {
      intro:
        "Gifting a large team is a logistics exercise as much as a creative one. A simple process helps.",

      steps: [
        "Define the occasion and budget. Diwali, New Year, anniversaries and onboarding each call for a different tone.",
        "Choose one core item, not many. One well-chosen gift (a bottle, a diary or a kit) reduces complexity and keeps quality consistent.",
        "Consider your audience. A mixed team of different ages and roles usually appreciates universal, useful items over niche ones.",
        "Plan the timeline. Allow time for the design mockup, approval, production and delivery. Festive seasons fill up fast, so order early.",
        "Decide on delivery. One bulk delivery to HR, or individual packages to different offices or home addresses.",
        "Check before you finalise. Ask for a sample or a mockup, and confirm quantities and spellings (especially if names are being personalised).",
      ],

      conclusion:
        "A good supplier handles design, production and delivery together, so you're not coordinating three vendors.",

      ctaText: "Request a quote for your team size.",
    },
  },

  {
    id: 3,
    title: "Eco-Friendly Corporate Gift Ideas for Companies That Care",
    category: "Sustainable",
    date: "May 02, 2026",
    image: ecoFriendlyGiftsImage,
    slug: "eco-friendly-corporate-gift-ideas",

    content: {
      intro:
        "Sustainability matters to many employees and clients, and your gifts are one way to show it. Some ideas that work well:",

      ideas: [
        "Seed-paper notebooks and cards: the cover can be planted, which makes a memorable gift.",
        "Jute and cotton tote bags: reusable and practical for events and welcome kits.",
        "Bamboo and wooden desk items: natural materials with a premium look.",
        "Reusable steel bottles: replace single-use plastic and get used every day.",
        "Recycled-paper stationery: diaries and notebooks made with recycled materials.",
      ],

      caution:
        "A word of caution: avoid vague 'green' claims. If a product is made from recycled paper or natural fibres, say so specifically. Overstating environmental benefits can damage trust. Ask your supplier what the materials actually are.",

      makeItWork:
        "Make it work: pair the gift with a short message about why you chose it. Eco gifts feel more meaningful when the reason is shared.",

      ctaText:
        "Explore our eco-friendly gift range and request a mockup with your logo.",
    },
  },

  {
    id: 4,
    title:
      "Top 5 Corporate Gifting Trends for Employee Welcome Kits in 2026",
    category: "Bulk Gifting",
    date: "May 15, 2026",
    image: welcomeKitsImage,
    slug: "top-5-corporate-gifting-trends-2026",

    content: {
      intro:
        "Welcome kits set the tone for a new employee's journey. Here are the top 5 trends dominating corporate gifting this year.",

      tiers: [
        {
          title: "1. Sustainable & Eco-Conscious Kits",
          desc:
            "Items made from bamboo, cork, and seed paper are leading the preference charts.",
        },
        {
          title: "2. Tech Essentials",
          desc:
            "Wireless chargers, multi-port adapters, and sleek laptop sleeves are high on utility.",
        },
        {
          title: "3. Wellness & Self-Care",
          desc:
            "Aromatherapy candles, ergonomic items, and premium water bottles.",
        },
      ],

      tips: [
        "Personalize the welcome note with the employee's name.",
        "Keep packaging compact and premium.",
      ],

      ctaText:
        "Want customized welcome kits for your upcoming batch? Contact us today.",
    },
  },

  {
    id: 5,
    title:
      "How to Choose the Right Minimum Order Quantity (MOQ) for Your Brand",
    category: "Buying Guide",
    date: "May 10, 2026",
    image: moqImage,
    slug: "how-to-choose-right-moq",

    content: {
      intro:
        "Managing inventory for corporate merchandise requires careful planning of Minimum Order Quantities (MOQs).",

      steps: [
        "Assess your annual hiring or event projections.",
        "Talk to suppliers about flexible scaling options.",
        "Balance custom branding costs with bulk discounts.",
      ],

      conclusion:
        "Planning ahead ensures you never run short during peak festive gifting seasons.",

      ctaText: "Speak with our bulk procurement experts.",
    },
  },

  {
    id: 6,
    title:
      "Why Vector Logo Files (AI, EPS, SVG) Matter for Custom Engraving",
    category: "Design Tips",
    date: "May 02, 2026",
    image: vectorLogoImage,
    slug: "why-vector-logo-files-matter",

    content: {
      intro:
        "Raster images (like PNG or JPG) pixelate when scaled or laser-engraved. Here is why vector artwork is crucial.",

      ideas: [
        "Clean laser etching on metal water bottles requires sharp vector paths.",
        "Pantone color matching depends on vector file accuracy.",
        "Saves time during the pre-production proofing stage.",
      ],

      caution:
        "Always obtain vector files directly from your brand's graphic design team before placing custom corporate orders.",

      ctaText:
        "Need assistance with logo formatting or mockups? Reach out to our design team.",
    },
  },
];

// ==========================================
// BLOG POST COMPONENT
// ==========================================
function BlogPost() {
  const { slug } = useParams();

  const post = blogData.find((p) => p.slug === slug);

  // Blog post not found
  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Blog Post Not Found</h2>

        <p className="blog-not-found-desc">
          The article you are looking for does not exist.
        </p>

        <Link to="/blog" className="blog-back-link">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="blog-post-article">
      <div className="blog-post-container">

        {/* ================= HEADER ================= */}
        <div className="blog-header">
          <span className="blog-category-badge">
            {post.category}
          </span>

          <h1 className="blog-title">
            {post.title}
          </h1>

          <div className="blog-date">
            <span>
              Published on {post.date}
            </span>
          </div>
        </div>

        {/* ================= FEATURED IMAGE ================= */}
        <div className="blog-image-wrapper">
          <img
            src={post.image}
            alt={post.title}
            className="blog-image"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="blog-content-body">

          {/* Intro */}
          <p className="blog-intro">
            {post.content.intro}
          </p>

          {/* Tiers */}
          {post.content.tiers &&
            post.content.tiers.map((tier, index) => (
              <div
                key={index}
                className="blog-tier-card"
              >
                <h3 className="blog-tier-title">
                  {tier.title}
                </h3>

                <p className="blog-tier-desc">
                  {tier.desc}
                </p>
              </div>
            ))}

          {/* Steps */}
          {post.content.steps && (
            <ol className="blog-steps-list">
              {post.content.steps.map((step, index) => (
                <li
                  key={index}
                  className="blog-step-item"
                >
                  {step}
                </li>
              ))}
            </ol>
          )}

          {/* Ideas */}
          {post.content.ideas && (
            <ul className="blog-ideas-list">
              {post.content.ideas.map((idea, index) => (
                <li
                  key={index}
                  className="blog-idea-item"
                >
                  {idea}
                </li>
              ))}
            </ul>
          )}

          {/* Tips Box */}
          {post.content.tips && (
            <div className="blog-tips-box">
              <h4 className="blog-tips-title">
                💡 Key Takeaways & Tips:
              </h4>

              <ul className="blog-tips-list">
                {post.content.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="blog-tip-item"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Caution */}
          {post.content.caution && (
            <p className="blog-caution-box">
              {post.content.caution}
            </p>
          )}

          {/* CTA */}
          <div className="blog-cta-box">
            <p className="blog-cta-text">
              {post.content.ctaText}
            </p>

            <Link
              to="/contact"
              className="blog-cta-button"
            >
              Get in Touch
            </Link>
          </div>

        </div>

        {/* ================= BACK LINK ================= */}
        <div className="blog-back-link-wrapper">
          <Link
            to="/blog"
            className="blog-back-link"
          >
            ← Back to all articles
          </Link>
        </div>

      </div>
    </article>
  );
}

export default BlogPost;

