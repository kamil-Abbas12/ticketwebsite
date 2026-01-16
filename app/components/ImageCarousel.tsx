"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel() {
  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full rounded-lg border border-gray-300 overflow-hidden shadow-sm bg-white">

              {/* Image */}
              <div className="w-full h-[180px] sm:h-[200px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.city}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3">

                <div className="flex flex-wrap gap-1">
                  <span className="text-lg font-bold">{item.city},</span>
                  <span className="text-lg">{item.country}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-semibold">
                    ${item.price}
                  </span>

                  <button className="rounded-md px-4 py-2 border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
                    Book Now
                  </button>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* ================= DATA ================= */

const data = [
  {
    image: "/atl.jpg",
    city: "Atlanta",
    country: "Georgia",
    price: "1122",
  },
  {
    image: "/bos.jpg",
    city: "Boston",
    country: "Massachusetts",
    price: "1592",
  },
  {
    image: "/van.jpg",
    city: "Vancouver",
    country: "British Columbia",
    price: "1462",
  },
  {
    image: "/tor.jpg",
    city: "Toronto",
    country: "Ontario",
    price: "1122",
  },
  {
    image: "/mex.jpg",
    city: "Mexico City",
    country: "Mexico",
    price: "1122",
  },
];
