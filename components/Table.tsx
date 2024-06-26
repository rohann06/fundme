import React from "react";

const Table = ({ address }: { address: String }) => {
  return (
    <>
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
              <td className=" py-3 border-b-2 border-zinc-300">1 .</td>
              <td className=" py-3 border-b-2 border-zinc-300">
                <a
                  href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
                  target="_blank"
                  className=" underline text-indigo-500 font-mono"
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

      <div className=" md:hidden flex flex-col mt-8">
        <p className=" font-semibold mb-2">All Funders:</p>
        <div className=" border border-black rounded-[10px] p-3">
          <a
            href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
            target="_blank"
            className=" underline text-indigo-500 font-mono font-medium"
          >
            {address}
          </a>
          <p className=" font-semibold text-zinc-500">
            Funded: {" "}
            <span className=" font-semibold text-black font-mono">1 ETH</span>
          </p>
          <p className=" text-sm font-mono">14 May 2024</p>
        </div>
      </div>
    </>
  );
};

export default Table;
