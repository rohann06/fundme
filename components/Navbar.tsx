"use client";
import React from "react";
import { FaEthereum } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-[#151515] w-full py-4 px-5">
      <div className=" bg-[#151515] flex items-center text-[20px] md:text-[25px] font-extrabold gap-x-1 text-white">
        FundFusion{" "}
        <FaEthereum className="bg-[#151515] text-indigo-400 text-[21px] md:text-[26px]" />
      </div>
      <div className=" rounded-[10px]">
        <button className=" text-sm md:text-base py-[6px] md:py-[9px] px-4 md:px-5 font-semibold rounded-[10px] hover:scale-105 ">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
