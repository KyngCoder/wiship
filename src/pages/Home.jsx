import React from "react";
import { Banner } from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Rates } from "../components/Rates";
import Testimonial from "../components/Testimonial";
import { Navbar } from "../components/Navbar";


const Home = () => {
  return (
    <div>
        <Navbar />
      <Banner />
      <Hero />
      <Services />
      <Rates />
      <Testimonial />
    </div>
  );
};

export default Home;
