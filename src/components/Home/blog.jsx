
import { Link } from "react-router-dom";
import "./blog.css";

// Local images
import corporateGiftImage from "../../assets/images/hero/bloge-calendar-1.jpg";
import employeeGiftsImage from "../../assets/images/hero/blog-diary-1.jpg";
import ecoFriendlyGiftsImage from "../../assets/images/hero/blog-tshirt.jpg";

const blogData = [
  {
    id: 1,
    title: "Corporate Gift Ideas by Budget: What to Give at Every Price Point",
    excerpt:
      "Choosing a corporate gift gets easier when you start with a budget. Explore practical options for entry, mid, and premium price tiers.",
    category: "Bulk Gifting",
    date: "May 15, 2026",

    // Local image
    image: corporateGiftImage,

    slug: "/blog/corporate-gift-ideas-by-budget",

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
    excerpt:
      "Planning employee gifts for a large team? Learn key steps to choose, budget, order and deliver corporate merchandise smoothly.",
    category: "Buying Guide",
    date: "May 10, 2026",

    // Local image
    image: employeeGiftsImage,

    slug: "/blog/how-to-choose-gifts-for-100-employees",

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
    excerpt:
      "Sustainable corporate gift ideas including seed-paper notebooks, jute bags, bamboo products and reusable bottles with your branding.",
    category: "Sustainable",
    date: "May 02, 2026",

    // Local image
    image: ecoFriendlyGiftsImage,

    slug: "/blog/eco-friendly-corporate-gift-ideas",

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
];

function Blog() {
  return (
    <section className="blog-section">
      <div className="blog-container">

        <div className="blog-header">
          <h2>Latest Insights & Guides</h2>
          <p>
            Expert tips, bulk ordering strategies, and creative corporate
            gifting ideas for your brand.
          </p>
        </div>

        <div className="blog-grid">
          {blogData.map((post) => (
            <div className="blog-card" key={post.id}>

              <div className="blog-img-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />

                <span className="blog-category">
                  {post.category}
                </span>
              </div>

              <div className="blog-content">
                <span className="blog-date">
                  {post.date}
                </span>

                <h3>
                  <Link to={post.slug}>
                    {post.title}
                  </Link>
                </h3>

                <p>
                  {post.excerpt}
                </p>

                <Link
                  to={post.slug}
                  className="blog-read-more"
                >
                  Read Article{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;

