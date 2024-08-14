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
import Autoplay from "embla-carousel-autoplay";
import Container from "../Container";

const HomeSlider = () => {
  return (
    <div className="my-10">
      <Container>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          >
          <CarouselContent className="">             
            <CarouselItem>
              <div className=" 
              flex 
              flex-row 
              max-sm:flex-col
              items-center 
              gap-5
              lg:gap-28
              justify-center
              grid-bg
              py-10
              bg-neutral-800
              rounded-md
              ">
              <div className="
              relative 
                w-[150px]
                h-[150px]
              ">
                <Image
                  className=" 
                  rounded-md 
                  object-cover"
                  alt="slider"
                  fill
                  src={"/images/vapes.png"}
                />
                 </div>
                <div className="
                
                text-gray-100 
                flex
                flex-col
                gap-3
                ">
                  <h3>The Best Look</h3>
                  <h1 className=" 
                  text-3xl 
                  font-bold">Try New Flavor</h1>
                  <p>Citrus Monster</p>
                  <div className="inline-block">
                  <Button 
                  outline 
                  small 
                  onClick={() => {}} 
                  label="View" />
                  </div>
                </div>
                </div>
            </CarouselItem>
            <CarouselItem>
              <div className=" 
              flex 
              flex-row 
              max-sm:flex-col
              items-center 
              justify-center
              gap-5
              lg:gap-28
              grid-bg
              py-10
              bg-neutral-800
              rounded-md
              ">
              <div className="
              relative 
                w-[150px]
                h-[150px]
              ">
                <Image
                  className=" 
                  rounded-md 
                  object-cover"
                  alt="slider"
                  fill
                  src={"/images/innobar.webp"}
                />
                 </div>
                <div className="
                
                text-gray-100 
                flex
                flex-col
                gap-3
                ">
                  <h3>The Best Look</h3>
                  <h1 className=" 
                  text-3xl 
                  font-bold">Anytime Anywhere</h1>
                  <p>Starts from 10,000 MMK</p>
                  <div className="inline-block">
                  <Button 
                  outline 
                  small 
                  onClick={() => {}} 
                  label="View" />
                  </div>
                </div>
                </div>
            </CarouselItem>
            <CarouselItem>
              <div className=" 
              flex 
              flex-row 
              max-sm:flex-col
              items-center 
              justify-center
              gap-5
              lg:gap-28
              grid-bg
              py-10
              bg-neutral-800
              rounded-md
              ">
              <div className="
              relative 
                w-[150px]
                h-[150px]
              ">
                <Image
                  className=" 
                  rounded-md 
                  object-cover"
                  alt="slider"
                  fill
                  src={"/images/A3.avif"}
                />
                 </div>
                <div className="
                
                text-gray-100 
                flex
                flex-col
                gap-3
                ">
                  <h3>The Best Look</h3>
                  <h1 className=" 
                  text-3xl 
                  font-bold">Anytime Anywhere</h1>
                  <p>Starts from 10,000 MMK</p>
                  <div className="inline-block">
                  <Button 
                  outline 
                  small 
                  onClick={() => {}} 
                  label="View" />
                  </div>
                </div>
                </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeSlider;
