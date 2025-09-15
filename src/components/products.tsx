"use client"


import { useMemo } from "react";
import { Product } from "./product"

interface ProductProps {
    products: Product[]
    cuisine?: string;
}


export function Products({products, cuisine}: ProductProps){
    const data = useMemo(()=> {
        let newData: Product[] =[]
        if (cuisine){
            return products.filter((p)=> p.cuisine == cuisine)
        }
        else{
           return  newData = products
        }
       
    }, [products, cuisine])
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((p,i) =>
          (<Product key={i} data={p}/>))}
        </div>
            
    )
}