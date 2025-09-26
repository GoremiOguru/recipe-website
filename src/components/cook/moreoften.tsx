import { ArrowRight } from "lucide-react";
import Link from "next/link";



export function Yourself(){
    return(
        <div>
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
        <div className="md:flex md:items-center md:justify-between px-4 gap-12">
            <div>
            <video controls autoPlay muted loop 
            className="w-full h-80 md:h-[28rem] object-cover rounded-xl">
                <source src="chefman.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 px-4 py-12 md:py-24">
            <div>
                <span className="text-6xl font-bold">Become a Let's Dig<br/>In Creator</span>
            </div>
            <div>
                <p className="text-gray-500 dark:text-white">On Let's Dig In, you can create recipes, share them with<br/>
                the community, and make them purchasable. As a creator,<br/> you take care of yourself for fresh cooking ideas. To create<br/>
                recipes for the community, you need an account- with just a<br/> few clicks, you can become a creator yourself.</p>
            </div>
            <div>
                <div>
                 <Link href="/auth/login">
          <button className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500 rounded-xl text-white hover:bg-green-400 transition">
            <span className="font-medium">Learn More</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <ArrowRight size={20} className="text-green-500" />
            </span>
          </button>
        </Link>
             </div>
            </div>

        </div>
        </div>
        </div>
    );
}