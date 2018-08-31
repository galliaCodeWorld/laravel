<?php

namespace App\Http\Controllers\Twitter;

use App\Http\Controllers\Controller;

class ChannelController extends Controller
{

    public function select($id)
    {
        $user = auth()->user();
        $channel = $user->twitterChannels()->find($id);

        if($channel){
            $channel->select();
        }

        return $user->formattedChannels();
    }

}