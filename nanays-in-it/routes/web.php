<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardFAQController;
use App\Http\Controllers\HomeFAQController;
use App\Http\Controllers\CompaniesController;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

// Public routes
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About/index');
})->name('about');

Route::get('/programs', function () {
    return Inertia::render('Programs');
})->name('programs');

Route::get('/partner', function () {
    return Inertia::render('Partner/index');
})->name('partner');

Route::get('/home-faqs', [HomeFAQController::class, 'index'])->name('home-faqs');

Route::get('/advisors', function () {
    return Inertia::render('BoardofAdvisors/index');
})->name('advisors');

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/faqs', [DashboardFAQController::class, 'index'])->name('faqs.index');
    Route::get('/faqs/create', [DashboardFAQController::class, 'create'])->name('faqs.create');
    Route::post('/faqs', [DashboardFAQController::class, 'store'])->name('faqs.store');
    Route::get('/faqs/{faq}/edit', [DashboardFAQController::class, 'edit'])->name('faqs.edit');
    Route::put('/faqs/{faq}', [DashboardFAQController::class, 'update'])->name('faqs.update');
    Route::delete('/faqs/{faq}', [DashboardFAQController::class, 'destroy'])->name('faqs.destroy');

    Route::get('/partner-company', [CompaniesController::class, 'index'])->name('partner-company.index');
    Route::get('/partner-company/create', [CompaniesController::class, 'create'])->name('partner-company.create');
    Route::post('/partner-company', [CompaniesController::class, 'store'])->name('partner-company.store');
    Route::get('/partner-company/{company}/edit', [CompaniesController::class, 'edit'])->name('partner-company.edit');
    Route::put('/partner-company/{company}', [CompaniesController::class, 'update'])->name('partner-company.update');
    Route::delete('/partner-company/{company}', [CompaniesController::class, 'destroy'])->name('partner-company.destroy');
});

require __DIR__.'/auth.php';
