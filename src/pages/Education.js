import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Education/Card";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Fade duration={3000}>
        <Card />
        <Footer />
      </Fade>
    </div>
  );
};

export default Education;
