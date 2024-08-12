import React from "react";
import data from "../Education/data.json";

const Card = () => {
  return (
    <div>
      {data.data.map((item, index) => (
        <div className="w-full flex flex-row justify-center mb-8">
          <div className="flex items-center justify-center m-4">
            <img
              src={item.image}
              alt="skcetLogo"
              className="border-bg-black rounded-full h-48 w-full hidden md:block"
            />
          </div>
          <div className="w-2/3 m-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-40 rounded-2xl">
            <div className="bg-slate-50">
              <div className="flex flex-row justify-between items-center px-4 pt-3 ">
                <div className="text-xl md:text-2xl font-bold">{item.name}</div>
                <div className="text-sm hidden md:block">{item.year}</div>
              </div>
              <p className="px-4 py-3 text-xl">{item.degree}</p>
            </div>
            <div className="w-full text-white text-justify text-sm md:text-lg space-y-4 p-4">
              {item.content.map((point, idx) => (
                <h2 key={idx}>⚡ {point}</h2>
              ))}
            </div>
            <div className="flex justify-end">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-white p-4 hover:text-blue-500"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
