"use client";
import React from "react";
import Container from "../Container";
import ColorProductCard  from "./ColorProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "../Button";

export const data = [
  {
    id: 1,
    url: "/images/Phantom.webp",
    title: "Phantom",
    description: "Variety of choices available",
    price: 15000,
    bgColor: "bg-neutral-900/95",
  },
  {
    id: 2,
    url: "/images/trineQ.webp",
    title: "TrineQ",
    description: "Variety of choices available",
    price: 35000,
    bgColor: "bg-orange-600",
  },
  {
    id: 3,
    url: "/images/ZYONgreen.webp",
    title: "ZyonGreen",
    description: "Variety of choices available",
    price: 23000,
    bgColor: "bg-emerald-700",
  },
  {
    id: 4,
    url: "/images/KleinBlue.png",
    title: "KleinBlue",
    description: "Variety of choices available",
    price: 20000,
    bgColor: "bg-sky-600",
  },
];

const NewProducts = () => {
  return (
    <Container>
      <div className="flex flex-col pt-10 items-center justify-center">
        <h1 className=" text-3xl font-bold"> <span className=" text-red-500">New</span> Released</h1>
        <h3 className=" text-gray-500">Try Our Latest Flavors Here</h3>
      </div>
      <div
        className=" 
             pt-10 grid 
             scroll-smooth
             grid-cols-1
             sm:grid-cols-2 
             lg:grid-cols-4 
             gap-5
             ">
        {data.map((data) => (
          <div key={data.id}>
            <ColorProductCard
              title={data.title}
              src={data.url}
              price={data.price}
              description={data.description}
              bgColor={data.bgColor}
            />
          </div>
        ))}
      </div>
      <div className=" flex items-center pt-5 justify-center">
      <Button 
      label="View More" 
      onClick={() => {}} />
      </div>
    </Container>
  );
};

export default NewProducts;
