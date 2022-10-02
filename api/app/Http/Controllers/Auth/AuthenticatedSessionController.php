<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthenticatedSessionController extends Controller
{

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|',
            'password' => 'required'
        ]);
        if (!auth()->guard()->attempt($request->only('email', 'password'))) {
            return response()->json(['errors' => ['email' => ['These credentials do not match our records.']]], 422);
        }
    }
}
