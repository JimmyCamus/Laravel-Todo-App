<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'username' => 'required',
                "email" => "required|email|unique:users,email",
                "password" => "required"
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "status" => "failed",
                    "message" => "you have incomplete fields or the email is already registered",
                ]);
            }

            $newUser = new User();
            $newUser->name = $request->username;
            $newUser->email = $request->email;
            $newUser->password = Hash::make($request->password);
            $newUser->save();

            return response()->json([
                "status" => "success",
                "message" => "regitration completed",
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => "success",
                "message" => "unexpected error, please try later.",
                "error" => $th,
            ]);
        }
    }
}
