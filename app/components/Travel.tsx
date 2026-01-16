"use client";

import ImageCarousel from "./ImageCarousel";
import React from "react";

const Travel = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-20">

        {/* Heading */}
        <h2 className="font-bold text-gray-950 text-xl sm:text-2xl">
          Your match, your city — travel for less this summer
        </h2>

        <p className="text-gray-600 text-sm sm:text-md mt-2">
          Book your next summer trip and score savings
        </p>

        {/* Carousel */}
        <div className="mt-8">
          <ImageCarousel />
        </div>

      </div>
    </section>
  );
};

export default Travel;
