<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function logout()
    {
        Auth::logout();
        return response()->json([
            "status" => "success",
            "user" => (object)["id" => "", "name" => "", "email" => ""],
        ]);
    }
}
