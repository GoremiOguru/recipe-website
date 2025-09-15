import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";


interface Props{
    data: Product;
}

export function Product({data}: Props){
    return(
         <Card style={{backgroundImage:`url(${data.image})`}}
         className="h-60 text-white bg-center bg-no-repeat flex p-0">
            <div className="bg-black/40 flex-1 flex flex-col justify-end p-4">
                 <h4> {data.name}</h4>
            <div className="Flex gap-2 items-center">
                <Avatar>
                    <AvatarFallback className="text-black ">OG</AvatarFallback>
                </Avatar>

            </div>
            <div className="flex flex-col ">
                <h5 className="text-sm font-medium">Goremi Oguru</h5>
                <p className="text-xs font-light"> Lorem ipsum, dolor sit amet consectetur an!</p>
            </div>
            </div>
           
         </Card>
    )
   
}