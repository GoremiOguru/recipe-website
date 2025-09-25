

import { ArrowRight } from "lucide-react"


import Link from "next/link"

;


export async function Achieve({ products }: { products: any[] }) {
  return (
    <div className="flex flex-col w-full gap-y-8 px-4 items-center justify-between ">

      <div className="grid grid-cols-2 w-full items-center justify-between px-4 ">
        <div>
            <h2 className="text-6xl  font-bold text-black dark:text-white">
          Achieve Restaurant-<br /> Quality Food at Home
            </h2>
        </div>
        <div className="flex flex-col items-end">
            <div className="max-w-lg space-y-2">
             <p className="text-gray-500 dark:text-white">
          Recipe is more than a grill. It's for pizza, paella and pulled pork as well as
          perfect steak. It'll last a lifetime. This Christmas, every EGG comes with
          a free stylish leather apron.
        </p>
        <Link href="/products">
          <button className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500 rounded-xl text-white hover:bg-green-400 transition">
            <span className="font-medium">View More Recipes</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <ArrowRight size={20} className="text-green-500" />
            </span>
          </button>
        </Link>
        </div>
        </div>
       
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 6).map((item, index) => (
          <Link href={`/p/${item.id}`} key={item.id}>
            <div
              className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 flex justify-between items-center">
                <h3 className="text-white font-bold">{item.name}</h3>
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <ArrowRight size={16} className="text-green-500" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

   