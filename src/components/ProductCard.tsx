import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/feature/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

export interface Iproduct {
  key?: number;
  id: number;
  img: string;
  name: string;
  price: number;
  sale: boolean | undefined;
  category?: string;
}
const ProductCard = ({ id, img, name, price,  sale }: Iproduct) => {

  const router = useRouter();
  const dispatch = useAppDispatch();

const getRating = () => {
  const randomnumber = (min: number ,max : number) => {
      return Math.ceil(Math.random() * (max-min) + min);
  };
  switch (randomnumber(0 ,5)) {
      case 0:
          return(
            <div className="flex justify-center text-Accent pt-4 pb-2">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          );
          
          case 1: 
          return(
            <div className="flex justify-center text-Accent pt-4 pb-2">
              <FaStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          );
          case 2: 
          return(
            <div className="flex justify-center text-Accent pt-4 pb-2">
              <FaStar />
              <FaStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          );
          case 3: 
          return(
            <div className="flex justify-center text-Accent pt-4 pb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
              <CiStar />
            </div>
          );
          case 4: 
          return(
            <div className="flex justify-center text-Accent pt-4 pb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
          );
          case 5: 
          return(
            <div className="flex justify-center text-Accent pt-4 pb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          );
      default:
        return <div></div>
          
  }
}


const addProductToCart = (e : React.FormEvent) =>{
  e.stopPropagation();
  const payload ={
    id,
    name,
    img,
    price,
    quantity: 1,
  }

  dispatch(addToCart(payload));
} 


  return (
    <>
      <div className="container group cursor-pointer" onClick={() => router.push(`/details/${id}`)}>
        <div className="relative">
          <Image
            className="w-full  h-[400px] object-cover rounded-sm"
            width={1000}
            height={1142}
            src={img}
            alt={name}
          />
          {sale && (
            <div className="bg-red-600 inline-block absolute top-0 left-0 text-white text-[14px] rounded-md px-2 py-1 m-4 font-bold">
              SALE!
            </div>
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0505055c] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
            <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
              <div className="bg-transparent border-2 border-Accent text-gray-200 w-[50px]  h-[50px]  text-[26px] grid place-items-center rounded-full">
                <AiOutlineHeart />
              </div>
              <div className="bg-transparent border-2 border-Accent text-gray-200 w-[50px]  h-[50px]  text-[26px] grid place-items-center rounded-full"  onClick={addProductToCart}>
                <AiOutlineShoppingCart />
              </div>
            </div>
          </div>
        </div>
          {getRating()}
        <h2 className="font-medium  py-4 hover:text-Accent text-white">{name}</h2>
        <h2 className="text-gray-400 font-light">{price}.00</h2>    
      </div>
    </>
  );
};

export default ProductCard;