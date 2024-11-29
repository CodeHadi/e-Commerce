import React from 'react'
import Image from 'next/image';

interface propstypes{
    img : string;
    type : string;
    quantity : string
}

const CategoryCard = ({img , type , quantity}:propstypes) => {
  return (
    <div className="space-y-4 flex flex-wrap justify-center">
    <div className="flex flex-col items-center mb-4">
      <Image
        className="rounded-full border-4 md:border-6 border-Accent w-[250px] h-[250px] object-cover p-2"
        src={img}
        width={250}
        height={250}
        alt={type}
      />
      <div className="text-center">
        <h4 className="text-white text-xl font-semibold my-2">{type}</h4>
        <p className="text-white">{quantity}</p>
      </div>
    </div>
  </div>
  
  )
}

export default CategoryCard
