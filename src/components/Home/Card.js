import React from "react";

const Card = ({ item }) => {
  return (
    <div>
      <div className="h-full flex flex-col rounded-xl shadow-lg p-4 border border-gray-600 bg-neutral-950">
        <div className="flex justify-center items-center bg-transparent h-36">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl max-h-full"
          />
        </div>
        <div className="bg-transparent flex flex-col space-y-3 p-4 flex-grow">
          <h3 className="font-medium text-white text-lg text-center lg:h-16 flex items-center justify-center">
            {item.title}
          </h3>
          <p className="text-md text-gray-300 text-justify lg:h-36 overflow-hidden">
            {item.content}
          </p>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <a
            target="_blank"
            rel="noreferrer"
            href={item.certificate}
            className="inline-block text-purple-800 hover:underline"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
