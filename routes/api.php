<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\AddTodoController;
use App\Http\Controllers\GetTodoController;
use App\Http\Controllers\GetUserController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DeleteTodoController;
use App\Http\Controllers\UpdateTodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("register", [RegisterController::class, "register"]);
Route::post("login", [LoginController::class, "login"]);
Route::post("addTodo", [AddTodoController::class, "addTodo"]);
Route::post("updateTodo", [UpdateTodoController::class, "updateTodo"]);
Route::post("deleteTodo", [DeleteTodoController::class, "deleteTodo"]);
Route::get("logout", [LogoutController::class, "logout"]);
Route::get("/user", [GetUserController::class, "getUser"]);
Route::get("getTodos", [GetTodoController::class, "getTodos"]);
