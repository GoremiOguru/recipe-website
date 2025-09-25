import { Filter } from "@/components/filter";
import { Products } from "@/components/products";
import { getProducts } from "@/actions/products";


interface HomeProps{
  searchParams: Promise<
    FilterItemsProps>;
}
export default async function Home({searchParams}: HomeProps) {
  const params = await searchParams;
  const products = await getProducts();
 
  return(
    <div className=" flex flex-col gap-4">   
     
      <section className=" flex flex-col gap-6 px-4 py-6 md:px-6">
        <Filter data={products} params={params}/>
        <Products products={products} params={params}/>
      </section> 

    </div>
    
  );
  
}