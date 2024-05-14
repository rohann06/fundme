import React from "react";

const FundSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center mb-[70px] mt-[95px] md:mb-[170px] md:mt-[150px]">
      <div className=" text-[30px] md:text-[50px] font-extrabold mb-[10px] md:mb-[30px]">
        <p>FundMe Ethereum</p>
      </div>
      <form className=" flex items-center gap-x-2">
        <div>
          <input
            placeholder="Add ETH amount..."
            type="text"
            className=" text-sm md:text-base w-[250px] md:w-[580px] bg-[#dbd9d9] px-4 md:px-6 py-[10px] md:py-[15px] rounded-full border-[1px] border-black font-semibold"
          />
        </div>
        <button className=" rounded-full text-base md:text-lg font-medium bg-indigo-400 hover:bg-indigo-500 py-[10px] md:py-[15px] px-5 md:px-7">
          Fund
        </button>
      </form>
    </div>
  );
};

export default FundSection;
