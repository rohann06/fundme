import React from "react";

const FundSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center mb-[170px] mt-[150px]">
      <div className=" text-[50px] font-extrabold mb-[30px]">
        <p>FundMe Ethereum</p>
      </div>
      <form className=" flex items-center gap-x-2">
        <div>
          <input
            placeholder="Add ETH amount..."
            type="text"
            className=" md:w-[580px] bg-[#dbd9d9] px-6 py-4 rounded-full border-[1px] border-black font-semibold"
          />
        </div>
        <button className=" rounded-full text-lg font-medium bg-indigo-400 hover:bg-indigo-500 py-[15px] px-7">
          Fund
        </button>
      </form>
    </div>
  );
};

export default FundSection;
