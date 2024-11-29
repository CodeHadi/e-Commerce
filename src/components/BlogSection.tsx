import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "/tadeusz-lakota-Tb38UzCvKCY-unsplash.jpg",
    title: "Luxury Watch Collection Launched",
    date: "Nov 28, 2024",
    comments: 8,
  },
  {
    img: "/hiroshi-tsubono-7Iid4mkhh98-unsplash.jpg",
    title: "New Sports Watches for Active Lifestyles",
    date: "Nov 27, 2024",
    comments: 8,
  },
  {
    img: "/komarov-egor-GL-MCVtMIOo-unsplash.jpg",
    title: "Smartwatches with Cutting-Edge Features",
    date: "Nov 23, 2024",
    comments: 8,
  },
];

const BlogSection = () => {
  return (
    <div className="container py-16 mx-auto px-4 lg:px-8">
      <div className="text-center lg:text-left lg:ml-3 space-y-2">
    <h2 className="font-bold text-3xl md:text-4xl text-white">
      Timeless Elegance
    </h2>
    <p className="text-gray-400 md:text-sm">
    Discover the latest collection of luxury watches designed to complement your style and precision. Explore timeless craftsmanship today.  </p>
  </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 pt-8 text-center">
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comments={item.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
