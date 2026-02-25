import React from "react";
import { Fade } from "react-awesome-reveal";

const hackathonLogos = [
  "/assets/hacks/1.png",
  "/assets/hacks/2.png",
  "/assets/hacks/3.jpg",
  "/assets/hacks/4.png",
  "/assets/hacks/5.png",
  "/assets/hacks/6.png",
  "/assets/hacks/7.jpeg",
  "/assets/hacks/8.jpeg",
  "/assets/hacks/9.png",
  "/assets/hacks/10.png",
  "/assets/hacks/11.png",
  "/assets/hacks/12.png",
];

const Hacks = () => {
  return (
    <div className="">
      <Fade duration={3000}>
        <h1 className="text-md md:text-2xl lg:text-3xl py-12 font-extrabold text-center bg-gradient-to-tr from-green-400 to-blue-600 text-transparent bg-clip-text">
          Key hackathons that advanced my knowledge!
        </h1>
        <div className="flex flex-wrap justify-center gap-4 p-4 mx-12">
          {hackathonLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 p-2"
            >
              <img
                src={logo}
                alt={`Hackathon Logo ${index + 1}`}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Hacks;
