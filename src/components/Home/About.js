import React from "react";
import Skills from "../Home/Skills";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="pt-48 pb-6 bg-black">
      <Fade duration={3000}>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center mb-10 md:mt-10 bg-gradient-to-tr from-green-400 to-blue-600 text-transparent bg-clip-text">
          Here's what I do
        </h1>
        <div className="w-full h-full flex justify-center px-10 py-5">
          <Skills />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center pt-12 px-8 md:px-24">
          <div className="w-full text-white text-lg md:text-xl space-y-6 text-justify">
            <h2>
              ⚡ Expertly create highly interactive and responsive interfaces
              for web and mobile applications using Tailwind CSS and Bootstrap.
            </h2>
            <h2>
              ⚡ Build seamless, responsive website front ends with ReactJS and
              NextJS, ensuring optimal user experiences across all devices.
            </h2>
            <h2>
              ⚡ Develop scalable and secure application backends with Django
              and Flask, leveraging their powerful features for complex
              projects.
            </h2>
            <h2>
              ⚡ Utilize PyTorch and OpenCV to delve into machine learning,
              image processing, computer vision, and deep learning, driving
              innovation and cutting-edge solutions.
            </h2>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
