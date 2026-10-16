import { Helmet } from 'react-helmet-async';

function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Your Brand Name` : "Your Default Brand Name"}</title>
      <meta name="description" content={description || "Explore our corporate services, gifts, and catalogs."} />
      <meta name="keywords" content={keywords || "corporate gifts, custom branding, catalogs"} />
    </Helmet>
  );
}

export default SEO;