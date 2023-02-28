<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{

    public function index()
    {
        $categorias = Categoria::all();
        return $categorias;
    }


    public function store(Request $request)
    {
        $categoria = new Categoria();
        $categoria->nombre_categoria = $request->nombre_categoria;

        $categoria->save();
    }


    public function show(string $id)
    {
        $categoria = Categoria::find($id);
    }

    public function update(Request $request, string $id)
    {
        $categoria = Categoria::findOrFail($request->id);
        $categoria->nombre_categoria = $request->nombre_categoria;

        $categoria->save();
        return $categoria;
    }

    public function destroy(string $id)
    {
        $categoria = Categoria::destroy($id);
        return $categoria;
    }
}
