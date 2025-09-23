


async function products(){
     
  const res = await fetch("https://dummyjson.com/products?limit=40");
  const data = await res.json();
  const products = (data?.products || []) as unknown as Product[];
}