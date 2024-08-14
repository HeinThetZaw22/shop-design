"use client";
import React from "react";
import Container from "../Container";
import { IoDiamond } from "react-icons/io5";
import Button from "../Button";
import Image from "next/image";
import { FaCoins } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

const CategoryBox = () => {
  return (
    <Container>
      <div className="my-10">
        <div className="
        grid
        grid-cols-5
        lg:space-x-3
        max-lg:grid-cols-1
        gap-y-3
        w-full
        text-gray-100
        ">
          <section className=" col-span-3  max-md:col-span-1">
                <div className=" 
                flex 
                flex-row 
                h-full 
                py-10 i
                tems-center 
                grid-bg
                bg-neutral-900 
                hover:bg-neutral-900/95
                transition
                duration-300
                cursor-pointer
                rounded-md">
                    <div className="
                    flex 
                    flex-col 
                    gap-3 
                    h-full 
                    justify-center 
                    p-5 
                    w-2/3">
                        <div className="flex items-center gap-3">
                            <IoDiamond size={40} className=" text-blue-500" />
                            <FaCoins size={40} className=" text-yellow-400" />
                            <BsCoin size={40} className=" text-gray-300" />
                        </div>
                        <h1 className=" 
                        text-3xl 
                         
                        font-bold">
                            Membership Program
                        </h1>
                        <p className=" text-sm text-gray-400">Be a Vape Pi Member and get our special exclusive offers</p>
                        <div className=" inline-block">
                            <Button 
                            outline 
                            small 
                            label="View" 
                            onClick={() => {}} />
                        </div>
                    </div>
                    <div className=" lg:mt-12 relative w-[200px] h-[200px]">
                        <Image 
                        fill 
                        alt="vape" 
                        src={"/images/vapes.png"} />
                    </div>
                </div>
          </section>

          <section className=" 
          col-span-2 
          max-lg:col-span-1">
            <div className="
            grid
            grid-cols-2
            h-full
            gap-x-3
            ">
              <div className=" 
              row-span-2 
              bg-neutral-900
              hover:bg-neutral-900/95
              grid-gradient
              transition
              duration-300
              cursor-pointer
              rounded-md">
                <div className="
                flex 
                flex-col 
                items-center 
                justify-center 
                h-full 
                p-5">
                    <Image
                        width={150}
                        height={90}
                        alt="vape"
                        src={"/images/Caliburn.avif"}
                    />
                    <h3 className=" text-lg">Devices</h3>
                    <p className=" text-sm text-gray-400">Find the best for you here!</p>
                </div>
              </div>
              <div className=" 
              flex 
              flex-col 
              gap-3">
                <div className="
                flex 
                flex-col 
                bg-neutral-900
                hover:bg-neutral-900/95
                transition
                duration-300
                cursor-pointer
                rounded-md
                p-5">
                  <Image
                    className="-translate-y-6"
                    width={100}
                    height={90}
                    alt="vape"
                    src={"/images/ZYONgreen.webp"}
                  />
                  <h3 className=" text-lg">Pods</h3>
                  <p className=" text-sm text-gray-400">Variety of choices available</p>
                </div>
                <div className="
                flex 
                flex-col 
                bg-neutral-900
                hover:bg-neutral-900/95
                transition
                duration-300
                cursor-pointer
                rounded-md
                p-5">
                  <Image
                    className="-translate-y-6"
                    width={100}
                    height={90}
                    alt="vape"
                    src={"/images/KleinBlue.png"}
                  />
                  <h3 className=" text-lg">Disposable</h3>
                  <p className=" text-sm text-gray-400">Easy, clean & superb</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default CategoryBox;
