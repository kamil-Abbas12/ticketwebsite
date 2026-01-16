"use client";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { Plane, Hotel, Car, MapPin, Calendar, Users, ArrowLeftRight, Plus, Minus } from "lucide-react";
import React from 'react'

const Search = () => {
  const [tripType, setTripType] = useState("round");
  const [tab, setTab] = useState("flights");

  return (
    <>
<section className="w-full h-full px-4 sm:px-6 lg:px-20 flex-wrap z-10 relative">
<div className="rounded-lg shadow-md w-full min-h-[200px] -mt-24 sm:-mt-32 bg-white text-gray-800 z-10">

<div className="flex gap-6 border w-full border-b-gray-400 rounded-t-lg px-4 sm:px-10 pt-3 bg-slate-100 overflow-x-auto">
          <Tab label="Flights" active={tab === "flights"} onClick={() => setTab("flights")} />
          <Tab label="Packages" active={tab === "packages"} onClick={() => setTab("packages")} />
          <Tab label="Hotels" active={tab === "hotels"} onClick={() => setTab("hotels")} />
          <Tab label="Cars" active={tab === "cars"} onClick={() => setTab("cars")} />
        </div>

        {/* Forms */}
        <div className="mt-6 pb-6">
          {tab === "flights" && (
            <FlightsForm 
              tripType={tripType} 
              setTripType={setTripType} 
              />
          )}

          {tab === "packages" && <PackagesForm />}
          {tab === "hotels" && <HotelsForm />}
          {tab === "cars" && <CarsForm />}
        </div>
      </div>

    </section>
    
              </>

  )
}

export default Search

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab = ({ label, active, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`font-bold pb-2 transition ${
      active
        ? "text-blue-600 border-b-4 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`}
  >
    {label}
  </button>
);

/* ---------------- Flights ---------------- */

interface FlightsFormProps {
  tripType: string;
  setTripType: (value: string) => void;
}

