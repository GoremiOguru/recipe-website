"use client"

import { Button } from "../ui/button"
import { Trending } from "./trending"
import { Products } from "@/actions/products"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface Props {
  products: Products
}

export function TrendingList({ products }: Props) {
    const router = useRouter();
  return (
    <div className="flex flex-col gap-y-12 px-4" >
        <div className="flex items-center justify-between px-4">
            <div>
            <span className="absolute left-4 font-bold text-3xl text-green-500">What am I cooking this week?</span>
            </div>
            <div>
            <button
            onClick={() => router.push("/products")}
            className="min-w-[12px] h-12 flex items-center justify-center bg-green-500 rounded-xl text-white hover:bg-green-300 transition snap-start"
        >
            <ArrowRight size={32} />
            </button>
            </div>
        </div>
       <div className="flex gap-4 overflow-x-auto scrollbar-hide p-4">
      {products.slice(0, 10).map((product) => (
        <div key={product.id} className="flex-shrink-0">
            <Trending  data={product} />
        </div>
        
      ))}
      
    
        </div>
    </div>
   
  )
}
