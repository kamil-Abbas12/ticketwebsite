import Image from "next/image";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Search from "./components/Search"
import Advance from "./components/Advance";
import Save from "./components/Save"
import Travel from "./components/Travel";
import Testimonial from "./components/testimonial";
import Footer from "./components/Footer";
import ScrollCallModal from "./components/ScrollCallModal";

export default function Home() {
  return (
   <>
  <Navbar/>
  <Hero/>

  <Search/>
  <Advance/>
    <Travel/>
      <ScrollCallModal />

  <Save/>
  <Testimonial/>
  <Footer/>
   </>
  );
}
