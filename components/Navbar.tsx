"use client";
import React from "react";
import { FaEthereum } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-[#151515] w-full py-3 px-5">
      <div className=" bg-[#151515] flex items-center text-[23px] font-extrabold gap-x-1 text-white">
        FundFusion{" "}
        <FaEthereum className="bg-[#151515] text-indigo-400 text-[25px]" />
      </div>
      <div className=" rounded-[10px]">
        <button className=" py-[7px] px-5 font-semibold rounded-[10px] hover:scale-105 ">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
