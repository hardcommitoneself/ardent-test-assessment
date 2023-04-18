import { Method } from "@inertiajs/core";
import { Link } from "@inertiajs/react";
import { ApplicationLogo, Dropdown, PrimaryButton } from "@/Components";
import { useMetaMaskContext } from "@/Contexts/MetaMaskContext";

export default function Navbar(): JSX.Element {
    const { account, connecting, connectWallet } = useMetaMaskContext();

    return (
        <nav className="border-b border-secondary-300 bg-white font-sans">
            <div className="mx-auto max-w-7xl">
                <div className="flex h-17 items-center justify-between px-6 sm:px-8">
                    <Link href="/">
                        <ApplicationLogo />
                    </Link>

                    <div className="flex">
                        <div className="relative ml-3">
                            {account === undefined ? (
                                <PrimaryButton
                                    processing={connecting}
                                    onClick={() => {
                                        connectWallet();
                                    }}
                                >
                                    Connect
                                </PrimaryButton>
                            ) : (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {account}
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method={Method.POST}
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
