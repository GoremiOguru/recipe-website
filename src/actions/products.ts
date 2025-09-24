"use server"

import prisma from "@/lib/prisma"

//the where code block in line 11 is used to limit the cuisine to indian only

export async function getProducts(){
    try{
        const products = await prisma.product.findMany({

            // where:{
            //     cuisine:{
            //         mode: "insensitive",
            //         equals: "Indian",
            //     },
            // },
            select:{
                id: true,
                name: true,
                image: true,
                cuisine: true,
                rating: true,
            }

        })
        return products;
    } catch(error){
        return[]
    }
}

export type Products = Awaited<ReturnType<typeof getProducts>>

export async function getProduct(productId: string){
    try {
        return await prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        
    } catch (error) {
        return null;
    }
}

export type Product = Awaited<ReturnType<typeof getProduct>>