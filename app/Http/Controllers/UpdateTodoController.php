<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class UpdateTodoController extends Controller
{
    public function updateTodo(Request $request)
    {
        try {
            $todo = Todo::find($request->id);
            $todo->status = !$todo->status;
            $todo->save();

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
