type NftType = {
    name : string;
    image : string;
    tokenId : string;
    collectionName : string;
    collectionImage : string;
    website : string;
}

type DataType = {
    data : {
        nfts : NftType[];
        address : string;
    }
}