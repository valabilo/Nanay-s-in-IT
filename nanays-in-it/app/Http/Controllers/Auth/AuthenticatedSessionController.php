<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
//     /**
//      * Display the login view.
//      */
//     public function create(): Response
//     {
//         return Inertia::render('Auth/Login', [
//             'canResetPassword' => Route::has('password.request'),
//             'status' => session('status'),
//         ]);
//     }

//     /**
//      * Get the authenticated user's session data.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @return \Inertia\Response
//      */
//     public function index(Request $request)
//     {
//         // Retrieve the authenticated user
//         $user = Auth::user();
        
//         // Retrieve the sessions associated with the user
//         $sessions = $user->sessions()->latest()->get();

//         return Inertia::render('Dashboard', [
//             'sessions' => $sessions,
//         ]);
//     }

//     /**
//      * Handle an incoming authentication request.
//      */
//     public function store(LoginRequest $request): RedirectResponse
//     {
//         $request->authenticate();

//         $request->session()->regenerate();

//         return redirect()->intended(route('dashboard', absolute: false));
//     }

//     /**
//      * Destroy an authenticated session.
//      */
//     public function destroy(Request $request): RedirectResponse
//     {
//         Auth::guard('web')->logout();

//         $request->session()->invalidate();

//         $request->session()->regenerateToken();

//         return redirect('/');
//     }
// }
public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}