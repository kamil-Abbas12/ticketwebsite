"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ScrollCallModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight * 0.5) {
        setShow(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white shadow-xl rounded-xl p-4 w-[350px] md:w-[500px] animate-slide-up relative">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <Image
            src="/call.jpg"
            alt="Call Support"
            width={60}
            height={60}
            className="rounded-full"
          />

          <div>
            <p className="font-semibold text-gray-800">Phone-Only Deals!</p>
            <p className="text-sm text-gray-600">
              Use promo code{" "}
              <span className="font-bold text-green-600">HELLO50</span>
            </p>
            <p className="text-lg text-gray-900 font-semibold">
              Call us 24/7: 000-800-050-3540
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
