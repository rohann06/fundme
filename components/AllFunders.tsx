import React from "react";
import Table from "./Table";

const AllFunders = () => {
  const address = "0x128733E87074F39D2b77E5e1101C2047CC553cb0";
  const shortenedAddress = `${address.substring(0, 10)}....${address.substring(
    address.length - 10
  )}`;
  return (
    <div className=" md:mt-0 mx-2 md:mx-2">
      <div className="flex md:flex-row flex-col items-start md:items-center justify-between rounded-[10px]  border-[3px] py-[12px] border-zinc-300 gap-y-3 px-0 md:px-5">
        <div className=" flex md:flex-row flex-col items-start md:items-center gap-x-[7px] text-[15px] md:text-[17px] font-bold mx-3 md:mx-5">
          <p className=" text-gray-400">Contract Add:</p>
          <a
            href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
            className=" underline font-semibold hover:text-indigo-400 font-mono"
            target="_blank"
          >
            {shortenedAddress}
          </a>
        </div>
        <div className=" flex md:flex-row flex-col items-start md:items-center gap-x-[7px] text-[15px] md:text-[17px] font-bold mx-3 md:mx-5">
          <p className=" text-gray-400">Current Funds:</p>
          <p className="font-mono">0 ETH</p>
        </div>
        <div className=" flex md:flex-row flex-col items-start md:items-center gap-x-[7px] text-[15px] md:text-[17px] font-bold mx-3 md:mx-5">
          <p className=" text-gray-400">Owner Add:</p>
          <a
            href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
            target="_blank"
            className=" underline font-semibold hover:text-indigo-400 font-mono"
          >
            {shortenedAddress}
          </a>
        </div>
      </div>
      <Table address={shortenedAddress} />
    </div>
  );
};

export default AllFunders;
