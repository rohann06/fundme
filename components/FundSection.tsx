import React from "react";

const FundSection = () => {
  return (
    <div className="relative h-[400px] mb-5 md:mb-0 md:h-[500px] w-screen">
      <div className="bg-[url('/eth.webp')] h-[400px] md:h-[500px] w-screen absolute top-0 left-0 z-0"></div>
      <div className="bg-white absolute h-[400px] md:h-[500px] w-screen opacity-70 z-10 top-0 left-0"></div>
      <div className="bg-transparent flex flex-col justify-center items-center absolute top-0 left-0 h-[400px] md:h-full w-full z-20">
        <div className="text-[27px] md:text-[53px] font-extrabold mb-[10px] md:mb-[30px] bg-transparent">
          <p className="bg-transparent">FundMe Ethereum</p>
        </div>
        <form className="flex items-center gap-x-2 bg-transparent">
          <div className="bg-transparent">
            <input
              placeholder="Add ETH amount..."
              type="text"
              className="text-sm md:text-base w-[250px] md:w-[580px] bg-[#dbd9d9] px-4 md:px-6 py-[10px] md:py-[15px] rounded-full border-[1px] border-black font-semibold font-mono"
            />
          </div>
          <button className="rounded-full text-base md:text-lg font-medium bg-indigo-400 hover:bg-indigo-500 py-[10px] md:py-[15px] px-5 md:px-7">
            Fund
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundSection;
