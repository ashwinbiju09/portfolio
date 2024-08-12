import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Work from "../components/Experience/Work";
import Volunteer from "../components/Experience/Volunteer";

const Experience = () => {
  return (
    <div className="bg-black">
      <NavBar />
      <Work />
      <Volunteer />
      <Footer />
    </div>
  );
};

export default Experience;
