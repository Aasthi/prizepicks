import Head from "next/head";

import { Web3AuthProvider } from "../services/web3auth";
import Main from "@/components/home";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <div className="bg-black">
      <Web3AuthProvider chain="mainnet" web3AuthNetwork="testnet">
        <Layout>
          <Main />
        </Layout>
      </Web3AuthProvider>
    </div>
  );
}
