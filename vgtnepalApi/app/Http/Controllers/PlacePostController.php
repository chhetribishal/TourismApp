<?php

namespace App\Http\Controllers;

use App\Models\placePost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PlacePostController extends Controller
{
    //
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'sort_desc' => 'required',
            'full_desc' => 'required',
            'image' => 'required|image',

        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->all()],status:409);
        }
        $p=new placePost();
        $p->name=$request->name;
        $p->sort_desc=$request->sor_desc;
        $p->full_desc=$request->full_desc;
        $p->save();

        $url ="http://localhost:8000/storage/";
        $file= $request->file(key:'image');
        $extension= $file->getClientOriginalExtension();
        $path = $file->storeAs(path:'tourismimg/',name:$p->id.'.'.$extension);
        $p->image=$path;
        $p->imgpath=$url.$path;
        $p->save();
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'sort_desc' => 'required',
            'full_desc' => 'required',
            'id'=>'required'

        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->all()],status:409);
        }
        $p= placePost::find($request->id);
        $p->name=$request->name;
        $p->sort_desc=$request->sor_desc;
        $p->full_desc=$request->full_desc;
        $p->save();
        return response()->json(['message'=>' Place successfully Updated!']);

       
    }
    public function delete(Request $request)
    {
       $validator=Validator::make($request->all(),[
        '$id'=>'required',
       ]);

       
        $p= placePost::find($request->id)->delete();
        
       
        return response()->json(['message'=>' Place successfully Deleted!']);

    }
    public function show(Request $request)
    {
        session(['keys'=>$request->keys]);
        $places = placePost::where(function($q){
            $q->where('placePost.id','LIKE','%'.session(key:'keys').'%')
            ->orwhere('placePost.name','LIKE','%'.session(key:'keys').'%');
        })->select('placePost.*')->get();
        return response()->json(['placePost'=>$places]);
    }
}
