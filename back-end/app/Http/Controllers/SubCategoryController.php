<?php

namespace App\Http\Controllers;

use App\Models\Subcategory as Subcategory;
use APP\Http\Resources\SubcategoryResource as SubcategoryResource;
use App\Http\Controllers\Controller;
use DateTime;
use Illuminate\Http\Request;

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
        $subCategory = SubCategory::paginate(10);
        return SubCategoryResource::collection( $subCategory );
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
        $subCategory = new SubCategoryController;
        $subCategory -> name = $request -> input('Restaurante');
        $subCategory -> value = $request -> input(50);
        $subCategory -> date_time = date('yy-mm-dd');

        if($subCategory -> save()){
            return new SubcategoryResource ( $subCategory );
        }
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
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
