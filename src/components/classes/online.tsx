import { ArrowRight } from "lucide-react";
import Link from "next/link";


export function Online(){
    return(
        <div className="md:flex md:items-center md:justify-between px-4 gap-12">
            <div className="flex flex-col gap-4 md:gap-12 px-4 py-12 md:py-24">
            <div>
                <p className="text-green-500">Let's dig innn...</p>
            </div>
            <div>
                <p className="text-6xl font-bold">Online Cooking Classes<br/>
                with Top Chefs</p>
            </div>
            <div>
                <p>Master the art of cooking with our LDG expert-led classes and elevate<br/>
                your culinary skills to new heights.</p>
            </div>
            <div>
                <Link href="/products">
          <button className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500 rounded-xl text-white hover:bg-green-400 transition">
            <span className="font-medium">Get Started Now</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <ArrowRight size={20} className="text-green-500" />
            </span>
          </button>
            </Link>
            </div>   
            </div>
            <div>
               <video controls autoPlay muted loop className="w-full h-80 md:h-[28rem] object-cover rounded-xl">
                <source src="kitchen.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}