import React from "react";
import data from "../Experience/volunteerData.json";

const VolunteerCard = ({ item }) => {
  return (
    <div className="max-w-7xl rounded-xl shadow-lg p-4 border border-gray-600 bg-neutral-900 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-grow text-white space-y-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <span className="text-blue-600 bg-gray-800 px-2 py-1 rounded-md text-sm font-medium">
              {item.date}
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between text-sm text-gray-300">
            <span>{item.community}</span>
            <span className="invisible md:visible md:inline">
              {item.location}
            </span>
          </div>

          <ul
            className="text-gray-300 text-sm space-y-4 pt-2 text-justify"
            style={{ listStyle: "none", paddingLeft: 0 }}
          >
            {item.content.map((point, index) => (
              <li key={index} className="relative pl-6">
                <span
                  className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-600/70"
                  aria-hidden="true"
                ></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Volunteer = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center w-full">
      <div className="pb-12 px-4 md:px-12">
        <h1 className="text-xl md:text-3xl lg:text-4xl py-6 font-medium text-left bg-blue-600 text-transparent bg-clip-text">
          Volunteer Experience
        </h1>

        <div className="space-y-8">
          {data.data.map((item, index) => (
            <VolunteerCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
