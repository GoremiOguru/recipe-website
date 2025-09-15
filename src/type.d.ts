interface Product{
    id: string;
    name: string;
    ingreedients: string[];
    instructions: string[];
    preptimeMinutes: number;
    cookTimeMinutes: number;
    difficulty: 'Easy' | 'Hard';
    cuisine: string;
    tags: string[];
    userId: string;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];//its the same with string[]. (string array)
    
}