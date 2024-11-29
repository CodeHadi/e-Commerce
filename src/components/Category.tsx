import React from 'react'
import CategoryCard from './CategoryCard';
import { Whisper } from 'next/font/google';

const whisper = Whisper({   subsets: ["latin"], weight:["400"]});
const data = [
    {
      img: "/watch-category-1.jpg",
      type: "Luxury Watches",
      quantity: "5 Items",
    },
    {
      img: "/watch-category-2.jpg",
      type: "Sports Watches",
      quantity: "10 Items",
    },
    {
      img: "/watch-category-3.jpg",
      type: "Smartwatches",
      quantity: "8 Items",
    },
  ];
  

const Category = () => {
  return (
    <div className="bg-[url('/background.jpg')] bg-no-repeat p-12 my-32 bg-cover">
    <div className="container text-center text-white">
        <h3 className={`${whisper.className} text-[40px] text-gray-500 `}>Favorite Category</h3>
        <h2 className="text-[40px] font-medium my-3">Top Category</h2>
        <div className="flex justify-center gap-4 md:gap-16 pt-12">
            {data.map((item) => (
                <CategoryCard   
                    key={item.type}
                    img={item.img}
                    type={item.type}
                    quantity={item.quantity}
                />
            ))}
        </div>
    </div>
    </div>
  )
}
 
export default Category
