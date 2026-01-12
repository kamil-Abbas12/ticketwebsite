import Image from "next/image";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Search from "./components/Search"
import Advance from "./components/Advance";
export default function Home() {
  return (
   <>
  <Navbar/>
  <Hero/>
  <Search/>
  <Advance/>
   </>
  );
}
