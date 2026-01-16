"use client";
    import ImageCarousel from "./ImageCarousel";

import React from 'react'


const Travel = () => {
  return (
<section className='w-full h-full '>
<div className='w-full h-full flex flex-col py-8 bg-white px-25 pt-10 '>
    <h2 className='font-bold text-gray-950 text-2xl '>Your match, your city - travel for less this summer</h2>
    <h1 className=' text-gray-600 text-md pt-2'>Book your next summer trip and score savings </h1>
<div>

    <div className="p-10">
      <ImageCarousel />
    </div>
 

</div>
</div>
</section>
)
}

export default Travel