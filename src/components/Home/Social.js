import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <div className="flex space-x-6 mb-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </a>
        <a
          href="mailto:example@gmail.com"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1W88yvb1XkGFZOJirg8GTm5DMbFiCQ1P9/view?usp=sharing"
        target="_blank"
        className="inline-block px-6 py-3 text-xl font-semibold text-white bg-gradient-to-tr from-green-400 to-blue-600 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        See Resume
      </a>
    </>
  );
};

export default Social;
