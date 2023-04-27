import React, { useState, useEffect } from "react";
import Pusher from 'pusher-js';

import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { NftCard } from "@/Components/NftCard";
import { SixDotsScaleMiddle } from "react-svg-spinners";
import { UnhappyIcon } from "@/Components/svgs";

interface Properties {
    auth: { user: App.Data.UserData };
    errors: any;
    address: string;
}

export default function NFTboard(properties: Properties): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState<NftType[]>([]);
    const [address, setAddress] = useState("");

    useEffect(()=>{
        const pusher = new Pusher("3df4867559edec0feecd", {
            cluster: "mt1",
            forceTLS: true,
        });

        const channelName = `user-channel.${properties.address}`;
        
        const channel = pusher.subscribe(channelName);

        channel.bind('nft-ready', function(receivedData:DataType) {
            
            setNfts(receivedData.data.nfts);
            setLoading(false);
            setAddress(receivedData.data.address);
        });

    },[]);

    return (
        <AuthenticatedLayout
            auth={properties.auth}
            /* eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment */
            error={properties.errors}
        >
            <Head title="NFTs" />
        {
            loading ?
                <div className="mx-auto my-auto">
                    <SixDotsScaleMiddle width="40px" height="40px" color="#414EB4"/>
                </div>
                :
                    nfts.length?
                        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[320px]:grid-cols-1 gap-4 m-8">
                            {
                                nfts.map((nft:NftType)=>(
                                    <NftCard key={nft.tokenId} nft={nft}/>
                                ))
                            }
                        </div>
                    :
                        <div className="mt-8 mx-auto flex flex-col items-center">
                            <UnhappyIcon/>
                            <h1 className="text-base text-secondary-700 font-bold mt-3">Unfortunately your wallet does not own any NFTs.</h1>
                        </div>
        }
        
        </AuthenticatedLayout>
    );
}
