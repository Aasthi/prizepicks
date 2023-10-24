import Head from "next/head";

import { Web3AuthProvider } from "../services/web3auth";
import Main from "@/components/home";

export default function Home() {
  return (
    <div className="bg-black">
      <Web3AuthProvider chain="mainnet" web3AuthNetwork="testnet">
        <Main />
      </Web3AuthProvider>
    </div>
  );
}
