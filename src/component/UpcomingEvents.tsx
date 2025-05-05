import React from "react";
import EventCard from "./EventCard";
import { IoIosArrowForward } from "react-icons/io";
const UpcomingEvents = () => {
  const date = new Date();
  const dummyData = [
    {
      name: "Christina in Chicago",
      cost: 0,
      image: "",
      date: "NOV 28 15:00",
      eventType: "Online event",
    },
    {
      name: "Motivational Podcast",
      cost: 15,
      image: "",
      date: "NOV 28 17:00",
      eventType: "Online event",
    },
    {
      name: "Motivational Podcast",
      cost: 15,
      image: "",
      date: "NOV 28 17:00",
      eventType: "Online event",
    },
    {
      name: "Motivational Podcast",
      cost: 15,
      image: "",
      date: "NOV 28 17:00",
      eventType: "Online event",
    },
  ];
  return (
    <>
      <div className="mx-[100px] mt-[40px] flex h-full">
        <div className="flex flex-col justify-center items-center w-[30%]">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-5xl font-bold">{date.getDate()}</h2>
            <h4 className="text-xl font-bold mt-[1px]">
              {date.getMonth()},{date.getFullYear()}
            </h4>
          </div>
          <div className="flex flex-col justify-start items-start mt-[100px]">
            <h2 className="text-2xl font-bold">Upcoming Online</h2>
            <h4 className="text-2xl font-bold ">Events</h4>
            <p className="flex justify-center items-center">
              View all <IoIosArrowForward />
            </p>
          </div>
        </div>
        <div className="w-[70%] grid grid-rows-2 grid-flow-col auto-cols-[minmax(0,1fr)] overflow-x-auto gap-4">
          {dummyData.map((item, i) => (
            <EventCard
              key={i}
              name={item.name}
              cost={item.cost}
              image={item.image}
              date={item.date}
              eventType={item.eventType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
