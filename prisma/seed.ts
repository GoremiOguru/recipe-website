import prisma from "@/lib/prisma";



async function products() {
  const res = await fetch("https://dummyjson.com/recipes?limit=40");
  const data = await res.json();
  const products =(data?.recipes || []) as unknown as Product[];


 

products.forEach(async (p) => {

  await prisma.product.create({
    data: {
     
      name: p.name,
      ingredients: p.ingredients,
      instructions: p.instructions,
      mealType: p.mealType,
      reviewCount: p.reviewCount,
      prepTimeMinutes: p.prepTimeMinutes,
      cookTimeMinutes: p.cookTimeMinutes,
      servings: p.servings,
      caloriesPerServing: p.caloriesPerServing,
      difficulty: p.difficulty,
      cuisine: p.cuisine,
      tags: p.tags,
      rating: p.rating,
      image: p.image
    },
  });
});

}

try{
  await prisma.$connect();
  await products();
}catch(error){
  await prisma.$disconnect();
  console.log(error);
}