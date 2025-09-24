interface Product{
    id: string;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes:number;
    cookTimeMinutes:number;
    servings:number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags:string[];
    image:string;
    rating:number;
    reviewCount:number;
    mealType:string[];
    };
   
    
   // mealType: string[];its the same with string[]. (string array)
    
interface FilterItemsProps{
    name?: string;
    cuisine?: string;
    sort?: string;
    minPrice?: number;
    maxPrice?: number;
}