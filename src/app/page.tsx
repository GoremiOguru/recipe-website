import { Hero } from "@/components/home/hero";
import { getProducts } from "@/actions/products";
import { TrendingList } from "@/components/trending-recipes/trendinglist";
import { Achieve } from "@/components/productcategory/achieve";
import { Explore } from "@/components/explore/explore";
import { Online } from "@/components/classes/online";
import { Yourself } from "@/components/cook/moreoften";


interface HomeProps{
  searchParams: Promise<
    FilterItemsProps>;
}
export default async function Home({searchParams}: HomeProps) {
  const params = await searchParams;
  const products = await getProducts();
 
  return(
    <div className="flex flex-col gap-12">   
      <Hero/>
      
      <TrendingList products={products}/>
      <Achieve products={products}/>
      <Explore/>
      <Online/>
      <Yourself/>
    </div>
    
  );
  
}