<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BoardOfAdvisors;
use Illuminate\Http\Request;

class BoardOfAdvisorsController extends Controller
{
    public function index()
    {
        $advisors = BoardOfAdvisors::all();
        return view('admin.board_of_advisors.index', compact('advisors'));
    }

    public function create()
    {
        // You can pass necessary data like company list to the create view
        return view('admin.board_of_advisors.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'company_id' => 'required|exists:companies,id',
            'name' => 'required|string|max:255',
        ]);

        BoardOfAdvisors::create([
            'company_id' => $request->input('company_id'),
            'name' => $request->input('name'),
        ]);

        return redirect()->route('admin.board_of_advisors.index')->with('success', 'Board member created successfully.');
    }

    public function edit(BoardOfAdvisors $advisor)
    {
        return view('admin.board_of_advisors.edit', compact('advisor'));
    }

    public function update(Request $request, BoardOfAdvisors $advisor)
    {
        $request->validate([
            'company_id' => 'required|exists:companies,id',
            'name' => 'required|string|max:255',
        ]);

        $advisor->update([
            'company_id' => $request->input('company_id'),
            'name' => $request->input('name'),
        ]);

        return redirect()->route('admin.board_of_advisors.index')->with('success', 'Board member updated successfully.');
    }

    public function destroy(BoardOfAdvisors $advisor)
    {
        $advisor->delete();
        return redirect()->route('admin.board_of_advisors.index')->with('success', 'Board member deleted successfully.');
    }
}