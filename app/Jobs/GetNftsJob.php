<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Events\GetNftsJobCompleted;

class GetNftsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $address = null;
    /**
     * Create a new job instance.
     */
    public function __construct(String $address)
    {
        $this->address = $address;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $fetchURL = env('ALCHEMY_API_BASE_URL')."?owner=".$this->address;
        
        $curl = curl_init($fetchURL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
          'Content-Type: application/json'
        ]);
        $response = curl_exec($curl);
        curl_close($curl);
        
        $nftData = json_decode($response, true);

        $nfts = array();

        foreach($nftData["ownedNfts"] as $nft){
            array_push($nfts, [
                "name" => $nft["title"],
                "image" => $nft["media"][0]["gateway"],
                "tokenId" => $nft["id"]["tokenId"],
                "collectionName" => $nft["contractMetadata"]["name"],
                "collectionImage" => $nft["contractMetadata"]["openSea"]["imageUrl"],
                "website" => $nft["media"][0]["raw"],
            ]);
        }
        
        $data = [
            "nfts" => $nfts,
            "address" => $this->address,
        ];

        event(new GetNftsJobCompleted($data));
    }
}
