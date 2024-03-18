<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = User::where('email', $request['email'])->first();

        if ($user) {
            $response['status'] = 0;
            $response['message'] ='User already exists';
            $response['code'] = 409;
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);
            $response['status'] = 1;
            $response['message'] ='User registered successfully';
            $response['code'] = 200;
        }

        return response()->json($response);
    }


    public function login(Request $request){

        $credentials = $request->only('email','password');
        try {
            if(!JWTAuth::attempt($credentials)){

            $response['status']= 0 ;
            $response['code']=401 ;
            $response['data']= null ;
            $response['message']= 'Email or Password is incorrect';
            return response()->json($response);
   
            }

        } catch(JWTException $e){

            $response['data']= null ;
            $response['code']=500 ;
            $response['message']= 'Could Not Create Token';

            return response()->json($response);

        }

        $user = auth()->user();
        $data['token'] = JWTAuth::fromUser($user, [
            'user_id' => $user->id,
            'email' => $user->email
        ]);
        $response['data']= $data ;
        $response['status']= 1 ;
        $response['code']=200 ;
        $response['message']= 'Login Successfully';

        return response()->json($response);

    }
}

