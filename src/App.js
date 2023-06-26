import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import FeedBack from "./components/FeedBack";
import Works from "./components/Works";
import Faqs from "./components/Faqs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import OurPumps from "./components/OurPumps";
import Preloader from "./components/PreLoader";
import BackToTop from "./components/BackToTop";
import "aos/dist/aos.css"; 
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration:3000,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
    <Preloader/>
      <Hero/>
      <Statistics/>
      <OurPumps/>
      <FeedBack/>
      <Works/>
      <AboutUs/>
      <Faqs/>
      <Footer/>
      <BackToTop/>
    </div>
  );
}

export default App;
