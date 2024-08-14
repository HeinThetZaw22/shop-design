import CategoryBox from "./components/category/CategoryBox";
import HomeSlider from "./components/HomeSlider";
import FeaturedProducts from "./components/product/FeaturedProducts";
import NewProducts from "./components/product/NewProducts";
import CategorySlider from "../app/components/category/CategorySlider";
import DetailCategory from "../app/components/category/DetailCategory";

export default function Home() {
  return (
   <div className="">
      <HomeSlider />
      <FeaturedProducts />
      <CategoryBox />
      <NewProducts />
      <CategorySlider />
      <DetailCategory 
      title="Devices"
      description="Find the best for you here!"
      src="/images/vapes.png"
      />
      <DetailCategory 
      title="Pods"
      description="Variety of choices available"
      src="/images/Caliburn.avif"
      />
      <DetailCategory 
      title="Disposable"
      description="Easy, clean & superb flavor"
      src="/images/VmatePod.avif"
      />
   </div>
  );
}
