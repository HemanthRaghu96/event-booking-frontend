import Image from "next/image";
import React from "react";
import concert from "../../public/microphone.png";
import sports from "../../public/basketball.png";
import hobbies from "../../public/target.png";
import disco from "../../public/mirror-ball.png";
import conference from "../../public/press-conference.png";
import cinema from "../../public/drama.png";
import Link from "next/link";
const Category = () => {
  return (
    <>
      <div className="mx-100px flex justify-center items-center mt-[30px]">
        <Link href={"/concerts"}>
          <div className=" border-[1px] rounded-full flex flex-col justify-center items-center size-[100px] mx-[20px]">
            <Image src={concert} alt="concert" />
            <p>Concerts</p>
          </div>
        </Link>
        <Link href={"/sports"}>
          <div className=" border-[1px] rounded-full flex flex-col justify-center items-center size-[100px] mx-[20px]">
            <Image src={sports} alt="sports" />
            <p>Sports</p>
          </div>
        </Link>
        <Link href={"/hobbies"}>
          <div className=" border-[1px] rounded-full flex flex-col justify-center items-center size-[100px] mx-[20px]">
            <Image src={hobbies} alt="hobbies" />
            <p>Hobbies</p>
          </div>
        </Link>
        <Link href={"/disco"}>
          <div className=" border-[1px] rounded-full flex flex-col justify-center items-center size-[100px] mx-[20px]">
            <Image src={disco} alt="disco" />
            <p>Disco</p>
          </div>
        </Link>
        <Link href={"/conference"}>
          <div className=" border-[1px] rounded-full flex flex-col justify-center items-center size-[100px] mx-[20px]">
            <Image src={conference} alt="conference" />
            <p>Conference</p>
          </div>
        </Link>
        <Link href={"/cinema"}>
          <div className=" border-[1px] rounded-full flex flex-col justify-center items-center size-[100px] mx-[20px]">
            <Image src={cinema} alt="cinema" />
            <p>Cinema</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Category;
