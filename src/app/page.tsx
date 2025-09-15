import { Hero } from "@/components/home/hero";

import { Filter } from "@/components/filter";
import { Products } from "@/components/products";


interface HomeProps{
  searchParams: Promise<{
    cuisine?: string
  }>
}
export default async function Home({searchParams}: HomeProps) {
  const {cuisine} = await searchParams;
  const res = await fetch("https://dummyjson.com/products?limit=30");
  const data = await res.json();
  const recipes = (data?.recipes || []) as unknown as Product[];
 
  return(
    <div className=" flex flex-col gap-4">
    
      <Hero/>
      
      
      <section className=" flex flex-col gap-6 px-4 py-6 md:px-6">
        <Filter data={recipes} cuisine={cuisine}/>


        <Products products={recipes} cuisine={cuisine}/>
      
      
      </section>

    </div>
    
  )
  
}