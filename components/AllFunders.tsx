import React from "react";

const AllFunders = () => {
  const address = "0x128733E87074F39D2b77E5e1101C2047CC553cb0";
  const shortenedAddress = `${address.substring(0, 10)}....${address.substring(
    address.length - 10
  )}`;
  return (
    <div className=" mx-3 md:mx-5">
      <div className="flex md:flex-row flex-col items-start md:items-center justify-between rounded-[10px]  border-[3px] py-[12px] border-slate-300 gap-y-3 px-0 md:px-5">
        <div className=" flex md:flex-row flex-col items-start md:items-center gap-x-[7px] text-[15px] md:text-[17px] font-bold mx-3 md:mx-5">
          <p className=" text-gray-500">Current Funds:</p>
          <p>0 ETH</p>
        </div>
        <div className=" flex md:flex-row flex-col items-start md:items-center gap-x-[7px] text-[15px] md:text-[17px] font-bold mx-3 md:mx-5">
          <p className=" text-gray-500">Contract Add:</p>
          <a
            href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
            className=" underline font-semibold hover:text-indigo-400"
            target="_blank"
          >
            {shortenedAddress}
          </a>
        </div>
        <div className=" flex md:flex-row flex-col items-start md:items-center gap-x-[7px] text-[15px] md:text-[17px] font-bold mx-3 md:mx-5">
          <p className=" text-gray-500">Owner Add:</p>
          <a
            href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
            target="_blank"
            className=" underline font-semibold hover:text-indigo-400"
          >
            {shortenedAddress}
          </a>
        </div>
      </div>

      <div className=" hidden md:flex flex-col justify-center items-center mt-3">
        <table className=" w-full mx-5">
          <thead className="p-3 text-white text-[19px]">
            <tr>
              <th className=" rounded-tl-[10px] py-3 bg-[#151515]">No.</th>
              <th className=" py-3 bg-[#151515]">Funders</th>
              <th className=" py-3 bg-[#151515]">Fund</th>
              <th className=" rounded-tr-[10px] py-3 bg-[#151515]">Date</th>
            </tr>
          </thead>

          <tbody className=" text-center p-2 font-semibold text-[17px] border-2 border-zinc-300">
            <tr>
              <td className=" py-3 border-b-2 border-zinc-300">1.</td>
              <td className=" py-3 border-b-2 border-zinc-300">
                <a
                  href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
                  target="_blank"
                  className=" underline hover:text-indigo-400"
                >
                  {address}
                </a>
              </td>
              <td className=" py-3 border-b-2 border-zinc-300">1 ETH</td>
              <td className=" py-3 border-b-2 border-zinc-300">14 May 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFunders;
