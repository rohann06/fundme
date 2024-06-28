import { abi } from "@/utils/FundMeAbi";
import { contractAddress } from "@/utils/constant";
import React from "react";
import { formatEther } from "viem";
import { useReadContract } from "wagmi";
import dateFormat from "dateformat";

const FundersTableMobile = ({ fundreaddress }: { fundreaddress: string }) => {
  let date = new Date();
  const address = fundreaddress as `0x${string}`;
  const shortenedFunderAddress = `${fundreaddress.substring(
    0,
    10
  )}....${fundreaddress.substring(fundreaddress.length - 10)}`;
  const { data: amountFunded, isLoading } = useReadContract({
    abi,
    functionName: "addressToAmountFunded",
    address: contractAddress,
    args: [address],
  });

  if (!fundreaddress) {
    return null; // Handle the case when fundreaddress is undefined
  }
  console.log(fundreaddress);
  return (
    <div className=" md:hidden flex flex-col mt-8">
      <p className=" font-semibold mb-2">All Funders:</p>
      <div className=" border border-black rounded-[10px] p-3">
        <a
          href="https://etherscan.io/address/0x128733E87074F39D2b77E5e1101C2047CC553cb0"
          target="_blank"
          className=" underline text-indigo-500 font-mono font-medium"
        >
          {shortenedFunderAddress}
        </a>
        <p className=" font-semibold text-zinc-500">
          Funded:{" "}
          <span className=" font-semibold text-black font-mono">{formatEther(amountFunded ?? BigInt(0))} ETH</span>
        </p>
        <p className=" text-sm font-mono">{dateFormat(date, "mediumDate")}</p>
      </div>
    </div>
  );
};

export default FundersTableMobile;
