"use client";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  src: string;
  description?: string;
  bgColor?: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  src,
  description,
  bgColor,
}) => {
  return (
    <div className=" col-span-1 cursor-pointer group">
      <div className={`
        flex 
        flex-row 
        items-center 
        bg-neutral-900/95 
        min-h-[170px]
        rounded-md 
        p-3 
        gap-1 
        w-full
        ${bgColor || "bg-neutral-900/95" }
        `}>
        <div className=" space-y-2 pl-5">
          <div className=" text-md font-medium text-gray-100">{title}</div>
          <div className=" text-sm text-neutral-300">{description}</div>
          <div className=" text-sm text-neutral-300">{price} MMK</div>
        </div>
        <div
          className="
             relative
             aspect-square 
             rounded-xl  
             w-full 
             overflow-hidden
             "
        >
          <Image
            src={src}
            fill
            alt="card"
            className=" 
            object-cover 
            w-full h-full 
            transition 
            group-hover:scale-110
            "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
