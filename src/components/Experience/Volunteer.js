import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "../Experience/volunteerData.json";

const Volunteer = () => {
  return (
    <div className="bg-black pb-12">
      <h1 className="text-xl md:text-3xl lg:text-4xl py-6 font-extrabold text-center bg-gradient-to-tr from-green-400 to-blue-600 text-transparent bg-clip-text">
        Volunteer Experience
      </h1>
      <div className="mx-auto">
        {data.data.map((item, index) => (
          <VerticalTimeline layout={"1-column-left"} key={index}>
            <VerticalTimelineElement
              contentArrowStyle={{
                borderRight: "7px solid #fff",
              }}
              iconStyle={{ background: "rgb(255,255,255)", color: "#fff" }}
              icon={
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", borderRadius: "90%" }}
                />
              }
            >
              <div>
                <div className="flex justify-between font-bold text-xl">
                  <div>{item.title}</div>
                  <div className="hidden md:block">{item.date}</div>
                </div>

                <div className="flex justify-between text-lg py-2">
                  <div>{item.community}</div>
                  <div className="hidden md:block">{item.location}</div>
                </div>
                {item.content.map((point, idx) => (
                  <p key={idx}>⚡ {point}</p>
                ))}
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
