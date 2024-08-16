"use client";
import { LuFileKey, LuPhone } from "react-icons/lu";
import { FiRotateCw } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Container from "../Container";
import FooterItem from "./FooterItem";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegramPlane,
  FaTwitterSquare,
  FaViber,
} from "react-icons/fa";
import LanguageCheckboxes from "./LanguageCheckbox";
import Image from "next/image";

const FooterContent = () => {
  return (
    <div>
      <Container>
        <div className=" grid lg:grid-cols-4 grid-cols-2 gap-8 pt-5">
          <div className=" flex flex-col space-y-5">
            <div className=" flex flex-col gap-1">
              <h1 className=" text-lg mb-2">Customer Service</h1>
              <FooterItem label="Terms & Privacy Policy" icon={LuFileKey} />
              <FooterItem label="Return Policy" icon={FiRotateCw} />
            </div>
            <div className=" flex flex-col">
              <h1 className=" text-lg mb-2">Payment</h1>
              <div className=" flex gap-1">
                <div className="relative w-[90px] h-[50px]">
                  <Image
                    src="/images/kpay.png"
                    className=" object-cover rounded-md"
                    fill
                    alt="qr"
                  />
                </div>
                <div className="relative w-[90px] h-[50px]">
                  <Image
                    src="/images/wave.png"
                    className=" object-cover rounded-md"
                    fill
                    alt="qr"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-1 space-y-5">
            <div>
              <h1 className=" text-lg mb-2">Language</h1>
              <LanguageCheckboxes />
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" text-lg mb-2">Follow Us On</h1>
              <div className=" flex gap-3">
                <FaFacebookSquare size={20} />
                <FaTwitterSquare size={20}  />
                <FaInstagramSquare size={20}  />
                <FaTelegramPlane size={20}  />
                <FaViber />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <h1 className=" text-lg mb-2">Contact Us</h1>
            <FooterItem
              label="Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thinggangyun Tsp, Yangon"
              icon={IoLocationOutline}
            />
            <FooterItem label="09458489458" icon={LuPhone} />
          </div>
          <div className=" flex flex-col">
            <h1 className=" text-lg mb-2">Download Our App</h1>
            <div className="relative w-[100px] h-[100px]">
              <Image src="/images/qr.webp" fill alt="qr" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-10 text-xs text-gray-500">
          <div>@Copyright 2024 C by D Co.ltd. All rights reserved</div>
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;
