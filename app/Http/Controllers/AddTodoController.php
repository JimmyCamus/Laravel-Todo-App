<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AddTodoController extends Controller
{
    public function addTodo(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                "title" => "required",
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "status" => "failed",
                    "message" => "You have incomplete fields",
                ]);
            }

            $newTodo = new Todo();
            $newTodo->title = $request->title;
            $newTodo->status = 0;
            $newTodo->user_id = Auth::user()->id;
            $newTodo->save();

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
