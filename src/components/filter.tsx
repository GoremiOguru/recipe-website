"use client";

import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useMemo, useEffect, useState } from "react";

interface FilterProps {
  data: Product[];
  category?: string;
}
import { Input } from "@/components/ui/input";

export function Filter({ data, category }: FilterProps) {
  const pills = ["beauty", "fragrance", "groceries", "furniture"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const categories = useMemo(() => {
    const newD: string[] = [];
    data?.forEach((d) => {
      if (!newD.includes(d.category)) newD.push(d.category);
    });
    return newD;
  }, [data]);
  console.log(category)
  function handleSelect(c: string) {
    const params = new URLSearchParams(searchParams);
    params.set("category", c);
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className=" flex flex-wrap items-center justify-between">
      <div className=" hidden md:flex gap-4">
        {pills.map((p) => (
          <Badge key={p} variant={"outline"} className="rounded-full">
            
           {p}
                
          </Badge>
        ))}
      </div>
      <div className="p-6">
        <div className="flex justify-end p-4">
          
          <Select onValueChange={handleSelect} value={category}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup><SelectLabel>Categories</SelectLabel>
              {categories?.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}</SelectGroup>
            </SelectContent>
          </Select>
          <FilterDrawer
            onApply={({ minPrice, maxPrice }) => {
              console.log("Filter by price:", minPrice, maxPrice);
              
            }}
          />
        </div>
        <div>
          <input type="search" />
        </div>
      </div>
    </div>
  );
}


type FilterDrawerProps = {
  onApply?: (filters: { minPrice: number; maxPrice: number }) => void;
};

export function FilterDrawer({ onApply }: FilterDrawerProps) {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const handleApply = () => {
    if (onApply) {
      onApply({
        minPrice: minPrice ? parseFloat(minPrice) : 0,
        maxPrice: maxPrice ? parseFloat(maxPrice) : Infinity,
      });
    }
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm md:max-w-md">
          <DrawerHeader>
            <DrawerTitle>Filter Recipes</DrawerTitle>
            <DrawerDescription>Search by price range</DrawerDescription>
          </DrawerHeader>

          
          <div className="p-4 pb-0 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Min Price</label>
              <Input
                type="number"
                placeholder="e.g. 10"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Max Price</label>
              <Input
                type="number"
                placeholder="e.g. 50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <DrawerFooter>
            <Button onClick={handleApply}>Apply Filter</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}