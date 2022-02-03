<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class GetTodoController extends Controller
{
    public function getTodos()
    {
        try {
            return response()->json([
                "status" => "success",
                "todos" => Todo::where("user_id", Auth::user()->id)->get(),
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => "failed",
                "message" => "unexpected error, please try later."
            ]);
        }
    }
}
