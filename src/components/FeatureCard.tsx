import React from "react";

interface propsType {
  img: JSX.Element;
  title: string;
  desc: string;
}

const FeatureCard = ({ img, title, desc }: propsType) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="h-[50px] w-[50px] text-Accent ">{img}</div>
      <div className="space-y-1">
        <h2 className="font-medium text-xl uppercase text-white">{title}</h2>
        <p className="text-gray-600 text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
