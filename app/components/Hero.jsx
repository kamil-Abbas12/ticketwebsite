import { ArrowRightCircle, Circle } from 'lucide-react'
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';
import { CircleChevronRight } from 'lucide-react';
const Hero = () => {
  return (
<>
<section className="w-full h-[250px] bg-blue-900">

<div className="flex flex-col justify-start items-start px-25">

<h1 className="text-white font-bold text-3xl pt-6 ">
Cheap Flights - Compare and Save
</h1>
<div className="flex flex-row gap-2 ">


<span className="text-white text-md ">
Fares Starting from 
</span>

<span className="text-[#ffc342] font-bold text-lg flex flex-row">
  $240
  <sup className="f10 mt-2 text-sm">
.20
  </sup>
</span>
<span className="text-[#ffc342] mt-1 pr-2 font-bold">
<CircleChevronRight size={20}  />
</span>

</div>

</div>

</section>
</>

)
}

export default Hero