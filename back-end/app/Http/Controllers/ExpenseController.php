<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Expense;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $expense = Expense::all();
        return response()->json([
            "success" => true,
            "message" => "Expense List",
            "data" => $expense
        ]);

        //return $expense;
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
        $expense = new Expense();
        $expense->name = $request->name;
        $expense->value = $request->value;

        $expense->save();
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
        $expense = Expense::find($id);
        if (is_null($expense)) {
            return $this->sendError('Expense not found.');
        }
        return response()->json([
            "success" => true,
            "message" => "Expense retrieved successfully.",
            "data" => $expense
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
        $expense = Expense::findOrFail($request->id);
        $expense->name = $request->name;
        $expense->value = $request->value;
        $expense->date_time = $request->date_time;

        $expense->save();

        return $expense;
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
        $expense = Expense::destroy($request->id);
        return $expense;
    }
}

