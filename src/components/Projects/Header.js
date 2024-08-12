import React from "react";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-row md:justify-center lg:justify-between mx-8 md:mx-28">
        <div className="hidden lg:block">
          <img
            src="assets/images/project.jpeg"
            alt="ProjectImage"
            className="w-max border-bg-black rounded-full"
            style={{ height: "400px" }}
          />
        </div>
        <div className="md:w-full lg:w-1/2 text-white ">
          <h1 className=" text-5xl font-extrabold mt-20 p-2 text-center bg-gradient-to-tr from-green-400 to-blue-600 text-transparent bg-clip-text">
            Projects
          </h1>
          <div className="py-10 text-md md:text-xl font-semibold text-justify">
            My expertise lies in leveraging modern technologies, focusing on
            crafting visually appealing front-end interfaces with React and
            styling libraries, managing back-end development with Python, and
            exploring image processing, machine learning, etc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
