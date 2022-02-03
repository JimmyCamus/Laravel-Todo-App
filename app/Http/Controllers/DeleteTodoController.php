<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class DeleteTodoController extends Controller
{
    public function deleteTodo(Request $request)
    {
        try {
            $todo = Todo::find($request->id);
            $todo->delete();
            return response()->json([
                "status" => "success",
                "todos" => Todo::where("user_id", Auth::user()->id)->get(),
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "status" => "failed",
                "message" => "unexpected error, please try later.",
            ]);
        }
    }
}
