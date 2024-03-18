<?php

namespace App\Http\Controllers;

use App\Models\Medicament;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class MedicamentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Medicament::select('id', 'name', 'price', 'description', 'photo')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = $request->file('image')->store('medicament_images', 'public');

        Medicament::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'photo' => Storage::url($imagePath),
        ]);

        return response()->json([
            'message' => 'New item added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medicament  $medicament
     * @return \Illuminate\Http\Response
     */
    public function show(Medicament $medicament)
    {
        return response()->json([
            'Medicament' => $medicament
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medicament  $medicament
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Medicament $medicament)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('medicament_images', 'public');
            Storage::delete($medicament->image_path);
            $medicament->image_path = $imagePath;
            $medicament->photo = Storage::url($imagePath);
        }

        $medicament->name = $request->name;
        $medicament->price = $request->price;
        $medicament->description = $request->description;

        $medicament->save();

        return response()->json([
            'message' => 'Item updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medicament  $medicament
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medicament $medicament)
    {
        Storage::delete($medicament->image_path);

        $medicament->delete();

        return response()->json([
            'message' => 'Item deleted successfully'
        ]);
    }
}