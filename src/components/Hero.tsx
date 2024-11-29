import React from "react";
import Image from "next/image";
import hero from "../../public/main.jpg";

const Hero = () => {
  return (
    <div className="container relative pt-13 p-5">
      <Image src={hero} alt="hero" height={900} width={1500} priority />
      <div className="h-[200px] w-[250px] absolute bg-black top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] space-y-3 lg:w-[300px] lg:h-[250px] xl:h-[300px] p-6 rounded-sm pt-11">
        <h2 className="text-[18px] lg:text-[24px] xl:text-[36px] leading-tight text-white text-left">
          Explore New Men's Watches
        </h2>
        <p className="text-gray-400 text-[10px] xl:text-[14px] text-left">
          Discover the latest collection crafted with precision and style
        </p>
        <button className="bg-transparent border-2 border-Accent  uppercase text-gray-500 text-[10px] lg:text-[14px] py-1 px-3 rounded-md hover:text-gray-200 font-bold">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Hero;
