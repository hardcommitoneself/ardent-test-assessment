import PrimaryButton from "./PrimaryButton";
import { ILoading, IMetaMask } from "./svgs";
import { useMetaMaskContext } from "@/Contexts/MetaMaskContext";
import { CrossIcon } from "./svgs";

export default function ConnectWallet(): JSX.Element {
    const { account, connecting, errorMessage, connectWallet } = useMetaMaskContext();

    return (
        <div className="flex grow flex-col items-center justify-center space-y-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF8EB]">
                <IMetaMask />
            </div>

            <div className="text-center">
                <h1 className="text-2xl font-bold text-secondary-900">Welcome</h1>
                <span className="text-sm font-semibold text-secondary-700">
                    Connect your wallet via MetaMask to continue
                </span>
            </div>

            {account === undefined &&
                (connecting ? (
                    <div className="flex items-center space-x-2">
                        <ILoading />
                        <span className="font-bold">Connecting...</span>
                    </div>
                ) : (
                    <>
                        <PrimaryButton
                            processing={false}
                            onClick={() => {
                                connectWallet();
                            }}
                        >
                            {errorMessage === undefined ? "Connect Wawllet" : "Retry"}
                        </PrimaryButton>
                        {
                            errorMessage !== undefined ? 
                            <div className="bg-red-50 w-80 py-4 px-6 rounded-xl">
                                <div className="flex items-center">
                                    <CrossIcon/>
                                    <h1 className="font-bold text-base text-red-600 ml-2">Error</h1>
                                </div>
                                <h1 className="mt-3 text-sm font-semibold text-secondary-700">
                                    There was a problem connecting the wallet to the NFTer, try again.
                                </h1>
                            </div>
                            :
                            ""
                        }
                    </>
                ))}
        </div>
    );
}
