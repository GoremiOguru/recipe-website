import Link from "next/link";
import { Header } from "../shared/header";
import { Button } from "../ui/button";



export function Hero(){
    return(
        <div 
            style={{backgroundImage: "url(/banner.jpg)" }}
            className="h-140 w-full flex flex-col bg-cover bg-no-repeat " >
            <div className="relative flex-1 flex flex-col bg-black/10 px-4 md:px-8 py-2 md:py-4 " >
                <Header/>
               <div className="absolute bottom-40 left-10 md:left-5 flex flex-col gap-y-6 items-start">
                    <div className="text-white">
                        <span className="text-6xl font-bold">
                        Cooking Made <br /> Fresh and Easy
                        </span>
                    </div> 

                    <div className="text-white">
                        <p className="text-lg md:text-xl">
                        Discover culinary delights with our platform that not only helps<br />
                        you find great recipes but also allows you to conveniently order<br />
                        the required ingredients.
                        </p>
                    </div>
                                        
                    <div>
                        <Link href="/products">
                        <Button className="bg-green-500 hover:bg-white p-4 rounded-md">
                            <span className="text-white hover:text-green-400">
                            VIEW MORE RECIPES
                            </span>
                        </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}