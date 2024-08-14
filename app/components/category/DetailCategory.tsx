"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import ProductCard from "../product/ProductCard";

interface DetailCategoryProps {
    title: string;
    description: string;
    src: string;
}

const DetailCategory: React.FC<DetailCategoryProps> = ({
    title,
    description,
    src,
}) => {
    const products = [
        { title: "Refreshing Mint", price: 1000, src: "/images/Phantom.webp" },
        { title: "Citrus Blast", price: 1200, src: "/images/Caliburn.avif" },
        { title: "KleinBlue", price: 1100, src: "/images/KleinBlue.png" },
        { title: "InnoBar", price: 1100, src: "/images/innobar.webp" },
        { title: "TrineQ", price: 1100, src: "/images/trineQ.webp" },
        { title: "VmatePod.avif", price: 1100, src: "/images/VmatePod.avif" },
        { title: "ZyonGreen", price: 1100, src: "/images/ZYONgreen.webp" },
      ];
  return (
    <div className="my-10">
      <Container>
        <div className="
        flex
        flex-row
        max-sm:flex-col
        items-center
        py-5
      bg-neutral-900
        rounded-md
        grid-dot
        ">
            <div className=" w-1/3 flex flex-col max-sm:flex-row sm:px-10 gap-3 items-center h-full">
                <div className="
                text-gray-100
                mb-5
                ">
                    <h1 className=" text-xl font-bold">{title}</h1>
                    <p className=" text-xs">{description}</p>
                </div>
                <div className="
                    relative 
                    w-[150px]
                    h-[150px]
                    max-sm:hidden
                    max-sm:mb-5
                    ">
                        <Image
                        className=" 
                        rounded-md 
                        object-cover"
                        alt="slider"
                        fill
                        src={src}
                        />
                </div>
            </div>
            <div className=" w-2/3">
                <Carousel >
                <CarouselContent className="">
                    {products.map((product, i) => (
                        <CarouselItem key={i} className=" basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <ProductCard textWhite title={product.title} price={product.price} src={product.src} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=" w-8 h-8 rounded-full -ml-10 max-sm:-ml-24" />
                <CarouselNext className=" w-8 h-8 rounded-full -mr-10 max-sm:-mr-24" />
                </Carousel>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailCategory;
