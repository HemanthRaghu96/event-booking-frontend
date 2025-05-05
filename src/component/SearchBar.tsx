import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
const SearchBar = () => {
  return (
    <>
      <div className="mx-[100px] rounded-md shadow-sm shadow-gray-500 h-[60px] flex justify-between mt-[20px]">
        <div className="flex justify-center items-center mx-[10px] ">
          <IoIosSearch />
          <p className="mx-[5px] text-gray-400">Search by Artist, Events</p>
        </div>
        <div className="flex justify-center items-center border-l-[1px] border-gray-500 mx-[10px] p-2 w-[200px]">
          <button className="px-[10px] flex justify-center items-center mx-[10px] w-[130px]">
            <RiMapPinLine /> Location <MdKeyboardArrowDown />
          </button>
          <button className="rounded-md bg-red-700 text-white px-[7px] py-[4px]">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
