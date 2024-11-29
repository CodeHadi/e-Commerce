"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import Data from "@/utils/ProductsData";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const DetailPage = () => {
  const param = useParams();
  const [ProductData, setProductData] = useState<any>();

  useEffect(() => {
    const id = param.id;
    const getProductData = Data.filter((item) => item.id.toString() === id)[0];
    setProductData(getProductData);
  });
  return (
    <div className="pt-8">
      <div className="bg-gray-700 py-4">
        <div className="container flex gap-4 items-center text-white">
          <Link href="/" className="cursor-pointer hover:text-Accent">
            Home
          </Link>

          <div className="w-[30px] h-[2px] bg-gray-400 text-white" />
          <p className="capitalize">{ProductData?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p>{ProductData?.name}</p>
        </div>
      </div>

      <div className="container pt-8 mt-16 ">
        <div className="grid grid-cols-2 gap-16">
          <div className="bg-gray-700 p-5 rounded-sm">
            <Image
              className="w-full h-full bg-transparent p-7 "
              src={ProductData?.img}
              width={1000}
              height={1200}
              alt={ProductData?.name}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-self-start text-Accent">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
              <p className="text-gray-400 text-[14px] ml-2 cursor-pointer hover:text-Accent">
                (8 customer review)
              </p>
            </div>

            <div className="text-white space-y-6">
              <h2 className="text-3xl font-semibold">{ProductData?.name}</h2>
              <p className="text-xl">$ {ProductData?.price}.00</p>
            </div>

            <p className="text-gray-300 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              aperiam hic suscipit quia ipsum! Odio recusandae dignissimos
              quaerat autem dolore natus nemo ea praesentium, expedita totam
              dicta provident. Exercitationem, sapiente.
            </p>
            <p className="text-gray-300 text-[14px]">20 in stock</p>

            <button
              className="uppercase bg-transparent py-2 px-6 rounded-lg text-gray-500
                flex gap-2 items-center hover:text-white border-2 border-Accent"
            >
              <AiOutlineShoppingCart className="text-[24px]" />
              Add to Cart
            </button>

            <div className="flex gap-4 items-center uppercase py-4 text-[14px] text-white">
              <div className="flex gap-1 items-center">
                <AiOutlineHeart className="text-[24px]" />
                Add to card
              </div>
              <div className="flex gap-1 items-center">
                <MdCompareArrows className="text-[24px]" />
                Compare
              </div>
            </div>

            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div className="text-white">Name: {ProductData?.name}</div>
            <p className="capitalize text-white">Category : {ProductData?.category[0]}</p>
            <div className="flex gap-1 items-center text-white">
              Tags:{" "}
              {/* {ProductData?.category.map((item : any) => (
                <div key={item}  className="text-white">{item}</div>
              ))} */}
            </div>
            <div className="w-[30px] h-[2px] bg-gray-400 text-white" />
            <div className="flex gap-1 items-center pt-4 text-white">
              SHARE:{" "}
              <div className="flex gap-2 items-center text-[18px] text-white">
                <FaFacebookSquare className="hover:text-[#1877F2]" /> <FaXTwitter />
                <FaInstagram  className="hover:text-[#ff3131]"/>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
