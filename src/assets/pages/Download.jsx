// All section import
import DownloadHero from "../../components/Downloads/DownloadHero";
import Contant from "../../components/Downloads/Content";
import SEO from "../../components/SEO"; // SEO Component import kiya

function Download() {
  return (
    <>
      {/* Downloads Page ke liye SEO */}
      <SEO 
        title="Download Catalogs & Brochures | Corporate Gifting Catalog" 
        description="Download our latest corporate gifting catalogs, product brochures, and promotional merchandise price lists in PDF format." 
        keywords="download catalog, corporate gifting brochure, product catalog PDF, promotional items list"
      />

      <DownloadHero />
      <Contant />
    </>
  );
}

export default Download;