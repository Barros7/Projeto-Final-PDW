<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $subcategory = Subcategory::all();
        return response()->json([
            "success" => true,
            "message" => "SubCategory List",
            "data" => $subcategory
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $subcategory = new SubCategory();
        $subcategory->name = $request->name;

        $subcategory->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $subcategory = SubCategory::find($id);
        if (is_null($subcategory)) {
            return $this->sendError('SubCategory not found.');
        }
        return response()->json([
            "success" => true,
            "message" => "SubCategory retrieved successfully.",
            "data" => $subcategory
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $subcategory = SubCategory::findOrFail($request->id);
        $subcategory->name = $request->name;

        $subcategory->save();

        return $subcategory;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //        
        $subcategory = SubCategory::destroy($request->id);
        return $subcategory;
    }
}

