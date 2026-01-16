"use client";

import React from "react";
import Image from "next/image";
import { DollarSign, PhoneCall } from "lucide-react";
import { GiMountainRoad } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { PropsWithChildren } from "react";

/* ================= BADGE COMPONENT ================= */

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-12 h-12 shrink-0 rounded-full border-4 border-blue-700 shadow-lg flex items-center justify-center overflow-hidden bg-white">
      {children}
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */

const Advance = () => {
  return (
    <section className="relative w-full bg-white z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <img
            width={120}
            src="https://c.fareportal.com/gcms//cms/global_assets/sitelogo_92.webp"
            alt="logo"
          />
          <h1 className="text-orange-600 font-bold text-xl">advantage</h1>
        </div>

        <h1 className="font-bold text-gray-900 text-xl sm:text-2xl mt-3">
          Book with Confidence: 40M+ Travelers, 20+ years of Expertise
        </h1>

        {/* Features Grid */}
        <div className="w-full bg-blue-50 border border-blue-100 mt-6 rounded-lg px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* Feature 1 */}
            <div className="flex gap-3 items-center">
              <Badge>
                <DollarSign className="w-6 h-6 text-blue-700" />
              </Badge>
              <div>
                <h2 className="font-bold">Price Match Promise</h2>
                <p className="text-sm text-gray-600">
                  Find great flight deals to destinations worldwide
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 items-center">
              <Badge>
                <PhoneCall className="w-6 h-6 text-blue-700" />
              </Badge>
              <div>
                <h2 className="font-bold">24/7 Customer Support</h2>
                <p className="text-sm text-gray-600">
                  Speak to our travel experts: anytime, anywhere
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3 items-center">
              <Badge>
                <GiMountainRoad size={24} className="text-blue-700" />
              </Badge>
              <div>
                <h2 className="font-bold">ClubMiles Rewards</h2>
                <p className="text-sm text-gray-600">
                  Earn points and air miles to maximize your rewards
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-3 items-center">
              <Badge>
                <IoMdClose size={24} className="text-blue-700" />
              </Badge>
              <div>
                <h2 className="font-bold">Easy Cancellations</h2>
                <p className="text-sm text-gray-600">
                  Convenient options online and 24/7 Customer Support
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Recommended Section */}
        <div className="mt-12">
          <h2 className="font-bold text-lg sm:text-xl">
            Recommended for your next trip
          </h2>
          <p className="text-sm sm:text-md text-gray-600">
            Based on your most recent searches or your location
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">

          <CityCard
            image="/pic.jpg"
            city="Jeddah"
            price="$400.20"
            route="ISB-JED"
            date="Mar 03 - Mar 29"
            min="$546"
            max="$601"
          />

          {/* Help Card */}
          <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center p-6 text-center bg-white">

            <Image src="/call.jpg" width={120} height={120} alt="call" />

            <h3 className="font-semibold text-lg mt-4">
              Need Help Finding Deals?
            </h3>

            <p className="text-gray-700 mt-2">
              Our live agents are ready to help you!
            </p>

            <p className="text-gray-900 mt-4 font-semibold">
              Book Now - Call Us
            </p>

            <button className="mt-4 px-3 py-2 w-full max-w-xs border-2 flex hover:bg-green-50 cursor-pointer justify-between items-center border-green-700 rounded-md font-semibold">

              <div className="w-10 h-10 border-2 border-green-800 rounded-md bg-green-800 flex items-center justify-center">
                <MdPhone size={18} className="text-white" />
              </div>

              <span className="text-green-800">
                1-845-848-0154
              </span>

            </button>

            <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-4">
              24/7 Assistance Available
            </p>

          </div>

          <CityCard
            image="/lon.jpg"
            city="London"
            price="$724.90"
            route="ISB-LDN"
            date="Mar 12 - April 13"
            min="$806"
            max="$942"
          />

          <CityCard
            image="/new.jpg"
            city="New York City"
            price="$801.99"
            route="ISB-NYC"
            date="Feb 05 - Feb 17"
            min="$1,163"
            max="$1,409"
          />

        </div>

        {/* Footer Note */}
        <p className="mt-6 text-xs sm:text-sm flex flex-wrap gap-2 items-center text-gray-500">
          Fares are round trip. Fares incl. all fuel surcharges, Jan 14, 2026 at 16:55:39 PM UTC.
          <IoInformationCircle size={18} />
        </p>

      </div>
    </section>
  );
};

/* ================= CITY CARD ================= */

interface CityCardProps {
  image: string;
  city: string;
  price: string;
  route: string;
  date: string;
  min: string;
  max: string;
}

const CityCard: React.FC<CityCardProps> = ({
  image,
  city,
  price,
  route,
  date,
  min,
  max,
}) => (
  <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">

    <div className="relative w-full h-[180px] sm:h-[220px]">
      <Image src={image} alt={city} fill className="object-cover" />
    </div>

    <div className="px-4 py-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg">{city}</span>
        <span className="font-bold text-lg text-green-600">{price}</span>
      </div>

      <div className="flex justify-between mt-1 text-sm">
        <span>{route}</span>
        <span className="text-gray-500">Round Trip</span>
      </div>

      <p className="text-sm text-gray-500 font-semibold mt-1">{date}</p>
    </div>

    <div className="px-4 pb-5">
      <div className="h-3 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 via-orange-400 to-red-500 shadow-md" />

      <div className="flex justify-between mt-2 mx-5 text-gray-500 text-sm">
        <span>{min}</span>
        <span>{max}</span>
      </div>

      <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-2">
        Similar trip cost <IoInformationCircle size={16} />
      </p>
    </div>
  </div>
);

export default Advance;
