import Image from "next/image";
import React from "react";
import banner from "../../public/banner.png";
const Banner = () => {
  return (
    <>
      <div className="mx-[100px] mt-[20px] flex justify-between items-center">
        <div className="flex flex-col mx-[5px]">
          <h2 className="font-bold text-4xl">Discover Events</h2>
          <h2 className="font-bold text-4xl">Near You</h2>
          <p className="mt-[20px] text-gray-400">
            Tickets for all events in one place
          </p>
        </div>
        <Image src={banner} alt="banner" height={450} />
      </div>
    </>
  );
};

export default Banner;