const FlightsForm = ({ tripType, setTripType }: FlightsFormProps) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("economy");

  const getTripTypeLabel = () => {
    switch(tripType) {
      case "round": return "Round-trip";
      case "oneway": return "One-way";
      case "multi": return "Multi-city";
      default: return "Round-trip";
    }
  };

  const getTotalTravelers = () => adults + children + infants;

  const getCabinClassLabel = () => {
    switch(cabinClass) {
      case "economy": return "Economy";
      case "premium": return "Premium Economy";
      case "business": return "Business";
      case "first": return "First Class";
      default: return "Economy";
    }
  };

  return (
<div className="px-4 sm:px-10">
      {/* Trip Type, Travelers & Class Selector */}
      <div className="flex gap-6 mb-4 text-sm font-semibold text-gray-700">
        {/* Trip Type Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              {getTripTypeLabel()}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-40">
            <DropdownMenuRadioGroup value={tripType} onValueChange={setTripType}>
              <DropdownMenuRadioItem value="round">Round-trip</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="oneway">One-way</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="multi">Multi-city</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Travelers Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              {getTotalTravelers()} {getTotalTravelers() === 1 ? "Traveler" : "Travelers"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-72 p-4">
            <div className="space-y-4">
              {/* Adults */}
              <TravelerCounter 
                label="Adults" 
                sublabel="18+ years"
                count={adults} 
                onIncrement={() => setAdults(adults + 1)}
                onDecrement={() => setAdults(Math.max(1, adults - 1))}
                min={1}
              />

              {/* Children */}
              <TravelerCounter 
                label="Children" 
                sublabel="2-17 years"
                count={children} 
                onIncrement={() => setChildren(children + 1)}
                onDecrement={() => setChildren(Math.max(0, children - 1))}
                min={0}
              />

              {/* Infants */}
              <TravelerCounter 
                label="Infants" 
                sublabel="Under 2 years"
                count={infants} 
                onIncrement={() => setInfants(infants + 1)}
                onDecrement={() => setInfants(Math.max(0, infants - 1))}
                min={0}
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Cabin Class Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              {getCabinClassLabel()}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48">
            <DropdownMenuRadioGroup value={cabinClass} onValueChange={setCabinClass}>
              <DropdownMenuRadioItem value="economy">Economy</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="premium">Premium Economy</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="business">Business</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="first">First Class</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Round-trip / One-way Form */}
      {(tripType === "round" || tripType === "oneway") && (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 items-center">
          <Input icon={<Plane className="w-5 h-5" />} placeholder="From: City or Airport" />
          
          <button className="p-2 hover:bg-gray-100 rounded-full -mx-2">
            <ArrowLeftRight className="w-5 h-5 text-blue-600" />
          </button>
          
          <Input icon={<Plane className="w-5 h-5 rotate-90" />} placeholder="To: City or Airport" />
          
          <Input icon={<Calendar className="w-5 h-5" />} placeholder="Depart Date" type="date" />
          
          {tripType === "round" && (
            <Input icon={<Calendar className="w-5 h-5" />} placeholder="Return Date" type="date" />
          )}

<button className="bg-blue-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Search Flights
          </button>
        </div>
      )}

      {/* Multi-city Form */}
      {tripType === "multi" && (
        <div className="space-y-4">
          {/* Flight 1 */}
          <div className="flex gap-4 items-center flex-wrap">
            <span className="font-semibold text-gray-700 w-16">Flight 1</span>
            <Input icon={<Plane className="w-5 h-5" />} placeholder="From: City or Airport" />
            <Input icon={<Plane className="w-5 h-5 rotate-90" />} placeholder="To: City or Airport" />
            <Input icon={<Calendar className="w-5 h-5" />} placeholder="Depart Date" type="date" />
          </div>

          {/* Flight 2 */}
          <div className="flex gap-4 items-center flex-wrap">
            <span className="font-semibold text-gray-700 w-16">Flight 2</span>
            <Input icon={<Plane className="w-5 h-5" />} placeholder="From: City or Airport" />
            <Input icon={<Plane className="w-5 h-5 rotate-90" />} placeholder="To: City or Airport" />
            <Input icon={<Calendar className="w-5 h-5" />} placeholder="Depart Date" type="date" />
          </div>

          <div className="flex gap-4 items-center">
            <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Add another flight
            </button>

            <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition ml-auto">
              Search Flights
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------------- Packages ---------------- */

const PackagesForm = () => {
  const [tripType, setTripType] = useState("round");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const getTotalTravelers = () => adults + children;

  return (
    <div className="px-10">
      {/* Trip Type & Travelers Selector */}
      <div className="flex gap-6 mb-4 text-sm font-semibold text-gray-700">
        {/* Trip Type */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              {tripType === "round" ? "Round-trip" : "One-way"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-40">
            <DropdownMenuRadioGroup value={tripType} onValueChange={setTripType}>
              <DropdownMenuRadioItem value="round">Round-trip</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="oneway">One-way</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Travelers & Rooms */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              {getTotalTravelers()} {getTotalTravelers() === 1 ? "Traveler" : "Travelers"} · {rooms} {rooms === 1 ? "Room" : "Rooms"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-72 p-4">
            <div className="space-y-4">
              <TravelerCounter 
                label="Adults" 
                sublabel="18+ years"
                count={adults} 
                onIncrement={() => setAdults(adults + 1)}
                onDecrement={() => setAdults(Math.max(1, adults - 1))}
                min={1}
              />

              <TravelerCounter 
                label="Children" 
                sublabel="0-17 years"
                count={children} 
                onIncrement={() => setChildren(children + 1)}
                onDecrement={() => setChildren(Math.max(0, children - 1))}
                min={0}
              />

              <TravelerCounter 
                label="Rooms" 
                count={rooms} 
                onIncrement={() => setRooms(rooms + 1)}
                onDecrement={() => setRooms(Math.max(1, rooms - 1))}
                min={1}
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Form */}
      <div className="flex gap-4 items-center flex-wrap">
        <Input icon={<Plane className="w-5 h-5" />} placeholder="From: City or Airport" />
        
        <button className="p-2 hover:bg-gray-100 rounded-full -mx-2">
          <ArrowLeftRight className="w-5 h-5 text-blue-600" />
        </button>
        
        <Input icon={<MapPin className="w-5 h-5" />} placeholder="To: City, Destination, or Hotel" />
        <Input icon={<Calendar className="w-5 h-5" />} placeholder="Departure Date" type="date" />
        
        {tripType === "round" && (
          <Input icon={<Calendar className="w-5 h-5" />} placeholder="Return Date" type="date" />
        )}

        <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition">
          Search Packages
        </button>
      </div>
    </div>
  );
};

/* ---------------- Hotels ---------------- */

const HotelsForm = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const getTotalTravelers = () => adults + children;

  return (
    <div className="px-10">
      {/* Travelers & Rooms Selector */}

      <div className="flex gap-6 mb-4 text-sm font-semibold text-gray-700">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              {getTotalTravelers()} {getTotalTravelers() === 1 ? "Traveler" : "Travelers"} · {rooms} {rooms === 1 ? "Room" : "Rooms"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-72 p-4">
            <div className="space-y-4">
              <TravelerCounter 
                label="Adults" 
                sublabel="18+ years"
                count={adults} 
                onIncrement={() => setAdults(adults + 1)}
                onDecrement={() => setAdults(Math.max(1, adults - 1))}
                min={1}
              />

              <TravelerCounter 
                label="Children" 
                sublabel="0-17 years"
                count={children} 
                onIncrement={() => setChildren(children + 1)}
                onDecrement={() => setChildren(Math.max(0, children - 1))}
                min={0}
              />

              <TravelerCounter 
                label="Rooms" 
                count={rooms} 
                onIncrement={() => setRooms(rooms + 1)}
                onDecrement={() => setRooms(Math.max(1, rooms - 1))}
                min={1}
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Form */}
      <div className="flex gap-4 items-center flex-wrap">
        <Input icon={<MapPin className="w-5 h-5" />} placeholder="Going to: City, Hotel, or Region" />
        <Input icon={<Calendar className="w-5 h-5" />} placeholder="Check-in Date" type="date" />
        <Input icon={<Calendar className="w-5 h-5" />} placeholder="Check-out Date" type="date" />

        <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition">
          Search Hotels
        </button>
      </div>
    </div>
  );
};

/* ---------------- Cars ---------------- */

const CarsForm = () => {
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffTime, setDropoffTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState("30+");

  return (
    <div className="px-10">
      {/* Driver Age Selector */}
      <div className="flex gap-6 mb-4 text-sm font-semibold text-gray-700">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Driver age: {driverAge}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-40">
            <DropdownMenuRadioGroup value={driverAge} onValueChange={setDriverAge}>
              <DropdownMenuRadioItem value="18-24">18-24</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="25-29">25-29</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="30+">30+</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Form */}
      <div className="flex gap-4 items-center flex-wrap">
        <Input icon={<Car className="w-5 h-5" />} placeholder="Pick-up Location" />
        
        <div className="flex gap-2">
          <Input icon={<Calendar className="w-5 h-5" />} placeholder="Pick-up Date" type="date" />
          <select 
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-3 outline-none hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="10:00">10:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
        </div>

        <div className="flex gap-2">
          <Input icon={<Calendar className="w-5 h-5" />} placeholder="Drop-off Date" type="date" />
          <select 
            value={dropoffTime}
            onChange={(e) => setDropoffTime(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-3 outline-none hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="10:00">10:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
        </div>

        <button className="bg-blue-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition">
          Search Cars
        </button>
      </div>
    </div>
  );
};

/* ---------------- Traveler Counter Component ---------------- */

interface TravelerCounterProps {
  label: string;
  sublabel?: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
}

const TravelerCounter = ({
  label,
  sublabel,
  count,
  onIncrement,
  onDecrement,
  min = 0,
}: TravelerCounterProps) => (
  <div className="flex items-center justify-between">
    <div>
      <div className="font-semibold text-gray-800">{label}</div>
      {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
    </div>
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrement}
        disabled={count <= min}
        className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-50 disabled:border-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent transition"
      >
        <Minus className="w-4 h-4 text-blue-600" />
      </button>
      <span className="w-8 text-center font-semibold">{count}</span>
      <button
        onClick={onIncrement}
        className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-50 transition"
      >
        <Plus className="w-4 h-4 text-blue-600" />
      </button>
    </div>
  </div>
);

/* ---------------- Input Field ---------------- */

interface InputProps {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  readOnly?: boolean;
}

const Input = ({ icon, placeholder, type = "text", readOnly = false }: InputProps) => (
  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 w-full sm:min-w-[200px]
 bg-white hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition">
    <div className="text-gray-500">
      {icon}
    </div>
    <input
      type={type}
      placeholder={placeholder}
      readOnly={readOnly}
      className="outline-none w-full font-medium text-gray-700 placeholder:text-gray-400 bg-transparent"
    />
  </div>
);
