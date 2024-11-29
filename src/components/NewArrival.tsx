"use client";
import React, { useEffect, useState } from "react";
import { Whisper } from "next/font/google";
import Data from "@/utils/ProductsData";
import ProductCard, { Iproduct } from "./ProductCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });
const tabsData = [
  "ALL",
  "SPORTS WATCHES",
  "DRESS WATCHES",
  "SMARTWATCHES",
  "LUXURY",
  "ACCESSORIES",
];

const shuffleArray = (array: Iproduct[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const NewArrival = () => {
  const [selectedTabs, setSelectedTabs] = useState(0);
  const [data, setData] = useState<Iproduct[]>([]);

  // Initialize data only once
  useEffect(() => {
    const shuffledData = shuffleArray(Data).slice(0, 16);
    setData(shuffledData);
  }, []);

  const handleTab = (index: number) => {
    setSelectedTabs(index);

    const category = tabsData[index].toLowerCase();
    if (category === "all") {
      setData(shuffleArray(Data).slice(0, 16)); // All data
    } else {
      const filteredData = Data.filter((item) =>
        item.category.toLowerCase().includes(category)
      );
      setData(shuffleArray(filteredData).slice(0, 16)); // Filtered data
    }
  };

  return (
    <div className="container pt-28">
      <div className="text-center">
        <h3 className={`${whisper.className} text-[40px] text-gray-500`}>
          Precision in Every Detail
        </h3>
        <h2 className="font-semibold text-5xl text-white">New Arrivals</h2>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
          {tabsData.map((text, index) => (
            <li
              key={index}
              className={`cursor-pointer text-white mb-12 ${
                selectedTabs === index ? "text-Accent" : ""
              } hover:text-Accent`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="grid gap-8 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
