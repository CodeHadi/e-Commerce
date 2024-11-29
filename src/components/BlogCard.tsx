import React from 'react'
import Image from 'next/image'   

interface propstypes {
    img : string , 
    title : string ,
    comments : number ,
    date : string ,
}
const BlogCard = ( {img , title , comments ,date}: propstypes) => {
  return (
    <div className='space-y-2'> 
      <Image 
      className='rounded-lg hover:scale-105 transition-transform aspect-[4/4] mx-auto w-[350px] h-[300px]'
      src={img}
      width={300} 
      height={150}
      alt='post'
      />
      <div className="text-Accent font-medium">
        <span>{date}</span>
        <span>{comments} Comments</span>
      </div>
      <h3 className='font-bold text-[1rem] text-white'>{title}</h3>
    </div>
  )
}


export default BlogCard
