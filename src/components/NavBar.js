import React from "react";

const NavBar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 md:px-12 lg:px-24 py-6 text-lg font-bold text-white relative">
      <div className="m-2 border border-gray-500 rounded-xl transition duration-300 p-3 overflow-x-auto md:overflow-x-hidden md:overflow-y-hidden ">
        {navLinks.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="font-medium m-2 md:m-4 px-3 md:px-5 py-2 md:py-4 rounded-md transform transition duration-200 hover:scale-110 hover:text-blue-600 whitespace-nowrap"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
