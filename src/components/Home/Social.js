import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <div className="flex space-x-6 pt-4 mb-6">
        <a
          href="https://github.com/ashwinbiju09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ashwinbiju09/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:hover:text-blue-600"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </a>
        <a
          href="ashwinkbiju09@gmail.com"
          className="text-white hover:hover:text-blue-600"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </a>
      </div>
    </>
  );
};

export default Social;
