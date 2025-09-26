import { ArrowRight } from "lucide-react";
import Link from "next/link";



export function Yourself(){
    return(
        <div className="md:flex md:items-center md:justify-between px-4 gap-12">
           <div className="flex flex-col gap-4 md:gap-8 px-4 py-12 md:py-24">
             <div>
                <span className="text-6xl font-bold">Finally cook for<br/>yourself more often</span>
             </div>
             <div>
                <p className="text-gray-500 dark:text-white">To save, rate and comment on recipes, as well as to develop<br/>
                your own recipes, you need an account. Embrace the joy<br/>of self-sufficiency and savor the satisfaction of homemade<br/>
                meals by making a conscious decision to finally cook for<br/>yourself more often.</p>
             </div>
             <div>
                 <Link href="/auth/signup">
          <button className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500 rounded-xl text-white hover:bg-green-400 transition">
            <span className="font-medium">Create an Account</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <ArrowRight size={20} className="text-green-500" />
            </span>
          </button>
        </Link>
             </div>
           </div>
           <div>
            <img
            src="/female-chef.jpg"
            alt="Cooking for Yourself"
            className="w-full h-80 md:h-[28rem] object-cover rounded-xl"
          />
           </div>

        </div>
    );
}