import React from "react";
import Skills from "../Home/Skills";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="pt-12 pb-6 ">
      <Fade duration={3000}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-10 md:mt-10 bg-blue-800 text-transparent bg-clip-text">
          Stack That Powers My Work
        </h1>
        <div className="w-full h-full flex justify-center px-10 py-2">
          <Skills />
        </div>
      </Fade>
    </div>
  );
};

export default About;
