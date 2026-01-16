'use client'
import { Check, ChevronDown, DownloadIcon } from 'lucide-react'
import React, { useState } from 'react'
import { FaPhone, FaUserCircle } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { Plane, Hotel, Car, Palmtree, Compass, Tag } from "lucide-react";
import Search from "./Search"; // make sure path is correct

const Navbar = () => {
const [mobileMenu, setMobileMenu] = useState(false);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [showFlightMenu, setShowFlightMenu] = useState(false);

  /* ================= AUTH MODAL ================= */

  const AuthModal = ({ close }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">

<div className="bg-white w-[95%] max-w-[1000px] h-auto md:h-[560px] rounded-xl shadow-2xl flex flex-col md:flex-row relative overflow-hidden">

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl z-50"
        >
          ✕
        </button>

        {/* LEFT PANEL */}
<div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-6">
            Sign in or Join ClubMiles
          </h2>

          <button className="w-full border py-3 rounded-lg mb-3 flex items-center justify-center gap-3 hover:bg-gray-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" width={20} />
            Facebook
          </button>

          <button className="w-full border py-3 rounded-lg mb-6 flex items-center justify-center gap-3 hover:bg-gray-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" width={20} />
            Google
          </button>

          <div className="flex items-center gap-4 mb-5">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <input
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Next
          </button>

          <p className="text-xs text-gray-500 mt-6 leading-relaxed">
            By creating an account via Facebook/Google, or by entering your email address above,
            you agree to CheapOair’s <span className="text-blue-600 cursor-pointer">Terms & Conditions</span> and
            <span className="text-blue-600 cursor-pointer"> Privacy Policy</span>.
          </p>

        </div>

        {/* RIGHT PANEL */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 to-indigo-700 text-white flex flex-col justify-between">

          {/* Header */}
          <div className="p-10">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://www.cheapoair.com/images/clubmiles/logo.svg" width={140} />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              CheapOair Rewards is now ClubMiles
            </h3>

            <div className="flex gap-4 mt-6">
              <img src="https://www.cheapoair.com/images/logo.svg" width={120} />
              <img src="https://www.onetravel.com/images/onetravel-logo.svg" width={120} />
            </div>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center px-10">
            <img
              src="https://www.cheapoair.com/images/clubmiles/rewards-wallet.svg"
              width={220}
              className="mb-6"
            />

            <h2 className="text-2xl font-bold mb-2">Earn</h2>
            <p className="text-sm text-blue-100">
              Earn points on your bookings across our travel brands
            </p>

            {/* Slider dots */}
            <div className="flex gap-2 mt-6">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white/40 rounded-full"></span>
              <span className="w-2 h-2 bg-white/40 rounded-full"></span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-8 text-center">
            <button className="text-white underline text-sm">
              Learn About ClubMiles →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};


  /* ================= FLIGHT MODAL ================= */

  const FlightModal = () => {
    return (
      <div
className="absolute top-full left-0 mt-3 bg-white shadow-xl rounded-xl w-[95vw] md:w-[800px] p-4 md:p-6 z-50"
        onMouseEnter={() => setShowFlightMenu(true)}
        onMouseLeave={() => setShowFlightMenu(false)}
      >
        <Search />
      </div>
    );
  };

  /* ================= NAVBAR ================= */

  return (
    <nav className='relative w-full'>
<div className="flex w-full items-center justify-between py-3 px-4 md:px-10 lg:px-20 shadow-md">
{/* Mobile Menu Button */}


        {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-gray-700 text-2xl"
    onClick={() => setMobileMenu(!mobileMenu)}
  >
    ☰
  </button>

  <img
    width={110}
    className="cursor-pointer"
    src="https://c.fareportal.com/gcms//cms/global_assets/sitelogo_92.webp"
  />
</div>


        {/* RIGHT SIDE */}
<div className="hidden lg:flex flex-row gap-6 items-center">

          {/* Call */}
          <span className='rounded-full pl-1 pr-6 pt-1 border flex flex-row gap-3 border-green-700 items-center cursor-pointer'>
            <div className='relative pl-1'>
              <img 
                src="https://c.fareportal.com/gcms/portals/2/rweb/images/avatar.webp?v=1" 
                width={30}
                className='rounded-full'
              />
              <div className='absolute -bottom-1 -left-2 rotate-[100deg] rounded-full p-1'>
                <FaPhone size={15} className="text-green-700" />
              </div>
            </div>

            <span className='gap-2 flex text-sm font-bold'>
              <span>Book Now - Call us 24/7</span> 
              <span className='text-green-800'>1-646-738-4835</span>
            </span>
          </span>

          {/* Message */}
          <span className='rounded-full border border-blue-300 px-2 py-2 cursor-pointer'>
            <FaMessage size={20} className='text-blue-500'/>
          </span>

          {/* App */}
          <span className='rounded-full flex gap-2 border border-blue-300 px-3 py-2 cursor-pointer'>
            <DownloadIcon size={20} className='text-blue-600 mt-1'/>
            <h1 className='text-gray-800 font-bold text-md'>Use App</h1>
          </span>

          {/* Currency */}
          <span className='text-gray-800 font-bold flex items-center text-sm cursor-pointer'> 
            USD $ / EN <ChevronDown size={15} className='ml-1'/>
          </span>

          <span className='text-sm text-gray-800 font-bold cursor-pointer'>Help</span>

          {/* Auth */}
          <div className='flex flex-row gap-1 items-center'>
            <FaUserCircle size={20} className='text-blue-500 cursor-pointer'/>
            <button
              onClick={() => setShowAuthModal(true)}
              className="text-gray-800 font-bold text-sm hover:text-blue-500"
            >
              Sign In / Join
            </button>
          </div>
        </div>
      </div>
{/* Mobile Menu Panel */}
{/* Mobile Menu Panel */}
{mobileMenu && (
  <div className="md:hidden bg-white shadow-lg border-t px-6 py-4 space-y-4">
    <div className="font-semibold">Flights</div>
    <div className="font-semibold">Hotels</div>
    <div className="font-semibold">Cars</div>
    <div className="font-semibold">Packages</div>
    <div className="font-semibold">Deals</div>

    <button
      onClick={() => {
        setShowAuthModal(true);
        setMobileMenu(false);
      }}
      className="block w-full text-left font-bold text-blue-600"
    >
      Sign In / Join
    </button>
  </div>
)}

      {/* AUTH MODAL */}
      {showAuthModal && <AuthModal close={() => setShowAuthModal(false)} />}
    </nav>
  )
}

export default Navbar

/* ================= DROPDOWN ITEM ================= */


const DropdownItem = ({ icon, label, arrow }) => (
  <div className="group flex items-center justify-between px-5 py-2 cursor-pointer hover:bg-gray-100">
    <div className="flex items-center gap-3 font-medium text-gray-800 group-hover:text-blue-600 transition">
      {icon}
      {label}
    </div>

    {arrow && (
      <ChevronDown 
        className="-rotate-90 text-gray-800 group-hover:text-blue-600 transition" 
        size={16} 
      />
    )}
  </div>
);
