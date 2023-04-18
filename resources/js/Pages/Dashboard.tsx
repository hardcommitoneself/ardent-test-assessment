import { Head } from "@inertiajs/react";
import { ConnectWallet } from "@/Components";
import { useMetaMaskContext } from "@/Contexts/MetaMaskContext";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

interface Properties {
    auth: { user: App.Data.UserData };
    errors: any;
}

export default function Dashboard(properties: Properties): JSX.Element {
    const { account } = useMetaMaskContext();

    return (
        <AuthenticatedLayout
            auth={properties.auth}
            /* eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment */
            error={properties.errors}
        >
            <Head title="Dashboard" />

            {account === undefined && <ConnectWallet />}
        </AuthenticatedLayout>
    );
}
