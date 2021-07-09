<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator ;


class userController extends Controller
{
    //
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',

        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->all()],status:409);
        }
        $p=new User();
        $p->name=$request->name;
        $p->email=$request->email;
        $p->password=encrypt($request->password);
        $p->save();
        return response()->json(['message'=>"successfully registerd"]);
    }
    public function login(Request $request)
    {   
        $validator = Validator::make($request->all(),[
            'email'=>'required',
            'password'=>'required',
        ]);
        if($validator->fails())
        {        
             echo "hello";

            return response()->json(['error'=>$validator->errors()->all(),false],status:409);
        }
        $user= User::where('email',$request->email)->get()->first();
        if($user )
        {   
            $password=decrypt($user->password);

            if($password==$request->password){
            return response()->json(['user'=>$user]);
            }
            else {
            return response()->json(['error'=>['oops ! something fault '],false],status:409);
            }


        }
        else
        {
            return response()->json(['error'=>['oops ! something fault ']],status:409);
        }
    }
}
