import React from "react";
import ReactDOM from "react-dom/client";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import App from "./App";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Provider } from "react-redux";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { store } from "./app/store/configure";
import "./App";
import { BrowserRouter as Router } from "react-router-dom";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: "SQOWu4glSvD5HKThQY-wpMV2nOHD5B3X" })],
  [publicProvider()]
);

const projectId = "0ee0b6b66b7016786e516ff2750babbe";

const { wallets } = getDefaultWallets({
  appName: "Dexstrike",
  projectId: projectId,
  chains,
});

const connectors = connectorsForWallets([...wallets]);

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
