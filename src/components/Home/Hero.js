import React from "react";
import Social from "../Home/Social";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="bg-black">
      <Fade duration={3000}>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-96 px-16 pt-36 lg:pt-32 text-white">
          <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start justify-center md:p-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-4">
              Hello&#128075;
            </h1>
            <h2 className="text-xl md:text-3xl font-bold mb-4 lg:text-4xl">
              I'm{" "}
              <span className="bg-gradient-to-tr from-green-400 to-blue-600 text-transparent bg-clip-text">
                Ashwin Biju
              </span>
            </h2>
            <p className="text-base text-justify tracking-wider mb-6 lg:text-xl">
              I'm full stack developer proficient in{" "}
              <span className="text-amber-300">JavaScript</span> and{" "}
              <span className="text-blue-400">Python</span> frameworks.
              Currently, I'm delving into the exciting world of AI & ML, always
              eager to learn and innovate. Beyond coding, I find joy in
              traveling &#127757; and immersing myself in music &#127911;.
            </p>
            <Social />
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-end lg:pr-12 mt-8 md:mt-0 z-0">
            <img
              src="assets/images/Hero.jpeg"
              alt="HeroImage"
              className="hidden md:block bounce w-max border-bg-black rounded-full"
              style={{ height: "500px" }}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
