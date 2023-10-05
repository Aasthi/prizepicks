import { ConnectButton } from "@rainbow-me/rainbowkit";
import wallet from "../assets/wallet.png";
import connectedWallet from "../assets/connectedWallet.png";
import wrongNetwork from "../assets/wrongNetwork.png";
import wrongWallet from "../assets/wrongWallet.png";

const Account = ({ main = false }) => {
  return (
    // <ConnectButton />
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div className={`text-white`}>
            {(() => {
              if (!connected) {
                return (
                  <div>
                    <div className="hidden sm:block">
                      <button
                        onClick={openConnectModal}
                        className={`${
                          main ? "" : "w-[242px] h-[52px] hover:underline"
                        } py-2`}
                      >
                        <div className="flex flex-row justify-center items-center space-x-4">
                          <img src={wallet} />
                          <div>Connect Wallet</div>
                        </div>
                      </button>
                    </div>
                    <div className="block sm:hidden">
                      <button onClick={openConnectModal}>
                        <img src={wallet} />
                      </button>
                    </div>
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <div>
                    <div className="hidden sm:block">
                      <button
                        onClick={openChainModal}
                        className={`${
                          main ? "" : "w-[242px] h-[52px] hover:underline"
                        } py-2`}
                      >
                        <div className="flex flex-row justify-center items-center space-x-4">
                          <img src={wrongNetwork} />
                          <div>Switch network</div>
                        </div>
                      </button>
                    </div>
                    <div className="block sm:hidden">
                      <button onClick={openChainModal}>
                        <img src={wrongWallet} />
                      </button>
                    </div>
                  </div>
                );
              }
              return (
                <div>
                  <div className="hidden sm:block">
                    <button
                      onClick={openAccountModal}
                      className={`${
                        main ? "" : "w-[242px] h-[52px] hover:underline"
                      } py-2`}
                    >
                      <div className="flex flex-row justify-center items-center space-x-4">
                        <img src={wallet} />
                        <div>{account.displayName}</div>
                      </div>
                    </button>
                  </div>
                  <div className="block sm:hidden">
                    <button onClick={openAccountModal}>
                      <img src={connectedWallet} />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Account;
