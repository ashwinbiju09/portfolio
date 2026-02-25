import React from "react";
import data from "../Education/data.json";

const EducationCard = ({ item }) => {
  return (
    <div className="max-w-7xl w-full rounded-xl shadow-lg p-6 border border-gray-600 bg-neutral-900 mb-6 text-white flex flex-col md:flex-row items-center gap-6">
      <div className="flex-grow w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start w-full">
          <div className="flex flex-col items-start">
            <p className="text-gray-300 text-lg font-semibold">{item.degree}</p>
            <h3 className="text-xl font-medium text-gray-200 mt-1">
              {item.name}
            </h3>
          </div>
          <div className="flex flex-col items-end mt-4 md:mt-0 py-2">
            <span className="text-blue-700 bg-gray-800 px-2 py-1 rounded-md text-sm font-medium">
              {item.year}
            </span>
            <span className="text-sm text-gray-400 mt-2">{item.location}</span>
          </div>
        </div>

        <ul className="text-gray-300 text-sm space-y-3 list-none pl-0 mt-4">
          {item.content.map((point, idx) => (
            <li key={idx} className="relative pl-6">
              <span
                className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-600/70"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>

        {item.link && (
          <div className="flex justify-end pt-2">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="px-4 md:px-12 w-full max-w-7xl mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-4xl pb-8 font-medium text-left bg-blue-700 text-transparent bg-clip-text">
          Academic Qualifications
        </h1>

        <div className="space-y-8 w-full flex flex-col items-center">
          {data.data.map((item, index) => (
            <EducationCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
