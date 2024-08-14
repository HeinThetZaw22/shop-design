import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface ProductCardProps {
  title: string;
  price: number;
  src: string;
  description?: string;
  discount?: number;
  discountPrice?: number;
  points?: string;
  textWhite?: boolean;
}
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  src,
  description,
  discount,
  discountPrice,
  points,
  textWhite
}) => {
  return (
    <div className=" col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-1 w-full">
        <div
          className="
             relative
             bg-gray-100
             aspect-square 
             rounded-xl  
             w-full 
             overflow-hidden
             "
        > 
        {discount && (<div className="absolute top-0 right-0 text-xs px-2 rounded-bl-xl bg-red-500 text-white">{discount} % off</div>)}
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
        <div className={`text-md ${textWhite ? "text-gray-100" : "text-neutral-500"}`}>{title}</div>
        <div className={`text-sm text-neutral-500 ${textWhite ? "text-gray-100" : "text-neutral-500"}`}>{description}</div>
        <div className={`font-medium ${textWhite ? "text-gray-200" : "text-neutral-800"}`}>{price} MMK</div>
        {discountPrice && (
          <div className={`font-light text-xs  text-neutral-500`}>
          <span className=" line-through">{discountPrice} </span> MMK
        </div>
        )}
        <div className="flex flex-row gap-2 items-center">
          <FaStar className="  text-yellow-400" />
          <div className=" text-yellow-400">600 Points</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
