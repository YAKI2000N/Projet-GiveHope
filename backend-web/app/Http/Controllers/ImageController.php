<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;


use Illuminate\Support\Facades\Response;


use Illuminate\Http\Request;

class ImageController extends Controller
{public function show($filename)

    {
    
        $path = storage_path('app/public/medicament_images/' . $filename);
    
        if (!File::exists($path)) {
    
            abort(404);
    
        }
    
        $file = File::get($path);
    
        $type = File::mimeType($path);
    
        $response = Response::make($file, 200);
    
        $response->header("Content-Type", $type);
    
        return $response;
    
    }
    
    

}
























/*
{
   public function show($filename)
    {
        $path = storage_path('app/public/medicament_images/' . $filename);
        
echo($path);
        if (!file_exists($path)) {
            return response()->json(['error' => 'Image not found'], 404);
        }
        $type = mime_content_type($path);

        $file = file_get_contents($path);
        $headers = [
            'Content-Type' => $type,
        ];
        return response($file, 200, $headers);
    }}



   */