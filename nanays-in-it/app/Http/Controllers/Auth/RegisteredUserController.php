<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate incoming request data
        $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'username' => 'required|string|unique:users|max:50',
            'password' => 'required|string|min:8',
            'email' => 'required|string|email|unique:users|max:100',
            'birthdate' => 'nullable|date',
            'age' => 'nullable|integer',
            'gender' => 'required|in:Male,Female,Other',
            'role_id' => 'nullable|integer'
    ]);

    // Create a new user instance
        $user = new User();
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->username = $request->input('username');
        $user->password = Hash::make($request->input('password')); // Hash the password
        $user->email = $request->input('email');
        $user->birthdate = $request->input('birthdate');
        $user->age = $request->input('age');
        $user->gender = $request->input('gender');
        $user->role_id = $request->input('role_id');
        // Add more fields as needed

        // Save the user to the database
        $user->save();

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('login', absolute: false));
    }
}