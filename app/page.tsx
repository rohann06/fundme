
import AllFunders from "@/components/(fundreSection)/AllFunders";
import FundSection from "@/components/FundSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  //  Contractaddress = 0x9b7438C3bE458596a73847b131dC8280e0557262
  return (
    <main>
      <Navbar />

      <FundSection />

      <AllFunders />
    </main>
  );
}
