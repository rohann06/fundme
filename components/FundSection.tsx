"use client";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { parseEther } from "viem";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { abi } from "../utils/FundMeAbi";
import { contractAddress } from "../utils/constant";
const FundSection = () => {
  const [fundAmount, setFundAmount] = useState("");
  const { data: hash, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  const sendFund = async (e: React.FormEvent) => {
    e.preventDefault();
    writeContract({
      address: contractAddress,
      abi,
      functionName: "fund",
      value: parseEther(fundAmount),
    });

    setFundAmount("");
    console.log("Fund", fundAmount);
  };

  return (
    <div className="relative h-[400px] mb-5 md:mb-0 md:h-[500px] w-screen">
      <div className="bg-[url('/eth.webp')] h-[400px] md:h-[500px] w-screen absolute top-0 left-0 z-0"></div>
      <div className="bg-white absolute h-[400px] md:h-[500px] w-screen opacity-70 z-10 top-0 left-0"></div>
      <div className="bg-transparent flex flex-col justify-center items-center absolute top-0 left-0 h-[400px] md:h-full w-full z-20">
        <div className="text-[27px] md:text-[53px] font-extrabold mb-[10px] md:mb-[30px] bg-transparent">
          <p className="bg-transparent">FundMe Ethereum</p>
        </div>
        <form
          onSubmit={sendFund}
          className="flex items-center gap-x-2 bg-transparent"
        >
          <div className="bg-transparent">
            <input
              value={fundAmount}
              onChange={(e) => setFundAmount(e.target.value)}
              required
              name="fund"
              placeholder="Minimum Fund $5 "
              type="text"
              className="text-sm md:text-base w-[250px] md:w-[580px] bg-[#dbd9d9] px-4 md:px-6 py-[10px] md:py-[15px] rounded-full border-[1px] border-black font-semibold font-mono"
            />
          </div>
          <button
            disabled={isConfirming}
            className="rounded-full text-base md:text-lg font-medium bg-indigo-400 hover:bg-indigo-500 py-[10px] md:py-[15px] px-5 md:px-7"
          >
            {isConfirming ? (
              <AiOutlineLoading3Quarters className="animate-spin bg-transparent" />
            ) : (
              "Fund"
            )}
          </button>
        </form>
        <p></p>
      </div>
    </div>
  );
};

export default FundSection;
