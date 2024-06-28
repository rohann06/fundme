import React from "react";
import { abi } from "@/utils/FundMeAbi";
import { contractAddress } from "@/utils/constant";
import { useReadContract } from "wagmi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import dateFormat from "dateformat";
import { formatEther } from "viem";

interface FundersTableBodyProps {
  fundreaddress: string;
  i: number;
}

const FundersTableBody: React.FC<FundersTableBodyProps> = ({
  fundreaddress,
  i,
}) => {
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
    <>
      <tr>
        <td className="py-3 border-b-2 border-zinc-300">{i + 1}.</td>
        <td className="py-3 border-b-2 border-zinc-300">
          <a
            href={`https://etherscan.io/address/${fundreaddress}`}
            target="_blank"
            className="underline text-indigo-500 font-mono"
          >
            {shortenedFunderAddress}
          </a>
        </td>
        <td className="py-3 border-b-2 border-zinc-300">
          {amountFunded ? (
            `${formatEther(amountFunded)} ETH`
          ) : (
            <AiOutlineLoading3Quarters className="animate-spin bg-transparent" />
          )}
        </td>
        <td className="py-3 border-b-2 border-zinc-300">
          {dateFormat(date, "mediumDate")}
        </td>
      </tr>
    </>
  );
};

export default FundersTableBody;
