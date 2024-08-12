import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Education/Card";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Fade duration={3000}>
        <div className="w-full h-full">
          <h1 className="text-xl md:text-3xl lg:text-4xl py-6 font-extrabold text-center bg-gradient-to-tr from-green-400 to-blue-600 text-transparent bg-clip-text">
            Degrees Received
          </h1>
          <Card />
          <Footer />
        </div>
      </Fade>
    </div>
  );
};

export default Education;
