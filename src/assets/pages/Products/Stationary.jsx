
import ProductBanner from "../../../components/AllProducts/ProductBanner";
import ProductIntro from "../../../components/AllProducts/Intro";
import Diary from "../../../components/AllProducts/Diary";


// Banner image
import banner from "../../images/stationary/stationary-banar-1.jpg";




function Stationary() {
  return (
    <>
      <ProductBanner
        title="Stationary"
        image={banner}
      />

      <ProductIntro
        title="Premium Stationary Collection"
        description="Our premium stationery collection is thoughtfully designed to combine functionality with refined aesthetics. Crafted using high-quality materials and modern manufacturing standards, each product delivers durability, elegance, and reliable performance, making it an ideal choice for contemporary offices, businesses, and corporate gifting."
      />

      <Diary />

     
    </>
  );
}

export default Stationary;

