import React, { useState, useEffect } from "react";
import Social from "../Home/Social";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import Scramble from "./Scramble";

const greetings = ["Hello", "Bonjour", "Hola", "Hallo", "Ciao"];

const skills = [
  "Expert at carving designs into pixel-perfect, responsive web and mobile interfaces delivering seamless user experiences.",
  "Proficient in implementing backend systems, designing scalable APIs, and managing databases for secure, efficient data flow.",
  "Driven by a passion for AI, exploring and experimenting with cutting-edge technologies to develop innovative solutions.",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showTime = 2000;
    const transitionTime = 1500;

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setVisible(true);
      }, transitionTime);
    }, showTime);

    return () => clearTimeout(timer);
  }, [index, visible]);

  return (
    <div className="pt-12 px-6 lg:px-24 text-white w-full">
      <Fade duration={3000}>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-12 text-center lg:text-left">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start space-y-6">
            <AnimatePresence mode="wait">
              {visible && (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.5 }}
                  className="text-3xl md:text-5xl font-bold"
                >
                  {greetings[index]} 👋
                </motion.h1>
              )}
            </AnimatePresence>

            <h2 className="text-2xl md:text-4xl font-semibold">
              <Scramble text="I'm Ashwin!" className="inline-block" />
            </h2>

            <div className="hidden md:flex text-lg md:text-2xl font-medium tracking-wide flex-wrap justify-center lg:justify-start items-center gap-x-2">
              <Scramble text="Software Developer" className="text-blue-800" />
              <span className="text-blue-800">•</span>
              <Scramble text="Web Developer" className="text-blue-800" />
              <span className="text-blue-800">•</span>
              <Scramble text="AI Enthusiast" className="text-blue-800" />
            </div>

            <ul className="mt-4 space-y-3 text-base md:text-lg list-disc list-inside text-gray-300 text-justify md:px-6 lg:px-0">
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>

            <Social />
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="shadow-xl w-60 h-60 lg:w-96 lg:h-full"
            >
              <img
                src="/assets/hero.jpg"
                alt="Ashwin"
                width={320}
                height={320}
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
