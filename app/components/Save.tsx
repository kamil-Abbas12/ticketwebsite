"use client";

import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import StarRating from "./StarRating";

const Save = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <section className="relative w-full bg-white py-10">

      {/* Promo Form */}
      <div className="mx-4 xl:mx-20 rounded-md border border-gray-300 px-4 xl:px-8 py-6">

        <div className="flex flex-col gap-4">

          <div className="flex flex-wrap gap-2 text-xl font-bold">
            <span>Save up to</span>
            <span className="text-orange-500">$15 off</span>
            <span>our fees</span>
          </div>

          <p className="text-gray-700 font-medium">
            Sign up to get up to $15.00 off our fees on selected regions with a promo code!
          </p>

          <div className="flex flex-col lg:flex-row gap-4">

            {/* Checkbox */}
            <div className="w-full lg:w-[40%]">
              <h5 className="text-sm font-semibold mb-2">Add as home airport</h5>

              <label className="flex items-center gap-3 bg-slate-100 rounded-md px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isCheck}
                  onChange={() => setIsCheck(!isCheck)}
                  className="w-5 h-5"
                />
                <span>Islamabad</span>
              </label>
            </div>

            {/* Email */}
            <div className="w-full lg:w-[40%]">
              <h5 className="text-sm font-semibold mb-2">Email Address</h5>
              <input
                placeholder="Enter Email Address"
                className="rounded-md px-4 py-3 border border-gray-400 w-full"
              />
            </div>

            {/* Button */}
            <div className="w-full lg:w-[20%] flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">
                Get Promo Code
              </button>
            </div>

          </div>

          <div className="flex flex-col lg:flex-row justify-between text-sm text-gray-600 mt-3 gap-2">
            <span>
              By signing up, you agree to receive marketing emails from CheapOair (Fareportal).
            </span>
            <span className="underline cursor-pointer">Learn More · Privacy Policy</span>
          </div>

        </div>
      </div>

      {/* App Promo Banner */}
      <div className="mx-4 xl:mx-20 mt-10 rounded-md border border-gray-300 overflow-hidden">

        <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-950 to-blue-900">

          {/* Left Content */}
          <div className="w-full md:w-[70%] p-6 text-white">

            <div className="flex flex-wrap gap-2 text-xl font-bold">
              <span>Save up to</span>
              <span className="text-orange-400">$100 off</span>
              <span>our fees</span>
            </div>

            <p className="mt-2 font-medium">
              First time app users get up to $100.00 off our fees on flights.
            </p>

            <div className="mt-6 space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon size={18} className="text-white" />
                  </span>
                  <span>Get notified when prices drop</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4 text-sm">
              <span className="underline cursor-pointer">Learn More</span>
              <span>Valid until Mar 31</span>
            </div>
          </div>

          {/* Right Image + QR */}
          <div className="w-full md:w-[30%] bg-[url('/sea.jpg')] bg-cover bg-center flex items-center justify-center p-6">

            <div className="bg-white rounded-md shadow-lg p-4 w-full max-w-[350px]">

              <div className="flex justify-between items-center">

                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    Scan the QR Code to download the app
                  </p>

                  <h2 className="text-2xl font-bold">4.7</h2>

                  <StarRating rating={4.5} />

                  <p className="font-semibold text-sm">Rating</p>
                </div>

                <img src="/qrc.png" alt="QR Code" className="w-28 h-28 object-contain" />

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Save;
