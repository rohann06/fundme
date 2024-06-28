"use client";
import React from "react";
import { useAccount, useReadContract } from "wagmi";
import { abi } from "../utils/FundMeAbi";
import Funders from "./Funders";
import { contractAddress } from "../utils/constant";

const Table = () => {
  const { address: userAddress } = useAccount();
  const {
    data: hash,
    isPending,
    isSuccess,
    isError,
  } = useReadContract({
    abi,
    functionName: "funders",
    address: contractAddress,
  });
  console.log("Fetched-DATA", hash);
  console.log("Fetched-er", isError);
  return (
    <>
      <Funders />
    </>
  );
};

export default Table;
