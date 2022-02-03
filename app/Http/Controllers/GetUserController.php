<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetUserController extends Controller
{
    public function getUser(Request $request)
    {
        try {
            if (! Auth::check()) {
                return response()->json([
                    "status" => "success",
                    "loggedin" => false,
                    "user" => (object)[],
                ]);
            }

            $user = request()->user();
            return response()->json([
                "status" => "success",
                "loggedin" => true,
                "user" => $user,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => "failed",
                "message" => "unexpected error, please try later.",
            ]);
        }
    }
}
