import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Achievements from "../components/Home/Achievements";
import Hacks from "../components/Home/Hacks";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Achievements />
      <Hacks />
      <Footer />
    </>
  );
};

export default Home;