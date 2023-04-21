<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class WalletController extends Controller
{
    /**
     * Connect wallet to the account
     */
    public function connect(Request $request)
    {
        $address = $request->post('address');

        $user = User::find(Auth::user()->id);

        $user->eth_address = $address;

        $user->save();
    }
}
