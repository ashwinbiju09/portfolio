import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Work from "../components/Experience/Work";
import Volunteer from "../components/Experience/Volunteer";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <div>
      <NavBar />
      <Fade duration={3000}>
        <Work />
        <Volunteer />
      </Fade>
      <Footer />
    </div>
  );
};

export default Experience;
