"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Button from "./Button";
import Autoplay from "embla-carousel-autoplay"
const HomeSlider = () => {
  return (
    <div className="">
      <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        })
      ]}
      >
         <CarouselContent className="">   
          <CarouselItem>
            <div className="relative w-full h-[50vh] max-sm:h-[60vh]">
              <Image
                className=" object-cover"
                alt="slider"
                fill
                src={"/images/slider3.jpg"}
              />
              <div className="absolute space-y-2 text-white text-center bottom-[15%] left-1/2 transform -translate-x-1/2">
                <h3>The Best Look</h3>
                <h1 className=" text-3xl font-bold">Anytime Anywhere</h1>
                <p>Starts from 10,000 MMK</p>
                <Button outline small onClick={() => {}} label="View" />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" relative w-full h-[50vh] max-sm:h-[60vh]">
              <Image
                className=" object-cover"
                alt="slider"
                fill
                src={"/images/slider2.avif"}
              />
              <div className="absolute space-y-2 text-white text-center bottom-[15%] left-1/2 transform -translate-x-1/2">
                <h3>EZ Tube</h3>
                <h1 className=" text-3xl font-bold">Compact Brilliance</h1>
                <p>Starts from 10,000 MMK</p>
                <Button outline small onClick={() => {}} label="View" />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" relative w-full h-[50vh] max-sm:h-[60vh]">
              <Image
                className=" object-cover"
                alt="slider"
                fill
                src={"/images/slider4.jpg"}
              />
              <div className="absolute space-y-2 text-white text-center bottom-[15%] left-1/2 transform -translate-x-1/2">
                <h3>Z POP</h3>
                <h1 className=" text-3xl font-bold">Make Vaping Easy</h1>
                <p>Starts from 10,000 MMK</p>
                <Button outline small onClick={() => {}} label="Learn More" />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeSlider;
