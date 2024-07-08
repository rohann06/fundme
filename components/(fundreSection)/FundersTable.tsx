"use client";
import React, { useEffect } from "react";
import { useAccount, useReadContract } from "wagmi";
import { abi } from "../../utils/FundMeAbi";
import { contractAddress } from "../../utils/constant";
import FundersTableMobile from "./FundersTableMobile";
import FundersTableBody from "./FundersTableBody";
import { useFundStore } from "@/lib/store/fundStore";

const FundersTable = () => {
  const { address: userAddress } = useAccount();
  const { data: fundresaddresses, refetch } = useReadContract({
    abi,
    functionName: "getAllFunders",
    address: contractAddress,
  });
  console.log("Fetched-DATA", fundresaddresses);

  const { isFunded, setIsFunded } = useFundStore();

  useEffect(() => {
    if (isFunded) {
      console.log("isFunded state changed, refetching...");
      refetch();
      setIsFunded(false);
    }
  }, [isFunded, refetch, setIsFunded]);

  return (
    <>
      <div className="hidden md:block">
        <table className="w-full">
          <thead className="p-3 text-white text-[19px]">
            <tr>
              <th className="rounded-tl-[10px] py-3 bg-[#151515]">No.</th>
              <th className="py-3 bg-[#151515]">Funders</th>
              <th className="py-3 bg-[#151515]">Fund</th>
              <th className="rounded-tr-[10px] py-3 bg-[#151515]">Date</th>
            </tr>
          </thead>
          <tbody className="text-center p-2 font-semibold text-[17px] border-2 border-zinc-300">
            {fundresaddresses?.map((fundreaddress, i) => (
              <FundersTableBody key={fundreaddress} fundreaddress={fundreaddress} i={i} />
            ))}
          </tbody>
        </table>
      </div>
      {fundresaddresses?.map((fundreaddress, i) => (
        <FundersTableMobile key={fundreaddress} fundreaddress={fundreaddress} />
      ))}
    </>
  );
};

export default FundersTable;
