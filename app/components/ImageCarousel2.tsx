"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ImageCarousel() {
  return (
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  // pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  loop
  className="w-full h-[280px] "
>

      <SwiperSlide>
        <div className="w-full h-full rounded-md  border border-gray-300 flex flex-col  ">

         <img src="/atl.jpg" className="w-full h-full object-cover rounded-md" />
        <div className="flex flex-col my-3 ml-2">

        <div className="flex gap-1 ">

        <span className="text-xl font-bold  "> Atlanta,</span>
        <span className="text-xl  "> Georgia</span>
                </div>
                        <div className="flex gap-1 justify-between items-center w-full mt-2">

                <span className="teext-gray-500">$1122</span>
<button className="rounded-md px-3 py-2 border border-blue-600  text-blue-600 justify-center font-bold items-center w-1/2 mr-2 ">
Book Now
</button>
                        </div>

        </div>
        </div>

      </SwiperSlide>

      <SwiperSlide>
  <div className="w-full h-full rounded-md  border border-gray-300 flex flex-col  ">

         <img src="/bos.jpg" className="w-full h-full object-cover rounded-md" />
        <div className="flex flex-col my-3 ml-2">

        <div className="flex gap-1 ">

        <span className="text-xl font-bold  "> Boston,</span>
        <span className="text-xl  "> Massachusetts</span>
                </div>
                        <div className="flex gap-1 justify-between items-center w-full mt-2">

                <span className="teext-gray-500">$1592</span>
<button className="rounded-md px-3 py-2 border border-blue-600  text-blue-600 justify-center font-bold items-center w-1/2 mr-2 ">
Book Now
</button>
                        </div>

        </div>
        </div>      </SwiperSlide>

      <SwiperSlide>
  <div className="w-full h-full rounded-md  border border-gray-300 flex flex-col  ">

         <img src="/van.jpg" className="w-full h-full object-cover rounded-md" />
        <div className="flex flex-col my-3 ml-2">

        <div className="flex gap-1 ">

        <span className="text-xl font-bold  "> Vancouver,</span>
        <span className="text-xl  "> British Columbia</span>
                </div>
                        <div className="flex gap-1 justify-between items-center w-full mt-2">

                <span className="teext-gray-500">$1462</span>
<button className="rounded-md px-3 py-2 border border-blue-600  text-blue-600 justify-center font-bold items-center w-1/2 mr-2 ">
Book Now
</button>
                        </div>

        </div>
        </div>      </SwiperSlide>
      <SwiperSlide>
  <div className="w-full h-full rounded-md  border border-gray-300 flex flex-col  ">

         <img src="/tor.jpg" className="w-full h-full object-cover rounded-md" />
        <div className="flex flex-col my-3 ml-2">

        <div className="flex gap-1 ">

        <span className="text-xl font-bold  "> Toronto,</span>
        <span className="text-xl  "> Ontario</span>
                </div>
                        <div className="flex gap-1 justify-between items-center w-full mt-2">

                <span className="teext-gray-500">$1122</span>
<button className="rounded-md px-3 py-2 border border-blue-600  text-blue-600 justify-center font-bold items-center w-1/2 mr-2 ">
Book Now
</button>
                        </div>

        </div>
        </div>      </SwiperSlide>
         <SwiperSlide>
  <div className="w-full h-full rounded-md  border border-gray-300 flex flex-col  ">

         <img src="/mex.jpg" className="w-full h-full object-cover rounded-md" />
        <div className="flex flex-col my-3 ml-2">

        <div className="flex gap-1 ">

        <span className="text-xl font-bold  "> Mexico City,</span>
        <span className="text-xl  "> Mexico</span>
                </div>
                        <div className="flex gap-1 justify-between items-center w-full mt-2">

                <span className="teext-gray-500">$1122</span>
<button className="rounded-md px-3 py-2 border border-blue-600  text-blue-600 justify-center font-bold items-center w-1/2 mr-2 ">
Book Now
</button>
                        </div>

        </div>
        </div>      </SwiperSlide>
    </Swiper>
  );
}
