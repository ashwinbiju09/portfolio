import React from "react";

const Card = ({ item }) => {
  return (
    <div>
      <div className="h-full flex flex-col rounded-xl shadow-lg p-3 border border-white bg-white">
        <div className="flex justify-center items-center bg-white h-36">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl max-h-full"
          />
        </div>
        <div className="bg-white flex flex-col space-y-2 p-3 text flex-grow">
          <h3 className="font-black text-gray-800 text-lg text-center lg:h-16 flex items-center justify-center">
            {item.title}
          </h3>
          <p className="text-md text-gray-500 text-justify lg:h-36 overflow-hidden">
            {item.content}
          </p>
        </div>
        <div className="flex flex-row justify-end mt-4 text-blue-500">
          <a
            target="_blank"
            rel="noreferrer"
            href={item.certificate}
            className="inline-block"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
