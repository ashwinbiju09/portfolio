import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-24 py-6 text-lg font-bold text-white bg-black relative">
      <div className="m-2">
        <a href="/">
          <img class="h-16" src="/assets/images/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="m-2 hidden lg:block">
        <a
          href="/"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Home
        </a>
        <a
          href="/experience"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Experience
        </a>
        <a
          href="/education"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Education
        </a>
        <a
          href="/projects"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Projects
        </a>
      </div>
      <div className="m-2 sm:block md:block lg:hidden">
        <button
          className="inline-flex items-center text-white text-lg font-extrabold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={`z-10 fixed top-0 right-0 w-1/2 h-full bg-slate-900 text-white flex flex-col items-center md:items-end p-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <button
          className="self-end mb-4 px-5 py-2 bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 rounded-md text-lg font-extrabold"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <a
          href="/"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Home
        </a>
        <a
          href="/experience"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Experience
        </a>
        <a
          href="/education"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Education
        </a>

        <a
          href="/projects"
          className="m-4 px-5 py-4 rounded-md hover:bg-gradient-to-tr from-green-400 to-blue-600 shadow-lg hover:shadow-green-500/40 transition duration-300"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default NavBar;
