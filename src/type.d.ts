interface Product{
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    discountpercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    images: string[];
    brand: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
   
    
   // mealType: string[];its the same with string[]. (string array)
    
}