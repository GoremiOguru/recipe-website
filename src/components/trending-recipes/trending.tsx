import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";
import { Products } from "@/actions/products";
// import { Heart } from "lucide-react";


interface Props{
    data: Products[0];
}

export function Trending({data}: Props){
    const router = useRouter();
    return(
         <Card onClick={() => {
            router.push(`/p/${data.id}`);
         }}
          style={{backgroundImage:`url(${data.image})`}}
         className="w-48 h-60 text-white bg-center bg-cover bg-no-repeat flex p-0 rounded-xl overflow-hidden">
            <div className="bg-black/40 flex-1 flex flex-col justify-end p-4">
                 <h4> {data.name}</h4>
            <div className="flex gap-2 items-center">
                <Avatar>
                    <AvatarFallback className="text-black ">OG</AvatarFallback>
                </Avatar>
             {/* <div className="absolute top-2 right-2 p-2 bg-gray-500 rounded-full">
                <Heart/>
            </div> */}
            
            </div>
           
            <div className="flex gap-2 items-center">
                <h2 className="text-md font-bold">{data.rating}</h2>
            </div>
            </div>
           
         </Card>
    )
   
}