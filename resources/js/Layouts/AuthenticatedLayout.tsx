import Navbar from "./Navbar";

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
interface Properties {
    auth: { user: App.Data.UserData };
    header?: React.ReactNode;
    children?: React.ReactNode;
    error?: any;
}

export default function Authenticated({ header, children }: Properties): JSX.Element {
    return (
        <div className="flex min-h-screen flex-col bg-app">
            <Navbar />

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main className="flex grow">{children}</main>
        </div>
    );
}
