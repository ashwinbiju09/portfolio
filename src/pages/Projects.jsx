import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Projects/Card";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Fade duration={3000}>
        <Card />
        <Footer />
      </Fade>
    </div>
  );
};

export default Projects;
