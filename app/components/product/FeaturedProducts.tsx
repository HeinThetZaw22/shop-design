"use client";
import React from "react";
import Container from "../Container";
import ProductCard from "./ProductCard";
import Button from "../Button";

export const data = [
  {
    id: 1,
    url: "/images/Phantom.webp",
    title: "Phantom",
    description: "Variety of choices available",
    price: 15000,
    discount: 15,
    discountPrice: 12500,
  },
  {
    id: 2,
    url: "/images/Caliburn.avif",
    title: "Caliburn",
    description: "Easy, clean and superb flavor",
    price: 30000,
    discount: 15,
    discountPrice: 20000,
  },
  {
    id: 3,
    url: "/images/GoldTobacco.avif",
    title: "GoldTobacco",
    description: "Variety of choices available",
    price: 15000,
    discount: 15,
    discountPrice: 12500,
  },
  {
    id: 4,
    url: "/images/trineQ.webp",
    title: "TrineQ",
    description: "Variety of choices available",
    price: 15000,
    discount: 15,
    discountPrice: 12500,
  },
  {
    id: 5,
    url: "/images/ZYONgreen.webp",
    title: "Zyon Green",
    description: "Variety of choices available",
    price: 15000,
    discount: 15,
    discountPrice: 12500,
  },
  {
    id: 6,
    url: "/images/KleinBlue.png",
    title: "Klein Blue",
    description: "Variety of choices available",
    price: 15000,
    discount: 15,
    discountPrice: 12500,
  },
];

const FeaturedProducts = () => {
  return (
    <Container>
      <div className="flex flex-col pt-10 items-center justify-center">
        <h1 className=" text-3xl font-bold">Best Deals</h1>
        <h3 className=" text-gray-500">Just For You</h3>
      </div>
      <div
        className=" 
             pt-10 grid 
             scroll-smooth
             grid-cols-2 
             sm:grid-cols-2 
             md:grid-cols-3 
             lg:grid-cols-4 
             xl:grid-cols-5 
             2xl:grid-cols-6 
             gap-5
             "
      >
        {data.map((data) => (
          <div key={data.id}>
            <ProductCard
              title={data.title}
              src={data.url}
              price={data.price}
              discount={data.discount}
              discountPrice={data.discountPrice}
            />
          </div>
        ))}
      </div>
      <div className=" flex items-center pt-5 justify-center">

      <Button label="View More" onClick={() => {}} />
      </div>
    </Container>
  );
};

export default FeaturedProducts;
