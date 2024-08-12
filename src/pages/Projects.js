import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Projects/Header";
import Card from "../components/Projects/Card";

const Projects = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Header />
      <Card />
      <div className="flex justify-center my-4">
        {" "}
        {/* Flex container for centering */}
        <a
          href="https://github.com/ashwinbiju09"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-4 rounded-md bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg text-white font-semibold"
        >
          See More
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
