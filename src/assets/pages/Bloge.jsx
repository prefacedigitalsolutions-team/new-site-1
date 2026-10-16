// All section import
import BlogHer from "../../components/Blog/BlogHero";
import SEO from "../../components/SEO";

import Feature from "../../components/Blog/FeaturedBlogs";


function Blog() {
  return (
    <>
      {/* Blog Page ke liye SEO */}
      <SEO 
        title="Our Blog & Articles | Insights, News & Updates" 
        description="Explore our latest articles, guides, tips, and industry trends to stay informed and ahead." 
        keywords="blog, articles, industry trends, company updates, news"
      />

      <BlogHer />
      <Feature />
    
    </>
  );
}

export default Blog;