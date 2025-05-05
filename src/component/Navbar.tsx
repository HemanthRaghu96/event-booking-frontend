import Image from "next/image";
import React from "react";
import logo from "../../public/finderLogo.png";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="flex  justify-between items-center h-[50px] mx-[100px]">
        <div className="flex">
          <Image src={logo} alt="" width={20} />
          <h2 className="px-[4px] font-bold">Finder</h2>
        </div>
        <div className="flex  justify-center items-center w-[800px]">
          <button className="px-[10px] flex justify-center items-center border-r-[1px] border-gray-400">
            <RiMapPinLine /> Location <MdKeyboardArrowDown />
          </button>
          <button className="px-[10px]">Find events</button>
          <button className="px-[10px]">Create events</button>
          <button className="px-[10px]">Find my tickets</button>
          <button className="px-[10px] flex justify-center items-center">
            Help center <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineWbSunny />
          <button className="border-1  border-black rounded-md px-[5px] flex justify-center items-center mx-[5px]">
            <MdOutlinePersonOutline />
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
