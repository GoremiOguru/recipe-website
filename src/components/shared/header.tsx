import { Bookmark, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";


export function Header(){
    return(
         
        <div>
            <header className="text-white flex gap-4 justify-between">
            <h1 className="text-green-500 uppercase text-2xl md:text-4xl font-bold">
                Recipe
            </h1>
            <ul className="gap-4 hidden md:flex">
                <li>Recipes</li>
                <li>Bundles</li>
                <li>Blog</li>
            </ul>
            <div className="flex gap-4 items-center">
                
                    <form action="" className=" hidden md:flex">
                    <input type="search" placeholder="Search" />
                    </form>
                    <span className="  md:hidden p-1 md:p-2 rounded full border border-border">
                        <Search className="w-4 h-4 md:w-7 md:h-7"/>
                    </span>
                
                    <span className="p-2 rounded full border border-border">
                        <ShoppingCart className="w-4 h-4 md:w-7 md:h-7"/>
                    </span>
                    <span className="p-2 rounded full border border-border">
                        <Bookmark  className="w-4 h-4 md:w-7 md:h-7"/>
                    </span>
                
            </div>
            </header>
        </div>
        
    )
}