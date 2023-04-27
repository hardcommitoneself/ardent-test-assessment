import React, {useState, useEffect} from 'react';
import { Tooltip } from './Tooltip';

interface NftCardProps {
    nft: NftType;
}

export const NftCard = (props: NftCardProps)=> {
    const nft = props.nft;
    return(
        <div className='bg-primary-0 border border-secondary-300 rounded-xl pt-2 pl-2 pr-2 pb-6 hover:border-2 hover:border-primary-400'>
            <img className='rounded-lg w-full' src={nft.image} alt={nft.name}></img>
            <div className='mt-3 ml-6'>
                <Tooltip content={nft.name}>
                    <h1 className='font-bold text-base text-secondary-900 hover:text-primary-700 cursor-pointer'>
                        {nft.name}
                    </h1>
                </Tooltip>
                <div className='mt-1 flex'>
                    <img className='rounded-md w-5' alt={nft.collectionName} src={nft.collectionImage}></img>
                    <h1 className='font-bold text-xs text-primary-600 ml-2'>{nft.name}</h1>
                </div>
            </div>
        </div>
    )
}