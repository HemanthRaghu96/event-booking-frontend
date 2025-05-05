import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import image1 from "../../public/image (1).png";
export interface EventCardProp{
    name: string,
    cost: number,
    image:string,
    date:string,
    eventType:string,
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EventCard = ({name,cost,image,date,eventType}:EventCardProp) => {
  return (
    <>
      <div className="flex flex-col">
        <Image src={image1} alt="" />
        <div className="flex mt-[5px]">
          <CiCalendar />
          <p>{date}</p>
          <p>{eventType}</p>
        </div>
        <p className="font-bold text-xl">{name}</p>
        <p className="font-bold text-xl text-green-800">{cost===0?"Free":cost}</p>
      </div>
    </>
  );
};

export default EventCard;
