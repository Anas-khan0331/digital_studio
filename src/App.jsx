import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import OurWork from "./components/OurWork/OurWork";
import Reviews from "./components/Reviews/Reviews";
import ChooseUs from "./components/Services/ChooseUs";
import Services from "./components/Services/Services";
import ServicesCard from "./components/Services/ServicesCard";
import Slider from "./components/Slider/Slider";
import Thankx from "./components/Thankx/Thankx";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Slider />
      <Services />
      <ServicesCard />
      <ChooseUs />
      <Expertise />
      <Reviews />
      <OurWork />
      <Thankx />
      <Footer />
    </div>
  );
};

export default App;
